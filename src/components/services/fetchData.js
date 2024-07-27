import axios from "axios";

const fetchData = async ({ url, query, page = 1, perPage = 12 }) => {
  const response = await axios.get(url, {
    params: {
      query,
      page,
      per_page: perPage,
      orientation: "landscape",
    },
  });
  return response.data;
};

export { fetchData };
