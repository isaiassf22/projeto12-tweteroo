import express from "express";
import cors from "cors";


const app = express()


app.use(cors())
app.use(express.json())
app.get('/nada',(req, res)=> {
    res.send("pelo visto rodou")
})




app.listen(5000, ()=> console.log("service running pretty"))