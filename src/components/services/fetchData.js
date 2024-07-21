import axios from "axios";

const fetchData = async (URL, query, page = 1, perPage = 10) => {
  const response = await axios.get(URL, {
    params: {
      query,
      page,
      // per_page: perPage,
      // albumId: query,
    },
  });
  return response.data;
};

export default fetchData;
