import { create } from "apisauce";

interface ApiProps {
  baseURL: string | undefined;
}

export const apiProvider = ({ baseURL }: ApiProps) => {
  return create({
    baseURL,
  });
};
