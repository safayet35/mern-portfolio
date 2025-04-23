import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiForm = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data"
    //  Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
export const setAccessToken = token => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const setAccessTokenForForm = token => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAccessToken = () => {
  delete api.defaults.headers.common["Authorization"];
};

export const refreshToken = async () => {
  const { data } = await api.post(`${API_URL}/admin/refresh`);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await api.post(`${API_URL}/admin/login`, credentials);
  return data;
};

export const logoutUser = async () => {
  const { data } = await api.post(`${API_URL}/admin/logout`);
  return data;
};

export const sendMessage = async credentials => {
  const { data } = await api.post(`${API_URL}/admin/send-message`, credentials);

  return data;
};

export const getMessage = async () => {
  const { data } = await api.get(`${API_URL}/admin/get-message`);
  return data;
};

export const getProjects = async () => {
  const { data } = await api.get(`${API_URL}/all-projects`);
  return data;
};

export const deleteProjects = async id => {
  const { data } = await api.delete(`${API_URL}/delete-project?id=${id}`);
  return data;
};

export const postProjects = async crendetials => {
  const { data } = await apiForm.post(
    `${API_URL}/admin/create-project`,
    crendetials
  );
  return data;
};
export const getFeed = async () => {
  const { data } = await api.get(`${API_URL}/get-feed`);
  return data;
};

export const postFeed = async credentials => {
  const { data } = await api.post(`${API_URL}/post-feed`, credentials);
  return data;
};
export const deleteFeed = async id => {
  const { data } = await api.delete(`${API_URL}/delete-feed/${id}`);
  return data;
};
export const updateFeed = async ({ id, credentials }) => {
  const { data } = await api.patch(`${API_URL}/update-feed/${id}`, credentials);

  return data;
};
