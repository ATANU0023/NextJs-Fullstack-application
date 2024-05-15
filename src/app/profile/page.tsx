"use client"
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage(){

   const router = useRouter()
   const[loading, setLoading] = React.useState(false);
   const[data, setData]=useState("nothing");

    const  logout= async()=>{
        try {
            setLoading(true);
            await axios.get('/api/users/logout');
            toast.success("Logout successfully");
            router.push("/login");


        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async()=>{
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            <h2 className="bg-green-500 p-3 rounded-lg">
                {data === "nothing" ? "Nothing" : <Link
                    href={`/profile/${data}`}
                >
                    {data}
                </Link>}
            </h2>
            <hr />
            <button 
            onClick = {logout}
            className=" bg-blue-500 hover:bg-blue-700 p-2 text-white font-bold py-2 rounded-md mt-5">
                {loading ? "logging out...":"LogOut"}
            </button>
            <br />
            <button 
            onClick = {getUserDetails}
            className=" bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 rounded-md mt-5 p-2">
                Get Details
            </button>
        </div>
    )
}