const express = require("express");
const router = express.Router();
const tokenValidation = require("../middleware/tokenValidation");
const bankAccountController = require("../controllers/bankAccountController");
const transactionController = require("../controllers/transactionController");

router.get("/", tokenValidation.validateToken, bankAccountController.getAllBankAccount);
router.get("/:bankAccountId/transactions", tokenValidation.validateToken, transactionController.getAllTransactions);
router.get(
    "/:bankAccountId/transactions/:transactionId",
    tokenValidation.validateToken,
    transactionController.getTransactionDetailsByTransactionId
);

module.exports = router;
