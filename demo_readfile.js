var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
//node demo_readfile.js


//Tạo tệp appendFile()  open()   writeFile()
//appendFile()
//Phương pháp nối thêm nội dung được chỉ định vào một tệp. Nếu Tệp không tồn tại, tệp sẽ được tạo:fs.appendFile()
//
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//---
//open()
//Phương thức lấy một "flag" làm đối số thứ hai, nếu Cờ là "W" cho "Viết", 
//tệp được chỉ định được mở để viết. Nếu tệp Không tồn tại, một tệp trống được tạo:fs.open()
//
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//---
//writeFile()
//Phương thức thay thế tệp và nội dung được chỉ định nếu nó tồn tại. 
//Nếu tệp không tồn tại, một tệp mới, chứa nội dung được chỉ định, sẽ được tạo:fs.writeFile()
//
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


//Cập nhật tệp appendFile()   writeFile();
//appendFile()
//Phương pháp nối thêm nội dung được chỉ định vào cuối tệp được chỉ định:fs.appendFile()
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });
//---
//writeFile()
//Phương pháp thay thế tệp và nội dung được chỉ định:fs.writeFile()
// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });


//Xóa tệp unlink()
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });


//Đổi tên tệp rename()
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

