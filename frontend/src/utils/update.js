import axios from "axios";

const BASE_URL = "http://localhost:8080/api/"

export const fetch = async (url, body) => {
    console.log(BASE_URL + url);

    try {
        const { data } = await axios.get(BASE_URL + url, body);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
