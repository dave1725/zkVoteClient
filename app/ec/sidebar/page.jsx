'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from 'thirdweb/react';
import { client } from '../client/page';

const Sidebar = () => {
    const pathName = usePathname();

    const menuItems = [
        { name: "BOOTHS", path: "/ec/booths" },
        { name: "CONTROLS", path: "/ec/controls" },
        { name: "CANDIDATES", path: "/ec/candidates" },
        { name: "ANALYTICS", path: "/ec/analytics" },
    ];

    return (
        <div className="fixed flex bg-red-300 w-[300px] h-screen justify-center text-center">
            <div className="my-[50px]">
                <h1 className="text-xl font-bold">zkVOTE</h1>
                <ul className="py-[50px] space-y-2">
                    <ConnectButton client={client} />
                    {menuItems.map((item, index) => (
                        <li key={index} className={`py-2 my-2 w-[200px] text-center h-[50px] cursor-pointer 
                            transition-all duration-300 rounded-lg 
                            ${pathName === item.path ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"}`}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
