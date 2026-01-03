var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sarvpreetk22@gmail.com',
        // Enable 2 step security verification
        // This password go to security -> app passwords -> new app name -> paste code here
        pass: 'pvoq pqwd fdrh nwsi'

    }
});
var mailOptions = {
    from: 'sarvpreetk22@gmail.com',
    to: 'sakshipal8009@gmail.com',
    subject: 'Test Email - sent using Node.js',
    text: 'Node js rocks'
};

transporter.sendMail(mailOptions,
    function(error, info){
        if(error){
            console.log(error)
        }
        else{
            console.log("Email sent: "+ info.response);
        }

    }
);