import React from 'react';
import Sidebar from '../sidebar/page';
import Link from 'next/link';

const boothData = [
  {name:'MUMBAI101',id:"XYAS45623",location:"Mumbai",active:10,votes:1000},
  {name:'MUMBAI101',id:"XYAS45623",location:"Mumbai",active:10,votes:1000},
  {name:'MUMBAI101',id:"XYAS45623",location:"Mumbai",active:10,votes:1000},
  {name:'MUMBAI101',id:"XYAS45623",location:"Mumbai",active:10,votes:1000}
]

const Booths = () => {
  return (
    <>
        <div className="flex">
          <Sidebar />
          <div className="ml-[350] overflow-y-auto flex mx-[40] my-[80] flex-col ">
            <div className="mb-[50]">
              <h1>Active Booths</h1>
              <div className="w-[800] h-[2] bg-black mb-[40]"></div>

                {boothData.map((item,index)=>(
                  <>
              <div key={index} className="flex flex-row">
                  <div className="flex flex-row px-[10px] items-center justify-between h-[70] w-[800] border-4 border-black-500 rounded-lg mb-[10]">
                  <div className="flex flex-col text-center">
                    <h1>{item.name}</h1>
                    <p className='text-gray-500'>Name</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <h1>XYSF452SDF</h1>
                    <p className='text-gray-500'>ID</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <h1>Mumbai</h1>
                    <p className='text-gray-500'>Location</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <h1>10</h1>
                    <p className='text-green-500'>Active Wallets</p>
                  </div>
                  <div className="flex flex-col text-center">
                    <h1>1000</h1>
                    <p className='text-gray-500'>Votes Casted</p>
                  </div>
                </div>
                <div className="cursor-pointer flex ml-[4px] h-[70px] w-[80px] rounded-lg border-4 justify-center items-center border-black-500">
                  <Link href="/ec/booths/12" className='text-center'>VIEW</Link>
                </div>
              </div>
                </>
                ))}
  
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
