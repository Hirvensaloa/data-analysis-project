const fs = require('fs')
const path = require('path')
const logger = require('../utils/logger')

//Sends data from data-folder. 
const get = (req, res) => {

    fs.readFile(path.resolve(__dirname, '../data/datasets.json'), (err, data) => {
        if(err) throw err
        const json = JSON.parse(data)
        res.send(json)
    })        
    
}

module.exports = {
    get
}

