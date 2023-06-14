let redis = require("redis");
var options = {
  host: "localhost",
  port: 6379,
  // auth_pass: process.env.REDIS_PASSWORD,
};

let client = redis.createClient(options);

client
  .connect()
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
