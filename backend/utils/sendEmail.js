import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      text,
    });
    console.log("Email was successfully sent");
  } catch (err) {
    console.log(err, "failed to send email");
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
