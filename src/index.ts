import express from 'express';
const app = express();

import currencyRouter from './routes/currency';
import usageRouter from './routes/usage'

app.use('/currencies', currencyRouter)
app.use('/usage', usageRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});