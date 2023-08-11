import mongoose from "mongoose";

//schema
const schema = mongoose.Schema({
    title:{
        type: String,
        required: true,
      },
    body:{
        type: String,
        required: true,
      },
      tags:{
        type:[],
        required:true
      },
      archived:{
        type: Boolean,
      required: true,
    },
    /*   "editedDate": "29-06-2023",
      "editedHour": 22,
      "editedMinute": 50 */
    dateCreated:{
       type: Date, default: Date.now 
    }
})

export default mongoose.model('Note', schema) 