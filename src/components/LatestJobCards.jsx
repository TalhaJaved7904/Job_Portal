import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({ job }) => {
    return (
        <div className='p-5 rounded-medium shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>Pakistan</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.tittle}</h1>
                <p className='text-sm text-gray-600'>{job?.description}.</p>
            </div>
            <div className='flex items-center gap-2 my-4 '>
                <Badge className={'text-blue-700 font-bold '} variant={'ghost'}>{job?.positions} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold '} variant={'ghost'}>{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold '} variant={'ghost'}>{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards