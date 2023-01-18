type GenderType = "female" | "male";

export interface People {
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
