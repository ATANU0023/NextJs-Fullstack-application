/**This TypeScript module exports a function named getDataFromToken which is used to extract and return the user's ID from a JWT (JSON Web Token) stored in a cookie. Here's a detailed breakdown: */

import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { request } from "http";

export const getDataFromToken = (request: NextRequest)=>{
    try {
        
        const token = request.cookies.get('token')?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;

    } catch (error: any) {
        throw new Error(error.message);
    }
}


/**This function is exported so it can be used in other modules. It takes one argument, request, which is of type NextRequest.
Inside the function, it first tries to get the JWT from a cookie named 'token'. If the cookie doesn't exist, it defaults to an empty string.
It then verifies and decodes the JWT using the jwt.verify method. The second argument to jwt.verify is the secret key, which is retrieved from the environment variables (process.env.TOKEN_SECRET). The '!' after process.env.TOKEN_SECRET is a TypeScript non-null assertion operator, which is used to tell TypeScript that this value will never be null or undefined.
If the token is valid, jwt.verify will return the payload of the token, which is expected to be an object with an id property. This id is then returned by the function.
If there's an error during this process (for example, if the token is not valid), the function will catch the error and throw a new Error with the same message.

 */