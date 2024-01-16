import React from 'react'
import { useAppStore } from '../../hooks/Context'
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
const Wetherdetail = () => {
const{currentWether}=useAppStore();
if(currentWether!==null){
    const{wind,main}=currentWether;
  return (
    <div className=' bg-slate-700 text-white rounded-2xl h-60 p-9 flex flex-col  justify-center'>
    <p className='font-bold text-xl mb-4'>AIR CONDITIONS</p>
    <div className='flex flex-wrap '>
        <div className='flex items-center w-1/2  gap-2 mb-3'>
            <div className="icon text-4xl">
            <FaThermometerThreeQuarters />
            </div>
            <div className="flex flex-col text-2xl ">
                <p className='text-gray-300'>Temperature is</p>
                <p className='text-xl text-gray-200'>{main.temp}</p>
            </div>
        </div>
        <div className='flex w-1/2 items-center gap-2 mb-3'>
            <div className="icon text-4xl">
            <FaWind />
            </div>
            <div className="flex flex-col text-2xl">
                <p className='text-gray-300'>Wind Speed</p>
                <p className='text-xl text-gray-200'>{wind.speed}</p>
            </div>
        </div>
        <div className='flex w-1/2 items-center gap-2 mb-3'>
            <div className="icon text-4xl">
            <FaSun/>

            </div>
            <div className="flex flex-col text-2xl">
                <p className='text-gray-300'>Humidity</p>
                <p className='text-xl text-gray-200'>{main.humidity}</p>
            </div>
        </div>
        <div className='flex w-1/2 items-center gap-2 mb-3'>
            <div className="icon text-4xl">
            <MdWaterDrop/>

            </div>
            <div className="flex flex-col text-2xl">
                <p className='text-gray-300'>Real Feel</p>
                <p className='text-xl text-gray-200'>30%</p>
            </div>
        </div>
    </div>
    </div>
  )}
}

export default Wetherdetail