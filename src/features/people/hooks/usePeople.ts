import { useState, useEffect } from "react";
import { apiProvider } from "~api";
import type { People } from "~features/people/interfaces";

interface UserApiResponse {
  results: People[];
}

export const usePeople = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [people, setPeople] = useState<People[]>([]);
  const { REACT_APP_API_RANDOM_USER } = process.env;

  const fetchPeople = () => {
    apiProvider({ baseURL: REACT_APP_API_RANDOM_USER })
      .get<UserApiResponse>("/?results=25")
      .then((res) => {
        setPeople(res?.data?.results || []);
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return { people, loading, error };
};
