   "use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar () {
    const [menuopen,setmenuopen] = useState(false);
    const togglemenu = () =>{
        setmenuopen(!menuopen)
    }
    return (
        <main className="bg-white shadow shadow-gray-200 w-full">
            <div className="flex justify-between h-[50px]">
                <h1>FastCash</h1>
                <ul className="flex gap-5 ">
                   <Link href="/dashboard/get-loan"><li>GetLoan</li></Link>
                   <Link href="/dashboard/loan-history"><li>LoanHistory</li></Link>
                   <Link href="/dashboard/update-profile"><li>Update-Profile</li></Link>
                </ul>
                <div className="hidden md:flex items-center gap-2">
                    <CgProfile className="text-2xl cursor-pointer gap-2" />
                    <button className="w-[60px] h-[30px] text-white bg-indigo-400 rounded  cursor-pointer">Login</button>
                </div> 
                <div className="block md:hidden">
                    <RxHamburgerMenu onClick={togglemenu} className="text-4xl" />
                </div>
            </div>
            {!menuopen && (
         <div className="flex flex-col gap-3 justify-center pb-3 items-center md:hidden">
            <ul className="flex flex-col gap-3  ">
                   <Link href="/dashboard/get-loan"><li>GetLoan</li></Link>
                   <Link href="/dashboard/loan-history"><li>LoanHistory</li></Link>
                  <Link href="/dashboard/update-profile"><li>Update-Profile</li></Link>
                </ul>
            <div className="flex items-center flex-col gap-3">
                <Link href="/dashboard/get-loan"><li>GetLoan</li></Link>
                   <Link href="/dashboard/loan-history"><li>LoanHistory</li></Link>
                  <Link href="/dashboard/update-profile"><li>Update-Profile</li></Link>
                </div>
                </div>
                )}
        </main>
    )
} 