import { dynamoClient, TABLE_NAME } from "../config/dynamo";
import { IStatistics } from "../models/statistics.model";

export const updateItem = async ({ destinationCurrency, totalAmountConverted, totalConversionRequests }: IStatistics) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                DestinationCurrency: destinationCurrency
            },
            UpdateExpression: 'SET #TotalAmountConverted = if_not_exists(#TotalAmountConverted, :initialValue) + :val1, #TotalConversionRequests = if_not_exists(#TotalConversionRequests, :initialValue) + :val2',
            ExpressionAttributeNames: {
                "#TotalAmountConverted": "TotalAmountConverted",
                "#TotalConversionRequests": "TotalConversionRequests"
            },
            ExpressionAttributeValues: {
                ':val1': totalAmountConverted,
                ':val2': totalConversionRequests,
                ':initialValue': 0
            },
            ReturnValues: 'UPDATED_NEW'
        };

        const response = await dynamoClient.update(params).promise()
        return response
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while updating the item. Please try again later.')
    }
}

export const putItem = async ({ destinationCurrency, totalAmountConverted, totalConversionRequests }: IStatistics) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Item: {
                DestinationCurrency: destinationCurrency,
                TotalAmountConverted: totalAmountConverted,
                TotalConversionRequests: totalConversionRequests
            }
        };

        return await dynamoClient.put(params).promise();
    } catch (error) {
        console.error(error)
        throw new Error('An error occurred while put the item. Please try again later.')
    }
}
