const express = require('express')
const app = express()
const cors = require('cors')
dotenv.config()
const port = process.env.PORT || 5000

//middleware 
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Port is running server')
})


app.listen(port, () => {
    console.log(`Server is running of PORT${port}`)
})



