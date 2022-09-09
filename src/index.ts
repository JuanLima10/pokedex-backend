import express from 'express'
import dotenv from 'dotenv'

const cors = require('cors')

const app = express()
dotenv.config()
app.use(cors())


require('./controllers/pokemonController')(app)

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))