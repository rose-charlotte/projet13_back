const BankAccount = require("../database/models/bankAccountModel");
const jwt = require("jsonwebtoken");

module.exports.getAllBankAccount = async (req, res) => {
    try {
        const jwtToken = req.headers.authorization.split("Bearer")[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);

        const bankAccount = await BankAccount.find({ userId: decodedJwtToken.id });
        const data = res.json(bankAccount);
        return data;
    } catch (err) {
        res.status(500).json({ err: "something went wrong" });
    }
};
