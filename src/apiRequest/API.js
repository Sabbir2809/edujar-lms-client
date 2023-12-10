import axios from "axios";
import { ErrorToast, SuccessToast } from "../utility/FormHelper";
import { getToken, setToken } from "../utility/SessionHelper";

const BASE_URL = `https://edujar-lms-server.onrender.com/api/v1`;
// const BASE_URL = `http://localhost:8000/api/v1`;
const Headers = { headers: { token: getToken() } };

// ::::::::: API: REGISTRATION API :::::::::
export const REGISTRATION_API = async (fullName, email, password) => {
  try {
    const postBody = { fullName, email, password };
    const { data } = await axios.post(`${BASE_URL}/registration`, postBody);
    if (data.success) {
      SuccessToast(data.message);
      return true;
    }
  } catch (error) {
    ErrorToast(error.response.data.message);
  }
};

// ::::::::: API: LOGIN API :::::::::
export const LOGIN_API = async (email, password) => {
  try {
    const postBody = { email, password };
    const { data } = await axios.post(`${BASE_URL}/login`, postBody);
    if (data.success) {
      // set email, token in localStorage
      setToken(data.token);
      SuccessToast(data.message);
      return true;
    }
  } catch (error) {
    ErrorToast(error.response.data.message);
  }
};

// ::::::::: API: Category :::::::::
export const CATEGORY_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/all-category`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: fall-course :::::::::
export const ALL_COURSE_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/all-course`);
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: fall-course :::::::::
export const GET_MODULE_LESSON_API_REQUEST = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/get-all-lesson`, Headers);
    if (data.success) {
      return data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: all-notificaiton :::::::::
export const GET_ALL_NOTIFICATION_REQUEST = async (categoryID) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/get-all-notification`);
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};
// ::::::::: API: COURSE_BY_CATEGORY_REQUEST :::::::::
export const COURSE_BY_CATEGORY_REQUEST = async (categoryID) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/course-by-category/${categoryID}`
    );
    if (data.success) {
      return data.data;
    }
    return data;
  } catch (error) {
    return [];
  }
};
