module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~api": "./src/api",
            "~assets": "./src/assets",
            "~components": "./src/components",
            "~context": ["src/context"],
            "~features": "./src/features",
            "~hooks": "./src/hooks",
            "~themes": "./src/themes",
          },
        },
      ],
    ],
  };
};
