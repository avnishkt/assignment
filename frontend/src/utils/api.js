import axios from "axios";

const BASE_URL = "http://localhost:8080/api/"

export const fetchDataFromApi = async (url, params) => {
    console.log(BASE_URL + url)

    try {
        const { data } = await axios.get(BASE_URL + url, {
            params,
        });
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
    

};
