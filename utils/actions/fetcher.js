import api from "../axios";

export const fetcher = (url) => api.get(url).then((res) => res.data.data);

export const fetches = (url) => api.get(url).then((res) => res.data);
