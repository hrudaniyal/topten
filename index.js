var express = require('express');
var router = express.Router()
var app = express();
var cors = require('cors')
 
app.use(cors())
app.use(express.static('public'));
let user={
   name:'hruda',
   age:'21'
}
app.get('/index', function(req, res) {
   res.send({user})
   
 });
app.get('/data',(req,res)=>{
   res.send(res.status(200).send({ message: "Hello from the server !"}))

})
app.listen(3002);