const log = console.log
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.send({
//     to: 'yutongsf@gmail.com',
//     from: 'aauchter@gmail.com',
//     subject: 'when are we doing our safeway run?',
//     text: "what about in 1 hour?"
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yutongsf@gmail.com',
        subject: 'welcome to the family',
        text: `Welcome to the app, ${name}, let us know your experience!`,
        // html: '' // for customizing shit 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'yutongsf@gmail.com',
        subject: 'Your service is canceled',
        text: `${name}, sorry to see you go, hopefully we will see you soon!`
        // html: '' // for customizing shit 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}