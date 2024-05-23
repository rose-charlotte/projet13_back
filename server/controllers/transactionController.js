const mongoose = require("mongoose");
const Transactions = require("../database/models/transactionModel");
const TransactionDetails = require("../database/models/transactionDetailsModel");
const BankAccount = require("../database/models/bankAccountModel");
const jwt = require("jsonwebtoken");

module.exports.getAllTransactions = async (req, res) => {
    try {
        const jwtToken = req.headers.authorization.split("Bearer")[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);

        const transactions = await Transactions.find({ accountId: req.params.bankAccountId });
        const data = res.json(transactions);
        return data;
    } catch (err) {
        res.status(500).json({ err: "something went wrong" });
    }
};

module.exports.getTransactionDetailsByTransactionId = async (req, res) => {
    try {
        const jwtToken = req.headers.authorization.split("Bearer")[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);

        const bankAccount = await BankAccount.find({
            userId: decodedJwtToken.id,
            _id: new mongoose.Types.ObjectId(req.params.bankAccountId),
        });

        if (!bankAccount) {
            throw new Error("Bank account not found");
        }

        const transactionDetails = await TransactionDetails.findOne({
            bankAccountId: req.params.bankAccountId,
            transactionId: req.params.transactionId,
        });
        const data = res.json(transactionDetails);
        return data;
    } catch (err) {
        res.status(500).json({ err: "something went wrong" });
    }
};
