// 1. import nodemailer 

const nodemailer = require('nodemailer')


// 2. Configuring Email and Send it

async function sendMail(){
    // i) create an email transporter 
    // ii) SMPT ( Simple Mail Transfer Protocol )

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mishrapriyanka073@gmail.com',
            pass: 'utmsujklzbdsspsd',
        }
    })



// Email Content 

const mailOptions = {
    from: 'mishrapriyanka073@gmail.com',
    to: 'dazzleprogrammer@gmail.com',
    subject: 'Welcome to my Node App',
    text: 'This is an email using nodemailer in nodejs',
}




// 3. Send the Email

try {
    const result = await transporter.sendMail(
        mailOptions
    );

    console.log('Email sent successfully');
}

catch {
console.log('Email failed' + err);
}

};

sendMail();