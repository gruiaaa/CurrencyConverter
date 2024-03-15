const axios = require('axios');


const Currency = require('../model/currency.model');

class CurrencyService {
    async getCurrencyInfo() {
        const currencyInfo = await Currency.findAll({
            attributes: ['currency_code', 'currency_description', 'flag_url']
        });
        return currencyInfo.map(currency => ({
            value: currency.currency_code,
            label: currency.currency_code + " - " + currency.currency_description,
            flagUrl: currency.flag_url
        }));

    }

    async getCurrencyRate(fsym, tsyms) {
        const url = "https://api.rates-history-service.prd.aws.ofx.com/rate-history/api/1";
        const payload = {
            method: "spotRateHistory",
            data: {
                base: fsym,
                term: tsyms,
                period: "day"
            }
        };
        const response = await axios.post(url, payload);

        if (response.data.hasOwnProperty('error')) {
            if (response.data.error.includes('supported')) {
                const customError = new Error("API returned an error: " + response.data.error);
                customError.name = 'APIQueryNotSupportedError';
                throw customError;
            }
            else if (response.data.error.includes('retrieving')) {
                const customError = new Error("API returned an error: " + response.data.error);
                customError.name = 'APIRetrievingError';
                throw customError;
            } else {
                const customError = new Error("API returned an error: " + response.data.error);
                customError.name = 'APIInternalError';
                throw customError;
            }

        }

        const currentInterbankRate = parseFloat(response.data.data.CurrentInterbankRate);
        const fetchTimeTimestamp = response.data.data.fetchTime;
        const fetchTime = new Date(fetchTimeTimestamp);
        const formattedFetchTime = fetchTime.toLocaleString('en-GB', {
            timeZone: 'Europe/London',
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        return {
            currentInterbankRate: currentInterbankRate,
            fetchTime: formattedFetchTime
        };
    }


}

module.exports = new CurrencyService();
