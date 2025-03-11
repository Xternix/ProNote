const express = require('express');

// Routes
const indexRouter = require('./routes/index');


const app = express();

app.use('/', indexRouter);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));