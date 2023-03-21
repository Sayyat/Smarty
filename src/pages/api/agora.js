import {
    RtcTokenBuilder,
    RtmTokenBuilder,
    RtcRole,
    RtmRole,
} from "agora-access-token";

const role = RtcRole.PUBLISHER;
const expirationTimeInSeconds = 24 * 60 * 60;
const currentTimestamp = Math.floor(Date.now() / 1000);
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
// Build token with uid

export default function handler(req, res) {

    let body = req.body

    if(typeof body === "string")
    body = JSON.parse(body)

    const {appId, certificate, channel, uid} = body
    
    if(!appId || !certificate || !channel){
        res.status(200).json({token: ""});
        return
    }

    // console.log({appId, certificate, channel, uid})
    const tokenA = RtcTokenBuilder.buildTokenWithUid(
        appId,
        certificate,
        channel,
        uid?uid:0,
        role,
        privilegeExpiredTs
    );

    res.status(200).json({token: tokenA});
}


