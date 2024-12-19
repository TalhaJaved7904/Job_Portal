import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const fiterData = [
    {
        filterType: "Location",
        arrays: ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Peshawar"]
    },
    {
        filterType: "Industry",
        arrays: ["Frontend Dveloper", "Backend Dveloper", "FullStack Dveloper"]
    },
    {
        filterType: "Salary",
        arrays: ["0-40k", "42-1lakh", "1lakh-5lakh"]
    },
]

const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    fiterData.map((data, index) => (
                        <div>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.arrays.map((item, index) => {
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} />
                                            <label>{item}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard