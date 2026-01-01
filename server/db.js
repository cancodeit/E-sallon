const mongoose=require('mongoose')

async function connectMongo(){
    try{
      await mongoose.connect("mongodb+srv://ecommerce:MmB3Lmca6ywHKcpt@ecommercecluster.s7kjtqz.mongodb.net/Esallonservices?appName=EcommerceCluster"),{
        useNewUrlParser:true,
        useUnifiedTopology:true
      }
      console.log("database is connected");  

    } catch(a){
        console.log(a);
        process.exit(1);
    }
}

module.exports=connectMongo;