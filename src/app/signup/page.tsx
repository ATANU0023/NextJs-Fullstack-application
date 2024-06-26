"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import {toast} from "react-hot-toast";






export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [ buttonDisabled , setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            
            setLoading(true);
            const response = await axios.post("/api/users/signup/", user);
            console.log("SignUp success",response.data);
            router.push("/login")
        } catch (error:any) {
            console.log("signup failed",error.message)
            toast.error(error.message);
        }finally{
            setLoading(false); 
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);
    
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <h1 className="text-2xl">
                {loading ? "Loading...":"SignUp" }
            </h1>
            <br />

            <label htmlFor="username">username</label>
            <input
                className="p-2 border-gray-300 rounded-md focus:outline-none
                focus:border-gray-600 mb-4 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value })}
                placeholder="username"
            />

            <label htmlFor="email">email</label>
            <input
                className="p-2 border-gray-300 rounded-md mb-4 focus:outline-none
                focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value })}
                placeholder="email"
            />

            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none
                focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
             onClick={onSignup}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  >
                {buttonDisabled ? "No SignUp" : "singUp"}
               
            </button>
            <Link href="/login">
            visit login page
            </Link>
        </div>

    );
}