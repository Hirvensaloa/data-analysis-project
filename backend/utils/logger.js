const info = (...params) => {
    console.log(...params)
}

const run = port => {
    console.log(`Server running on port ${port}`)
}

const req = (request) => {
    console.log(`API recieved ${request.method} request at ${request.path}`)
}

const error = (...params) => {
    console.error(...params)
}

module.exports = {
    info,
    run, 
    req,
    error
}