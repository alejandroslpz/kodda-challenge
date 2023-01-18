const avatars = {
  kodda: require("../../src/assets/avatars/kodda.png"),
  default: require("../../src/assets/avatars/default.jpeg"),
};

type Avatars = keyof typeof avatars;

export const useAvatar = (avatarType: Avatars): number => {
  return avatars[avatarType];
};
