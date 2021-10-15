const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = async (email, subject, text, html) => {
  try {
    const msg = {
      html,
      text,
      subject,
      to: process.env.HOST_EMAIL,
      from: email,
    };
    await sgMail.send(msg);
    console.log("MAIL_SENT");
  } catch (err) {
    console.log("ERROR_MAILING", err.message);
  }
};
module.exports = sendMail;
