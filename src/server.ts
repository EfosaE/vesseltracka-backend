import app from "./app";
import config from "./config/config";
import { testDBConnection } from "./drizzle/db";

// Run the DB connection test before starting the server
(async () => {
  await testDBConnection();

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
})();
