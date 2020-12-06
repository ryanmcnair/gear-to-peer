import axios from 'axios';

const baseUrl = 'https://gear-to-peer-default-rtdb.firebaseio.com/';

const getAllGear = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gear.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllGear };
