import axios from "axios";

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
