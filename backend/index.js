const express = require("express");
const rootRouter = require('./routes/index');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use("/api/v1",rootRouter);
app.use(cors());

app.listen(3000);







