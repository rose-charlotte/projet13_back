const mongoose = require("mongoose");

const transactionDetailsSchema = new mongoose.Schema(
    {
        _id: String,
        transactionId: String,
        transactionType: String,
        bankAccountId: String,
        category: String,
        notes: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("TransactionDetails", transactionDetailsSchema);
