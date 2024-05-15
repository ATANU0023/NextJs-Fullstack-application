/**
 * This is a TypeScript module that exports an asynchronous function named POST.
 * This function is designed to handle POST requests in a Next.js serverless function.
 */

// Importing the necessary modules and functions.
import { connect } from "@/dbconfig/dbconfig"; // This function is used to connect to the database.
import User from "@/models/userModel"; // This is the Mongoose model for a User.
import { NextRequest, NextResponse } from "next/server"; // These are types from the Next.js serverless functions API.
import bcryptjs from 'bcryptjs'; // This library is used for hashing passwords.

// Connecting to the database.
connect()


export async function POST(request: NextRequest) {
    try {
        // Parsing the request body as JSON.
        const reqBody = await request.json()
        // Destructuring the username, email, and password from the request body.
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // Checking if a user with the provided email already exists.
        const user = await User.findOne({ email })
        if (user) {
            // If the user already exists, return a 400 error with a message.
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        // Hashing the password.
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Creating a new user with the provided username, email, and hashed password.
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        // Saving the new user to the database.
        const saveUser = await newUser.save()
        console.log(saveUser);

        // Returning a success message with the saved user.
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser
        })

    } catch (error: any) {
        // If an error occurs, return a 500 error with the error message.
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}