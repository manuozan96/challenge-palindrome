import express, { Express, Router } from "express";
import { swaggerSpec, swaggerUiOptions } from "./swagger";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { Request, Response } from "express";
import { InMemorPalindromeRepository } from "../../palindrome/repositories/in-memory.repository";
import { PalindromeService } from "../../palindrome/services/palindrome.service";
import { PalindromeController } from "../../palindrome/controllers/palindrome.controller";

export function createServer(): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      ...swaggerUiOptions,
      explorer: true,
    })
  );

  const repository = new InMemorPalindromeRepository();
  const service = new PalindromeService(repository);
  const controller = new PalindromeController(service);

  app.post("/palindrome/check", controller.check.bind(controller));
  app.get("/palindrome/history", controller.history.bind(controller));
  app.delete(
    "/palindrome/history/:index",
    controller.deleteItem.bind(controller)
  );
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok!" });
  });

  return app;
}
