const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kpeti2@hotmail.com',
    subject: 'Thanks to joining',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kpeti2@homtail.com',
    subject: 'Sorry to see, that you leave',
    text: `I really sorry to see that you leave our app ${name}. Hope we will see you again!`
  })
}
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
