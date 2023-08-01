const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000
const authRoutes = require("./routes/authRoute")
const momoPayRoutes = require('./routes/momoPayRoutes');
const payPalRoutes = require('./routes/payPalRoutes');
const bankTransferRoutes = require('./routes/bankTransferRoutes');

require('dotenv').config();
require('./models/dbConnection')

app.use(cors());
app.use(express.json())
app.use(authRoutes);
app.use(momoPayRoutes);
// app.use('/payments/paypal', payPalRoutes);
// app.use('/payments/creditpay', bankTransferRoutes);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}!`);
})