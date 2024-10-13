import http from 'http';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
http.createServer(function (req, res) {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Error during file upload');
        return res.end();
      }
      var oldpath = files.filetoupload.filepath;
      var newpath = path.join('D:/NodeJS/demo_event.js', files.filetoupload.originalFilename);
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error moving the file');
          return res.end();
        }
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

console.log('Server is running at http://localhost:8080/');
