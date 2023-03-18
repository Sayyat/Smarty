const twilio = require('twilio')
export default function handler(req, res) {
    let body = req.body

    if (typeof body === "string")
        body = JSON.parse(body)

    const {accountSid, authToken, twilioPhoneNumber, userPhoneNumber, message} = body

    const client = twilio(accountSid, authToken);

    client.messages
        .create({
            body: message,
            from: twilioPhoneNumber,
            to: userPhoneNumber
        })
        .then(result => {
                console.log(result.sid)
                res.status(200)
            },
            error => {
                console.log(error)
                // res.status(400)
            });
}