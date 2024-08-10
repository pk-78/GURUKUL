import mongoose from "mongoose";


const coursesSchema = mongoose.Schema({

    courseTitle :{
        type:String,
        required:true,

    },
    courseDescription :{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    }
    
})

const Course = new mongoose.model("Course",coursesSchema);






export default Course;