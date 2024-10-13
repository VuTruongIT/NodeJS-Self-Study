import nodemailer from 'nodemailer';

// Cấu hình transporter
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'iloveyou3000vvv@gmail.com',  // Thay bằng email của bạn
    pass: 'xcau hesn jwhp adms'     // Thay bằng mật khẩu ứng dụng
  }
});

// Cấu hình nội dung email
var mailOptions = {
  from: 'iloveyou3000vvv@gmail.com',
  to: 'vuvantruongit2003@gmail.com',       // Thay bằng email người nhận
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'          // Nội dung email
};

// Gửi email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
