const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = async (email, subject, text, html) => {
  try {
    const msg = {
      html,
      text,
      subject,
      to: email,
      from: process.env.HOST_EMAIL,
    };
    console.log(msg);
    await sgMail.send(msg);
    console.log("MAIL_SENT");
  } catch (err) {
    console.log("ERROR_MAILING", err.message);
  } finally {
    return;
  }
};
module.exports = sendMail;
