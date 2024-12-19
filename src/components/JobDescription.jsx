import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { setSingleJob } from '@/redux/jobslice'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'

const JobDescription = () => {
    const isApplied = true
    const params = useParams()
    const jobId = params.id
    const { singleJob } = useSelector(store => store.job)
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true })
                console.log(res);

                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob()
    }, [jobId, dispatch, user?._id])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.tittle}</h1>
                    <div className='flex items-center gap-2 my-4 '>
                        <Badge className={'text-blue-700 font-bold '} variant={'ghost'}>{singleJob?.positions} Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold '} variant={'ghost'}>{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold '} variant={'ghost'}>{singleJob?.salary} LPA</Badge>
                    </div>
                </div>
                <Button
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : "bg-[#7209b7] hover:bg-[#5f32ad]"}`}>
                    {isApplied ? "Already Applied" : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-md py-4 '>Job Description</h1>
            <div className='py-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.tittle}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.application?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription