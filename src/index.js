const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT);