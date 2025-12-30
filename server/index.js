const express=require('express');
const connectdb=require('./db');
const proSchema=require('./productSchema')
const cors=require('cors');
const ttt = require('./cropSchema');


connectdb();

const app=express();
app.use(cors())
app.use(express.json())


app.get('/products',(req,res)=>{
    proSchema.find({})
    .then(cat=>{
        res.json(cat);

        console.log(cat);
    })
})


app.get('/crops',(req,res)=>{
    ttt.find({})
    .then(cropdata=>{
        res.json(cropdata)
        console.log(cropdata);
    })
})


app.get('/',(req,res)=>{
    res.send("Hello");
})


app.get('/movie',(req,res)=>{
    res.json({
        "movie_name":"Baghi",
        "thumnail":"",
        "trailer_video":"https://www.youtube.com/embed/L1EmhDYc11g?si=Ap3oZh_1yx2JmnIQ"
    })

})



chasma=()=>{
    console.log("chasma is running ")
}


const port=5000;
app.listen(port,chasma);