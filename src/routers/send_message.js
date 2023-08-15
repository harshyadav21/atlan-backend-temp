require("dotenv").config();

const account_sid = process.env.TWILIO_aCCOUNT_SID;
const auth_token = process.env.TWILIO_AUTH_TOKEN;

const mobile_number = process.env.MOBILE_NUMBER;

const twilio_client = require('twilio')(account_sid, auth_token);

const send_text_message = (req) => {
    try {
        let Customer_Reciept = ` Your Details :\n 
        email id :${req.email}\n 
        name : ${req.name}\n 
        Income per Month: ${req.income}\n
        Savings per Month: ${req.savings}\n
        contact Number : ${req.phone}\n
        Thanks for your response !Have a nice day!`;
        twilio_client.messages
            .create({
                body: Customer_Reciept,
                to: mobile_number, // In production it will be replaced by reqClient.body.phone and will appen +91 in  starting
                from: '+15736779342', // From a valid Twilio number
            });
        console.log("message sent!");
    } catch (err) {
        console.log(err);
    }

};

module.exports = send_text_message;