const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'wwwroot/orderpage/build')));

// TODO - If there's time, look into SSL for security when sending credit cards.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'wwwroot/orderpage/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server Started. Listening on port ${port}`);
});