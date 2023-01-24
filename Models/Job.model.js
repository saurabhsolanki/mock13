const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    company:{type:String,required:true},
    contract:{type:String,required: true},
    position: {type:String, required: true},
    location: {type:String,required: true}
})

const jobModel = mongoose.model("job",JobSchema)

module.exports= jobModel