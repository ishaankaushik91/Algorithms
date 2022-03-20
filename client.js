import axios from "axios";

function ping()
{
    return axios.get(`http://ishaankaushik.com:5000`);
}

async function consume()
{
    try {
        let response = await ping();
        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
}
consume();