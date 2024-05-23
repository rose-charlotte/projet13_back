const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        id: String,
        date: String,
        description: String,
        currency: String,
        amount: Number,
        accountId: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Transaction", transactionSchema);
