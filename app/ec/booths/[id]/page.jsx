'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '../../sidebar/page';

const BoothDetail = () => {
    const params = useParams();
    const boothID = params.id;
  return (
    <>
    <Sidebar />
    <div className="p-4">
            <h1 className="text-xl font-bold">Booth Details</h1>
            <p>Booth ID: {boothID}</p>
        </div>
    </>
    );
}

export default BoothDetail;
