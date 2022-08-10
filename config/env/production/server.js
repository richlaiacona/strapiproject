module.exports = ({ env }) => ({
  url: env("hystrapi.herokuapp.com"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});