'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from 'thirdweb/react';
import { client } from '../client/page';

const Sidebar = () => {
    const pathName = usePathname();
    console.log(pathName);

    const menuItems = [
        {name:"BOOTHS",path:"/ec/booths"},
        {name:"CONTROLS",path:"/ec/controls"},
        {name:"CANDIDATES",path:"/ec/candidates"},
        {name:"ANALYTICS",path:"/ec/analytics"},
    ];

    return (
        <>
            <div className="fixed flex bg-red-300 w-[300] h-[100vh] justify-center text-center">
                <div className="my-[50]">
                    <h1><b>zkVOTE</b></h1>
                    <ul className="py-[50px]">
                        <ConnectButton client={client}/>
                        {menuItems.map((item,index)=>(
                            <li key={item.path} className={`py-[10] my-[10] bg-white w-[200] text-center h-[50] cursor-pointer hover:translate-y-1
                            ${pathName === item.path ? "bg-black text-white" : ""}`}>
                                <Link href={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
