import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express()
const PORT = 4000

// mongose connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app)

// serving static files
app.use(express.static('public'));

app.get('/', (req,res)=>{
res.send(`Node and express server is running on port ${PORT}`)
})

app.listen(PORT,()=> console.log(`your server is running on port ${PORT}`))