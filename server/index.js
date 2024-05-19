import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}))
// * transfer our data to json format passing from frontend
app.use(express.json())
app.use('/auth', adminRouter)

app.listen(8081,()=>{
    console.log("listening");
})