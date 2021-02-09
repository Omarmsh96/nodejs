const mongoose = require('mongoose')
const productSchma = mongoose.Schema({
    Image:{
        imgPath:String ,
        required:true
    },
    nameOfProudct:{
        type:String,
        required:true,
    },
    
    info: {
        required:true,
        type:
        {
            display:String,
            storage:Number,
            Ram:String,
            camera:Number
        }
    },
    price:{
        type:Number,
        required:true,
    }

})
module.exports=mongoose.model('userproduct', productSchma);