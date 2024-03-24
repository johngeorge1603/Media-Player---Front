import axios from "axios";

export const commonAPI= async (httpMethod, url, reqBody) => {
    let reqConfig = {
        method: httpMethod,
        url,
        headers: {
            "Content-Type": "application/json" 
            //"application/json" as all data is taken from internet. would be different if data was uploaded from local device
        },
        data: reqBody
    }

    return await axios(reqConfig).then((res) => {

        return res
    }).catch(err => {
        
        return err
    })
}