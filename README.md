# Currency Converter 
Node.js backend for Currency Converter

API URL: [https://openexchangerates.org/api/](https://openexchangerates.org/api/)

Documentation: [https://docs.openexchangerates.org/](https://docs.openexchangerates.org/)

## Stack/Features
> - Node.js
> - Typescript
> - Axios
> - AWS CI/CD (CodePipeline, Elastic Beanstalk)
> - AWS DynamoDB for statistics
> - Jest Supertest


## Instalation

### Clone and install packages
```
git clone https://github.com/zakve/currency-converter-backend.git
cd currency-converter-backend
npm i
npm run dev
```

### Set `.evn` file
Create `.env` file and add your openexchangerates App ID key
```
OPENEXCHANGERATES_KEY=**YOUR_KEY**
AWS_ACCESS_KEY_ID=**YOUR_ACCESS_KEY**
AWS_SECRET_ACCESS_KEY=**YOUR_SECRET_ACCESS_KEY**
AWS_REGION=**YOUR_REGION**
```

### Endpoints documentation
```
http://localhost:3000/docs/
```

### Tests
```
npm test
```

### Demo

[http://currencyconverter-env.eba-xcdiy96e.eu-central-1.elasticbeanstalk.com/](http://currencyconverter-env.eba-xcdiy96e.eu-central-1.elasticbeanstalk.com/)

### TODO
- Add tests for DB functions
- Implement statistics 
  - Most popular destination currency
  - Total amount converted (in USD)
  - Total number of conversion requests made