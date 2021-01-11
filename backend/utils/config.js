require('dotenv').config() 

const PORT = process.env.PORT
const URI = process.env.MONGODB_URI
const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_KEY = process.env.SECRET_KEY 
const BUCKET = process.env.BUCKET 

module.exports = {
    PORT,
    URI,
    ACCESS_KEY,
    SECRET_KEY,
    BUCKET
}