import axios from "axios";

const fetchDataJson = async ({ URL, albumId, limit = 5 }) => {
  const response = await axios.get(URL, {
    params: {
      albumId,
      _limit: limit,
    },
  });
  return response.data;
};

export default fetchDataJson;
