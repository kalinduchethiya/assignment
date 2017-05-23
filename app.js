const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var app = express()

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/getlocations',(req,res)=>{
    console.log(req.body);
    res.json({state:true,msg:"success"})
})


app.listen(3006,()=>{

    console.log("listening to port 3000");

});