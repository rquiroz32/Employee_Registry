import axios from "axios";

const url = 'https://randomuser.me/api/?results=100&nat=us'


export default {
    get100Users: function(){
        return axios.get(url)
    }
};