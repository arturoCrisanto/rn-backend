import express from "express";
import { Router } from "express";
import {
  getTransactionsByUserId,
  getSummaryByUserId,
  deleteTransaction,
  createTransaction,
} from "../controllers/transactionController.js";

const router = Router();

router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);
router.get("/summary/:userId", getSummaryByUserId);
router.get("/:userId", getTransactionsByUserId);

export default router;
