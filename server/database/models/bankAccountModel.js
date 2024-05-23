const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema(
    {
        type: String,
        accountId: String,
        currency: String,
        userId: String,
        balanceType: String,
    },
    {
        timestamps: true,
        toObject: {
            transform: (doc, ret, options) => {
                ret.id = ret._id;
                delete ret._id;
                return ret;
            },
        },
    }
);

module.exports = mongoose.model("BankAccount", bankAccountSchema);
