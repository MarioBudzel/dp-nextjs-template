const axios = require("axios");
const { getAuthToken } = require("../universal/utils");

exports.api = axios.create({
  baseURL: "http://web:3000",
  headers: { "x-access-token": getAuthToken() },
});
