import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Palindrome API",
    version: "1.0.0",
    description: "API para verificar palíndromos y mantener historial",
  },
  servers: [
    {
      url: "http://localhost:8000",
      description: "Local development server",
    },
  ],
  components: {
    schemas: {
      PalindromeResult: {
        type: "object",
        properties: {
          text: {
            type: "string",
            example: "anita lava la tina",
          },
          isPalindrome: {
            type: "boolean",
            example: true,
          },
          timestamp: {
            type: "string",
            format: "date-time",
            example: "2025-04-22T12:00:00Z",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: {
            type: "string",
            example: "Error message",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/**/*.controller.ts", "./src/config/express.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerUiOptions: SwaggerUiOptions = {
  customSiteTitle: "Palindrome API Documentation",
  explorer: true,
  swaggerOptions: {
    docExpansion: "list",
    filter: true,
    showRequestDuration: true,
  },
  customCss: ".swagger-ui .topbar { display: none }",
};
