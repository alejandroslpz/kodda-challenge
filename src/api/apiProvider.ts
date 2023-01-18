import { create } from "apisauce";

interface ApiProps {
  baseURL: string;
}

export const apiProvider = ({ baseURL }: ApiProps) => {
  return create({
    baseURL,
  });
};
