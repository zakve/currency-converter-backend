import AWS from "aws-sdk";
import { AWS_DEFAULT_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from './keys.config';

export const TABLE_NAME = "CurrencyConversionStats"

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_DEFAULT_REGION
});

export const dynamoClient = new AWS.DynamoDB.DocumentClient();

