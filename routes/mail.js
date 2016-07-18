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
		to: 'msarfernandez@gmail.com',
		subject: 'Consulta Web - ' + req.body.nombre,
		text: req.body.textmail + '\n' + req.body.email
	}, function(error, response){
		if (error){
			console.log(error);
		} else {
			console.log('mail sent: ' + response.message);
		}
	});

	res.enviado = "enviado exitosamente.";
	//res.writeHead(302, {Location: "https://www.google.com.ar"});
	res.end();
	// var userName = req.body.email;
	// var html = 'Hello: ' + userName + '.<br>' +
	//             '<a href="/">Try again.</a>';
	// res.send(html);

});

module.exports = router;
