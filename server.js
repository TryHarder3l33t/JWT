const { syncAndSeed } = require("./db");
const app = require("./app");

const init = async () => {
  await syncAndSeed();
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, console.log(`Listening on port${PORT}`));
};
