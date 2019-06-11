const express = require ('express');
const app = express ();

app.get('/', (req, res) => {
    res.send('ok');
});
app.get('/test', (req, res)=> {
    res.send({status:200, message:"ok"})
}) 
var today = new Date()
var TIME = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.get('/time',(req,res)=>{
    res.send({
        status:200,
         message:TIME})
})

app.listen(3000 ,() => console.log('listening on port 3000....'));

