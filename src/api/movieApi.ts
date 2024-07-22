import axios from "axios";

export const QUERY_KEYS = {
  GET_ALL: "getAll",
};

export const getMovieData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}${import.meta.env.VITE_API_SECRET}`
    );

    if (response?.data) {
      return response?.data;
    } else {
      return false;
    }
    // console.log({ response });
  } catch (error) {
    // console.log("error in: getMovieData", { error });
    return false;
  }
};
