import express from 'express'
import {readdirSync} from 'fs'
import mongoose from 'mongoose'
require('dotenv').config()
const morgan  = require('morgan')

const app = express()

mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true
        }
        )
.then(() => console.log('DB connect'))
.catch((error)=> console.log('error',error))


app.use(morgan('dev'))
readdirSync("./routes").map((r) => 
app.use("/api", require(`./routes/${r}`))
)


const PORT = process.env.PORT || 8000


app.listen(PORT,()=>{
console.log(`corriendo en el servidor ${PORT}`)
})