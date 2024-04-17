const fs = require('fs')
const { google } = require('googleapis')
const GOOGLE_API_FOLDER_ID = '1psHGUSw7iOXCv3vl7wTdaoxNdoX5g8Fx'

var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/upload-image", (req, res) => {
  uploadFile(req);
})

async function uploadFile(file) {

    try {
      const auth = new google.auth.GoogleAuth({
        keyFile: './src/api/google-api/googledrive.json',
        scopes: ['https://www.googleapis.com/auth/drive']
      });

      const driveService = google.drive({
        version: 'v3',
        auth
      });

      const fileMetaData = {
        'name': file.name,
        'parents': [GOOGLE_API_FOLDER_ID]
      };

      const media = {
        mimeType: 'image/jpg',
        body: fs.createReadStream(file.path)
      };

      const response = await driveService.files.create({
        resource: fileMetaData,
        media: media,
        fields: 'id'
      });

      return response.data.id;
    } catch (err) {
      console.log('Upload file error', err);
    }
  }

app.listen(8000, function () {

});