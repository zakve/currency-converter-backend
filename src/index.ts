import express from 'express';
const app = express();

import healthRouter from './routes/health'
import currencyRouter from './routes/currency';
import usageRouter from './routes/usage'

app.use('/', healthRouter)
app.use('/health', healthRouter)
app.use('/currencies', currencyRouter)
app.use('/usage', usageRouter)

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default app