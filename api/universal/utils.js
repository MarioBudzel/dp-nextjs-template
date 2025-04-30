const apiSecrets = process.env.API_SECRETS.split(",");
const jwt = require("jsonwebtoken");

/**
 * Vráti AUTH token potrebný pre autorizáciu na Next.js serveri
 * @returns string
 */
exports.getAuthToken = () => {
  const signToken = apiSecrets[Math.floor(Math.random() * apiSecrets.length)];
  const authToken = jwt.sign(
    {
      source: "NODE.JS API LAYER",
      type: "REQUEST",
    },
    signToken
  );

  return authToken;
};
