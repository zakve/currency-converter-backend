import express from 'express';
import cors from 'cors';

const app = express();

import healthRouter from './routes/health'
import currencyRouter from './routes/currency'
import usageRouter from './routes/usage'
import latestRouter from './routes/latest'
import convertRouter from './routes/convert'

app.use(cors())
app.use(express.json());
app.use('/', healthRouter)
app.use('/health', healthRouter)
app.use('/currencies', currencyRouter)
app.use('/usage', usageRouter)
app.use('/latest', latestRouter)
app.use('/convert', convertRouter)

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default app