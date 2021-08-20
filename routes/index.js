const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


require('dotenv').config()

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

// Access the parse results as request.body
router.post('/', (request, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER,
          pass: process.env.PASS 
        }
    });

    var mailOptions = {
        from: request.body._replyto,
        to: process.env.USER,
        subject: `Message from ${request.body._replyto}: ${request.body.Subject}`,
        text: request.body.message
      };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.render('success');

        }
    });
});

module.exports = router;
