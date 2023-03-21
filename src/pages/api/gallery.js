import {getAllImages} from "@/database/gallery";

export default async function handler(req, res) {
    const result = await getAllImages()
    // console.log("gallery",result)
    res.status(200).json(result)
}