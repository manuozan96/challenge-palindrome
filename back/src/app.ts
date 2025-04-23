import { createServer } from "./features/shared/config/express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = createServer();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
