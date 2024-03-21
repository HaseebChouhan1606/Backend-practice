import mongoose from "mongoose";
import { DB_NAME } from "../constrant.js";


const port = process.env.PORT
const mongoURL = process.env.MONGO_URL
const connectDataBase = async () => {
    try {
        await mongoose.connect(mongoURL)
        console.log(`MONGODB connected @ port: ${port}`)
    } catch (error) {
        console.log("MONGODB Failed", error)
        process.exit(1)
    }
}

export default connectDataBase() 