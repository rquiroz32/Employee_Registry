import axios from "axios";

const url = 'https://randomuser.me/api/?results=100&nat=us'

function get100Users(){

    return axios.get(url)
}

export default get100Users