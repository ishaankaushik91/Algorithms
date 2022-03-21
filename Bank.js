import axios from "axios";

function ping()
{
    return axios.get(`https://raw.githubusercontent.com/razorpay/ifsc/master/src/banknames.json`);
}

async function bank()
{
    try {
        let res = await ping()
        let result = Object.keys(res.data);

        let randomIndex = Math.floor(Math.random() * (result.length - 1));
        let branch = res.data[result[randomIndex]];
        console.log(branch);

    } catch (error) {
        console.log(error);
    }
}
bank();