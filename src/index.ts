import express from 'express';
const app = express();

import currencyRouter from './routes/currency';

app.use('/api', currencyRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});