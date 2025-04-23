import { Request, Response } from "express";
import { PalindromeService } from "../services/palindrome.service";

export class PalindromeController {
  constructor(private readonly service: PalindromeService) {}

  /**
   * @swagger
   * /palindrome/check:
   *   post:
   *     summary: Check if text is a palindrome
   *     tags: [Palindrome]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - text
   *             properties:
   *               text:
   *                 type: string
   *                 example: "Anita lava la tina"
   *     responses:
   *       200:
   *         description: Palindrome check result
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PalindromeResult'
   *       400:
   *         description: Invalid input
   */
  async check(req: Request, res: Response): Promise<void> {
    try {
      const { text } = req.body;
      if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
      }

      const result = await this.service.checkPalindrome(text);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  /**
   * @swagger
   * /palindrome/history:
   *   get:
   *     summary: Get verification history
   *     tags: [Palindrome]
   *     responses:
   *       200:
   *         description: List of previous checks
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/PalindromeResult'
   */
  async history(req: Request, res: Response): Promise<void> {
    try {
      const history = await this.service.getHistory();
      res.json(history);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  /**
   * @swagger
   * /palindrome/history/{index}:
   *   delete:
   *     summary: Delete a palindrome history item by index
   *     tags: [Palindrome]
   *     parameters:
   *       - in: path
   *         name: index
   *         required: true
   *         schema:
   *           type: integer
   *         description: Index of the item to delete
   *     responses:
   *       204:
   *         description: Item deleted successfully
   *       400:
   *         description: Invalid index
   *       500:
   *         description: Internal server error
   */
  async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const index = parseInt(req.params.index, 10);

      if (isNaN(index)) {
        res.status(400).json({ error: "Invalid index" });
        return;
      }

      await this.service.deleteItem(index);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
