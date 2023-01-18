import { useState, useEffect } from "react";
import { apiProvider } from "~api";
import type { User } from "~features/people/interfaces";

interface UserApiResponse {
  results: User[];
}

export const useUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    apiProvider({ baseURL: "https://randomuser.me/api" })
      .get<UserApiResponse>("/?results=25")
      .then((res) => {
        setUsers(res?.data?.results || []);
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { users, loading, error };
};
