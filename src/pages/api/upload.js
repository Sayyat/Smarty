import {uploadImage} from "@/database/gallery";

export default async function handler(req, res) {
    let body = req.body

    if (typeof body === "string")
        body = JSON.parse(body)

    // console.log(body)

    const result = await uploadImage(body)
    res.status(200).json(result)
}