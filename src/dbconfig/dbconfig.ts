import { error } from "console";// Importing the error function from the console module.
import mongoose, { connection } from "mongoose";// Importing mongoose and its connection object.


/**
 * This is a TypeScript module for managing MongoDB connections using Mongoose.
 * It exports a single asynchronous function named `connect`.
 */


/**
 * The `connect` function is used to establish a connection to a MongoDB database.
 * It uses the MONGO_URL environment variable to determine the database's location.
 * The '!' after process.env.MONGO_URL asserts that the value is not null and will always be available.
 * 
 * @async
 * @function
 * @throws Will throw an error if the connection fails.
 */
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!); //! means that it is not null it will always available.
        const connection = mongoose.connection;// Get the default connection

        // Once the connection is established, log a success message to the console.
        connection.once("connected",()=>{
            console.log('MongoDB connection successfully!')
        })

        // If there's an error during the connection, log an error message to the console.
        connection.on("error",(err)=>{
            console.log("MongoDB connection error! make sure MongoDB is running!" + err);
        })
        
        // If there's an error while trying to connect, log the error message to the console.
    } catch(error){
        console.log("Error! Something goes wrong",error)
    }
}