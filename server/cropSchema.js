const mongoose=require('mongoose')

const pp=mongoose.Schema({
   crops:{
    cropName:String,
    details:{
      name:String,
      details:{
         description:String

      }

    }

   }

})

module.exports=mongoose.model("products",pp,);