const nodemailer = require('nodemailer');
const account = require('../config/auth');

const sendMail = (data) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport(account);

        const mailOptions = { ...data };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return reject({ message: 'The mail can not be sent', error }) 
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            resolve({ message: 'Mail sent correctly.' });
        });
    })   
};

module.exports = { sendMail };