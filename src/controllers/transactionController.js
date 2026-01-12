import Transaction from "../models/Transaction.js";
import { logger } from "../utils/helpers/logger.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../utils/helpers/responseHelper.js";

/**
 * GET transactions by user
 * SQL:
 * SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC
 */
export async function getTransactionsByUserId(req, res) {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ userId }).sort({
      createdAt: -1,
    });

    sendSuccessResponse(
      res,
      transactions,
      "Transactions retrieved successfully"
    );
  } catch (error) {
    logger.error(`Error getting the transactions: ${error.message}`);
    sendErrorResponse(res, "Internal server error", 500);
  }
}

/**
 * CREATE transaction
 * SQL:
 * INSERT INTO transactions (...) RETURNING *
 */
export async function createTransaction(req, res) {
  try {
    const { title, amount, category, user_id } = req.body;

    if (!title || !user_id || !category || amount === undefined) {
      return sendErrorResponse(res, "All fields are required", 400);
    }

    const transaction = await Transaction.create({
      userId: user_id,
      title,
      amount,
      category,
    });

    sendSuccessResponse(
      res,
      transaction,
      "Transaction created successfully",
      201
    );
  } catch (error) {
    logger.error(`Error creating the transaction: ${error.message}`);
    sendErrorResponse(res, "Internal server error", 500);
  }
}

/**
 * DELETE transaction
 * SQL:
 * DELETE FROM transactions WHERE id = ? RETURNING *
 */
export async function deleteTransaction(req, res) {
  try {
    const { id } = req.params;

    const deleted = await Transaction.findByIdAndDelete(id);

    if (!deleted) {
      return sendErrorResponse(res, "Transaction not found", 404);
    }

    sendSuccessResponse(res, deleted, "Transaction deleted successfully");
  } catch (error) {
    logger.error(`Error deleting the transaction: ${error.message}`);
    sendErrorResponse(res, "Internal server error", 500);
  }
}

/**
 * SUMMARY by user
 * SQL:
 * SUM(amount), SUM(amount > 0), SUM(amount < 0)
 */
export async function getSummaryByUserId(req, res) {
  try {
    const { userId } = req.params;

    const result = await Transaction.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: null,
          balance: { $sum: "$amount" },
          income: {
            $sum: {
              $cond: [{ $gt: ["$amount", 0] }, "$amount", 0],
            },
          },
          expenses: {
            $sum: {
              $cond: [{ $lt: ["$amount", 0] }, "$amount", 0],
            },
          },
        },
      },
    ]);

    const summary = result[0] || {
      balance: 0,
      income: 0,
      expenses: 0,
    };

    sendSuccessResponse(res, summary, "Summary retrieved successfully");
  } catch (error) {
    logger.error(`Error getting the summary: ${error.message}`);
    sendErrorResponse(res, "Internal server error", 500);
  }
}
