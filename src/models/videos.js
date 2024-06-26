import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videofile : {
            type : String,
            required : true
        },
        thumbnail : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true,
            lowercase : true,
            trim : true
        },
        description : {
            type : String,
            required : true
        },
        duration : {
            type : Number
        },
        views : {
            type : Number,
            default : 0
        },
        
        isPublished : {
            type : Boolean
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {timestamps : true}
    )


videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)