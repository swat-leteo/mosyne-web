import Axios from "axios";

const BASE_URL = "https://api-mosine.appspot.com/api";

const request = async (path, method, body) => {
  try {
    const response = await Axios({
      url: `${BASE_URL}${path}`,
      method,
      data: body,
    });
    console.log(response);
    return { data: response.data, status: response.status };
  } catch (error) {
    const data = error.response.data || {};
    const status = error.response.status || 500;
    return { data, status };
  }
};

export const clienteAxios = {
  get: async (path, data) => request(path, "GET", data),
  post: async (path, data) => request(path, "POST", data),
  put: async (path, data) => request(path, "PUT", data),
};

export default clienteAxios;
