//S3 implemented for storing images. 

const aws = require('aws-sdk')
const s3 = new aws.S3()

const config = require('./../utils/config')

aws.config.update({region: 'eu-north-1'})


const upload = (key, img) => {

    const uploadParams = {Bucket: config.BUCKET, Key: key, Body: img}

    s3.upload (uploadParams, function (err, data) {
        if (err) {
          console.log("Error", err)
        } if (data) {
          console.log("Upload Success", data.Location)
        }
      })
}

async function getImage(key){
    const data = s3.getObject(
      {
        Bucket: config.BUCKET,
        Key: key
      }
    ).promise()
    return data 
  }

  const encode = (data) => {
    const buf = Buffer.from(data)
    const base64 = buf.toString("base64") 
    return base64 
  }

const fetch = (res, key) => {

    getImage(key)
    .then(img => {
      const image = "<img src='data:image/jpegbase64," + encode(img.Body) + "'" + "/>"
      const startHTML = "<html><body></body>"
      const endHTML = "</body></html>" 
      const html = startHTML + image + endHTML
      res.send(html)
    }).catch(e => {
      res.send(e) 
    })
}

module.exports = {
  upload,
  fetch
}