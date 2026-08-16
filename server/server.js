const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const AuthRoutes = require('./routes/authRoutes')
const ResumeRoutes = require('./routes/resumeRoutes')
const errorMiddleware = require('./middleware/errMiddleware')
const app = express()
require('dotenv').config()

connectDB()

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.use('/auth', AuthRoutes)
app.use('/api/resume', ResumeRoutes) 
app.use('/api/resume/upload', express.static("uploads"))
app.use(errorMiddleware);
const PORT = process.env.PORT
 
app.listen(PORT , ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})  
