import {register} from "@/database/auth";

export default async function handler(req, res) {
    let body = req.body

    if (typeof body === "string")
        body = JSON.parse(body)

    const {phoneNumber, firstname, lastname} = body


    console.log({phoneNumber, firstname, lastname})

    const status = await register(phoneNumber, firstname, lastname)
    res.status(status ? 200 : 400).json({phoneNumber, firstname, lastname})

}