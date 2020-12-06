const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const apiV1 = require('./api/apiV1');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'wwwroot/orderpage/build')));

app.use('/api/v1/', apiV1);

// TODO - If there's time, look into SSL for security when sending credit cards.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'wwwroot/orderpage/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server Started. Listening on port ${port}`);
});