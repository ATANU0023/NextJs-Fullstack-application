/**
 * This is a JavaScript module that uses Mongoose to define a schema for a User model.
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 */


import mongoose from "mongoose";


/**
 * The `userSchema` is a new instance of a Mongoose Schema.
 * A schema defines the structure of documents within a collection and can define document instance methods, static Model methods, compound indexes, and middleware.
 * This schema is used to define the structure of a User document.
 */

const userSchema = new mongoose.Schema({


    /**
     * The `username` field is of type String and is required.
     * If a document is saved without a `username`, Mongoose will throw a validation error.
     * The `unique: true` option ensures that the `username` field is unique within the collection.
     */
    username: {
        type: String,
        required: [true, "plese provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },

    /**
     * The `password` field is of type String and is required.
     * If a document is saved without a `password`, Mongoose will throw a validation error.
     */
    password: {
        type: String,
        required: [true, "Please provide a password"],
        
    },

    /**
    * The `isVerified` field is of type Boolean and defaults to false.
    * This field could be used to track whether a user has verified their email address.
    */
    isVerified: {
        type: Boolean,
        default: false
    },

    /**
    * The `isAdmin` field is of type Boolean and defaults to false.
    * This field could be used to track whether a user has admin privileges.
    */
    isAdmin: {
        type: Boolean,
        default: false
    },

    /**
 * The `forgotPasswordToken` field is of type String.
 * This field could be used to store a token that allows a user to reset their password.
 */
    forgotPasswordToken: String,

    /**
 * The `forgetpasswordExpiry` field is of type Date.
 * This field could be used to store the expiry date of the `forgotPasswordToken`.
 */
    forgetpasswordExpiry: Date,

    /**
 * The `varifyToken` field is of type String.
 * This field could be used to store a token that allows a user to verify their account.
 */
    verifyToken: String,

    /**
     * The `verifyTokenExpiry` field is of type Date.
     * This field could be used to store the expiry date of the `varifyToken`.
     */
    verifyTokenExpiry: Date,

})

/**
 * The `User` variable is assigned the value of `mongoose.model.users` if it exists, otherwise a new Mongoose model is created.
 * `mongoose.model("users",userSchema)` creates a new model named "users" with `userSchema` as its schema.
 * This line ensures that the model is only created once, and the same instance is reused in subsequent requests.
 */

const User = mongoose.models.users || mongoose.model("users", userSchema);


/**
 * The `User` model is exported as the default export of this module.
 * This allows it to be imported in other files using the `import User from './userModel'` syntax.
 */

export default User;