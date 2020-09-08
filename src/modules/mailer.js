const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: {
        extname: '.html',
        layoutsDir: './src/resources/mail/',
        defaultLayout: 'auth/forgot_password', 
        partialsDir: './src/resources/mail/',
    },
    viewPath: './src/resources/mail/',
    extName: '.html'
}));

module.exports = transport;