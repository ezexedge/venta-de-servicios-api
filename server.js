import express from 'express'
import {readdirSync} from 'fs'


const app = express()




readdirSync("./routes").map((r) => 
app.use("/api", require(`./routes/${r}`))
)


const PORT = 8000


app.listen(PORT,()=>{
console.log(`corriendo en el servidor ${PORT}`)
})