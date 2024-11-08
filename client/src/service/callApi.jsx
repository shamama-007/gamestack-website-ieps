import axios from "axios";

export const getData = async () => {
    return await axios('http://api.github.com/users');
}