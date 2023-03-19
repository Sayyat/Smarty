import {register} from "@/database/auth";

export default async function handler(req, res) {
    let body = req.body

    if (typeof body === "string")
        body = JSON.parse(body)

    const {phoneNumber, firstname, lastname} = body


    console.log({phoneNumber, firstname, lastname})

    const result = await register(phoneNumber, firstname, lastname)
    res.status(200).json(result)

}