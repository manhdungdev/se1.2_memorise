import axios from "../config/axiosServices";
import {
  UPLOAD_IMAGE,
  UPLOAD_VIDEO,
  GET_ALL_IMAGES_BY_USER,
  FAVOURITE_IMAGE,
  GET_FAVORITE_IMAGE,
  DOWNLOAD_IMAGE,
} from "./constants";

const uploadImage = (data, token) => {
  return axios.post(`${UPLOAD_IMAGE}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const uploadVideo = (data, token) => {
  return axios.post(`${UPLOAD_VIDEO}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getAllImageByUser = (token) => {
  return axios.get(`${GET_ALL_IMAGES_BY_USER}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const getFavouriteImage = (token) => {
  return axios.get(`${GET_FAVORITE_IMAGE}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const favouriteImage = (imageId, token) => {
  return axios.put(`${FAVOURITE_IMAGE}?id=${imageId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const downloadImage = (url, token) => {
  return axios.get(`${DOWNLOAD_IMAGE}?url=${url}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export {
  uploadImage,
  uploadVideo,
  getAllImageByUser,
  favouriteImage,
  getFavouriteImage,
  downloadImage,
};
