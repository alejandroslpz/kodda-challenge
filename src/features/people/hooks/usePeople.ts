import { useState, useEffect } from "react";
import type { People } from "~features/people/interfaces";
import { getPeople } from "../api/apiPeople";

interface UserApiResponse {
  results: People[];
}

export const usePeople = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [people, setPeople] = useState<People[]>([]);
  const [pagination, setPagination] = useState<number>(1);

  const getNewPeople = () => {
    setLoading(true);
    getPeople(20, pagination)
      .then((arrayOfPeople) => {
        setPeople(arrayOfPeople || []);
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
        setError(true);
      });
  };

  const getMorePeople = async (num: number, pagination: number) => {
    setPagination(pagination + 1);

    getPeople(num, pagination)
      .then((arrayOfPeople) => {
        setPeople((prevPeople) => [...prevPeople, ...(arrayOfPeople || [])]);
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getNewPeople();
  }, []);

  return { people, loading, error, getNewPeople, getMorePeople, pagination };
};
