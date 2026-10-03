const app = require('./src/app.js')
require("dotenv").config();
const connectDB = require("./src/config/db.js");



const PORT = process.env.PORT || 5000;



const runServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
    console.log(`AVENRO API running on http://localhost:${PORT}`);
    })
}


runServer();

