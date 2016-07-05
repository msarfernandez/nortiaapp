var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function(req, res, next){
	var connection = {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'mueblesnortia@gmail.com',
			pass: '12qwaszxcde3'
		}
	};

	var smtpTransport = nodemailer.createTransport(connection);

	smtpTransport.sendMail({
		from: 'consulta@nortia.com.ar',
		to: req.body.email,
		subject: 'Consulta Web',
		text: req.body.textmail
	}, function(error, response){
		if (error){
			console.log(error);
		} else {
			console.log('mail sent: ' + response.message);
		}
	});

	var userName = req.body.email;
	var html = 'Hello: ' + userName + '.<br>' +
	            '<a href="/">Try again.</a>';
	res.send(html);
});

module.exports = router;