import { apiProvider } from "../../../api/apiProvider";
import { People } from "../interfaces";

const { REACT_APP_API_RANDOM_USER } = process.env;

interface UserApiResponse {
  results: People[];
}

const getPeople = async (num: number, pagination: number) => {
  const response = await apiProvider({
    baseURL: REACT_APP_API_RANDOM_USER,
  }).get<UserApiResponse>(`/?results=${num}&page=${pagination}`);

  if (response.data?.results) {
    return response.data.results;
  }

  return null;
};

export { getPeople };
