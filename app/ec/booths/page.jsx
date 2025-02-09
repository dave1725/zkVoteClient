import React from 'react';
import Sidebar from '../sidebar/page';

const Booths = () => {
  return (
    <>
        <div className="flex">
          <Sidebar />
          <div className="ml-[350] overflow-y-auto flex mx-[40] my-[80] flex-col ">
            <div className="mb-[50]">
              <h1>Active Booths</h1>
              <div className="w-[800] h-[2] bg-black mb-[40]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
            </div>
            <div className="">
              <div className="flex flex-row gap-5 justify-between">
                <h1 >Resting Booths</h1>
                <button className='text-white bg-blue-400 h-[30] w-[100] rounded-md mb-[10] hover:text-grey-400'>+ Add Booth</button>
              </div>
              <div className="w-[800] h-[3] bg-black mb-[40]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
              <div className="h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]"></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Booths;
