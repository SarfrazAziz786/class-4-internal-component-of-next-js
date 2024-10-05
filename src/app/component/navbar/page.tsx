import React from "react";
import Link from "next/link";

export default function Navbar (){
    return(
    <div className="md:h-12   h-20 w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 flex   gap-5 justify-between md:justify-items-center">
                         
        <header>
        
        <h1 className=" flex items-center  text-2xl font-extrabold italic hover:text-red-700 ">Sarfraz Aziz</h1>
        </header> 

        
        <ul className=" flex  flex-col  justify-end 
                         md:flex md:justify-center  md:flex-row  md:text-2xl md:gap-5   ">      
        <Link className="hover:text-blue-900 hover:underline underline" href={"http://localhost:3000/"}>Home</Link>
        <Link className="hover:text-blue-900 hover:underline underline" href={"http://localhost:3000/about"}>About</Link>
        <Link className="hover:text-blue-900 hover:underline underline" href={"http://localhost:3000/services"}>Services</Link>
        </ul>
        

    </div>
)}
