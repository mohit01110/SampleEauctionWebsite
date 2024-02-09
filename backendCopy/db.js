const mongoose = require("mongoose");

const connection = () => {
    const uri = process.env.DB;
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(uri, connectionParams)
        .then(() => {
            console.log("Backend Database Server Connected Successfully");
        })
        .catch(error => {
            console.error("Error connecting to Backend Database Server:", error);
        });
};

module.exports = connection;
