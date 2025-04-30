const jwt = require("jsonwebtoken");
const axios = require("axios");

const { api } = require("../axios/api");

exports.maintenance = async () => {
  try {
    const respose = await api.post("/api/maintenance", {
      message: "NODE.JS API LAYER",
    });
    console.log(respose.data);
  } catch (error) {
    throw new Error("Error in request");
  }
};
