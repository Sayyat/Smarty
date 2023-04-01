export default async function handler(req, res) {
    let body = req.body

    if (typeof body === "string")
        body = JSON.parse(body)

    const {username, password, to, message} = body

    const result = await sendMessage(username,password,to,message)
    res.status(200).json(result)
}

async function sendMessage(username, password, to, message){
    console.log({username, password, to, message})
    // get request
    return  await fetch(`https://smsc.kz/sys/send.php?login=${username}&psw=${password}&phones=${to}&mes=${message}`)
}