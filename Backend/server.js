const express=require('express');
const app=express();
const data=require('./data/notes.js');
const dotenv=require('dotenv');
dotenv.config();
//Creating Endpoints
app.get('/',(req,res)=>{           // '/' represents the endpoint where we get the data to api from
     res.send("API is Running");
});
app.get('/api/notes',(req,res)=>{    // Here '/api/notes' serves as API endpoint for data
    res.json(data);
});
app.get('/api/notes/:id',(req,res)=>{
    const id=req.params.id;
   const note=data[id-1];
   res.json(note);
});
const PORT=process.env.PORT||3000;  // 3000 is now alternate port for server
app.listen(PORT,()=>{
    console.log("Server is Running");
})