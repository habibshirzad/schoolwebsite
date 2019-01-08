import axios from 'axios';
const url = 'http://localhost:5000/route/about';
class aboutfront {
    static getabout() {
       return axios.get(url);
    }
   
    static deleteabout(_id) {
       return axios.delete(`${url}/${_id}`);
    }
    static insertabout(text){
        return axios.post(url, {
            text
        });
    }
   }
   
   export default aboutfront;
