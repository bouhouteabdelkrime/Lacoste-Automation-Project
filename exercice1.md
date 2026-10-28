# Exercise 1 : EUR → USD Exchange Rate on 01/01/2025

## 1. Endpoint and parameters

**Method:** `GET`

**Endpoint:**
```
https://api.apilayer.com/exchangerates_data/2025-01-01?base=EUR&symbols=USD
```

**Headers:**

| Header | Value |
|---|---|
| `apikey` | `<API_KEY>` |

**Params:**
- `base=EUR` base currency for the conversion. EUR is actually the default on this API, so this is explicit more than necessary switching to a different base currency is the part that needs a paid plan.
- `symbols=USD` limits the response to the USD rate instead of all ~170 supported currencies.

Auth goes through the `apikey` header, not a query param like older versions of this API used.

## 2. Expected API response

This is the actual response I got back in Postman:

```json
{
  "success": true,
  "timestamp": 1735775999,
  "historical": true,
  "base": "EUR",
  "date": "2025-01-01",
  "rates": {
    "USD": 1.035138
  }
}
```

So 1 EUR = 1.035138 USD on that date, per this provider.

## 3. Data validation

I'd check status is 200, `success` and `historical` are true, and the response actually matches what I asked for `date` is `2025-01-01`, `base` is `EUR`, `rates.USD` exists and is a positive number.

I'd also test the failure cases I actually hit while building this bad/missing `apikey`, wrong date format to make sure the API fails predictably instead of silently.

These checks would be automated for example with Postman test scripts run through Newman, or a Cypress API spec and run in CI on every build rather than checked by hand each time.
