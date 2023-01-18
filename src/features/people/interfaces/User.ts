type GenderType = "female" | "male";

export interface User {
  gender: GenderType;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
  nat: string;
  login: {
    uuid: string;
  };
}
