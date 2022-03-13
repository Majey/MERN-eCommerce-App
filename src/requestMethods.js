import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGVmZjVlZDA2ODIyOWE3NzA3ZWFjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE2NzE1MiwiZXhwIjoxNjQ3NDI2MzUyfQ.Nfu_As4XaJDY69y5_D6n8CLF409Ju9jF6UgadLh3Oow";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`}
});