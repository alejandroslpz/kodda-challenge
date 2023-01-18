import { type ApisauceConfig, create } from "apisauce";

interface ApiProps extends ApisauceConfig {
  baseURL: string | undefined;
}

export const apiProvider = ({ baseURL }: ApiProps) => {
  return create({
    baseURL,
  });
};
