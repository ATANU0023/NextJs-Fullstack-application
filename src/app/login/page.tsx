"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("SignUp success", response.data);
            toast.success("login successfull");
            router.push("/profile");
            
            

        } catch (error:any) {
            console.log("login failed",error);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-2xl">{loading ? "Loading...": "LogIn"}</h1>
            <label htmlFor="email">email</label>
            <input type="email"
                className="p-2 border-gray-300 rounded-md mb-4 focus:outline-none
                focus:border-gray-600 text-black"
                placeholder="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label htmlFor="password">paword</label>
            <input type="password"
                className="p-2 border-gray-300 rounded-md mb-4 focus:outline-none
                focus:border-gray-600 text-black"
                placeholder="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <button
                onClick={onLogin}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "  >
                Login here
            </button>
            <Link href="/signup">
                New signup first
            </Link>
        </div>
    );
}