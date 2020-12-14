import axios from 'axios';

const baseUrl = 'https://gear-to-peer-default-rtdb.firebaseio.com/';

// Getting, adding, updating and deleting gear from Firebase

const getAllGear = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gear.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getSingleGear = (gearId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gear/${gearId}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const createGear = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/gear.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/gear/${response.data.name}.json`, update)
        .then(() => {
          resolve(response);
        });
    }).catch((error) => reject(error));
});

const updateGear = (data) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/gear/${data.firebaseKey}.json`, data)
    .then(resolve)
    .catch((error) => reject(error));
});

const deleteGear = (gearId) => axios.delete(`${baseUrl}/gear/${gearId}.json`);

// Tour functions

const getAllUserTours = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}tour.json?orderBy="userId"&equalTo="${uid}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllGear,
  deleteGear,
  getSingleGear,
  updateGear,
  createGear,
  getAllUserTours,
};
