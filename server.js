const express = require("express")
const app = express()
//const cors = require("cors")
const PORT = 8000

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
//app.use(cors())

app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/Masked.html")
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})