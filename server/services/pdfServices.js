const fs = require('fs')
const pdfParse = require('pdf-parse')
const extractPDFData = async(filePath)=>{
 const bufferData = fs.readFileSync(filePath)

 const data = await pdfParse(bufferData)
 return data.text

}

module.exports = extractPDFData