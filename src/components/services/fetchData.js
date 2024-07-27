import axios from "axios";
const BASE_URL = "https://api.unsplash.com/";
const END_POINT = "/search/photos"; //https://unsplash.com/documentation#schema
const client_id = "yIp7KhzFsb4CVLb9gfY9k_AaLKTzD1SqXwegwczqCVs";
const URL = `${BASE_URL}${END_POINT}?client_id=${client_id}`;

const fetchData = async ({ URL, query, page = 1, perPage = 12 }) => {
  const response = await axios.get(URL, {
    params: {
      query,
      page,
      per_page: perPage,
      orientation: "landscape",
    },
  });
  return response.data;
};

export default fetchData;
