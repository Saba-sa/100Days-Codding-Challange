import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_KEY}`,
  },
};

export const fetchDataFromAPI = async (url) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + url,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_KEY}`,
  },
});
