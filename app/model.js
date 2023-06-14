const redisClient = require("./config/redis");

exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient
      .get(key)
      .then((res) => {
        resolve(JSON.parse(res));
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
