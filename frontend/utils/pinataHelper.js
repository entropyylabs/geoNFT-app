const process = require("process");
const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;
const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);


module.exports = async (app) => {

  
  // Pin files to pinata
    app.pinFiles = async (img_path) => {
        const readableStreamForFile = fs.createReadStream(imgPath);
        const options = {};
        
        pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
            console.log(result["IpfsHash"])
        }).catch((err) => {
            console.log(err)
        });
    }
  
    app.pinMetadata = async (metadata) => {
        var newMetadata = JSON.parse(metadata) 
        
        newMetadata["name"] = newMetadata["name"] + ` #${edition} of ${newMetadata["total_editions"]}`;
        
        const options = {};
        pinata.pinJSONToIPFS(newMetadata, options).then((result) => {
            console.log(result["IpfsHash"])
        }).catch((err) => {
            console.log(err)
        });  
    }
  

  
  }