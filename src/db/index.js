import mongoose from "mongoose";
import {DB_NAME} from "../constrant.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`MONGO_DB Connected Successfully @ PORT: ${process.env.PORT}`)
    } catch (error) {
        console.log("MONGO_DB Connection Failed", error)
        process.exit(1)
    }
}

// export default connectDB()
export { connectDB }