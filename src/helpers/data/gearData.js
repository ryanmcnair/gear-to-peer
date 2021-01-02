import axios from 'axios';

const baseUrl = 'https://gear-to-peer-default-rtdb.firebaseio.com/';

// Retrieves all gear

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

const getAllUserTours = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}tour.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch((error) => reject(error));
});

const getSingleTour = (tourId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tour/${tourId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createTour = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/tour.json`, data)
    .then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/tour/${response.data.name}.json`, update)
        .then(() => {
          resolve(response);
        });
    }).catch((error) => reject(error));
});

const deleteTour = (tourId) => axios.delete(`${baseUrl}/tour/${tourId}.json`);

const updateTour = (data) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/tour/${data.firebaseKey}.json`, data)
    .then(resolve)
    .catch((error) => reject(error));
});

const filterTourGear = (tourId) => new Promise((resolve, reject) => {
  getSingleTour(tourId).then((response) => {
    const tour = response;
    const gearArray = [];
    tour.forEach((tours) => {
      tours.gears.forEach((item) => {
        gearArray.push(item);
      });
    });
    resolve(gearArray);
  }).catch((error) => reject(error));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllGear,
  deleteGear,
  getSingleGear,
  updateGear,
  createGear,
  getAllUserTours,
  getSingleTour,
  createTour,
  deleteTour,
  updateTour,
  filterTourGear,
};
