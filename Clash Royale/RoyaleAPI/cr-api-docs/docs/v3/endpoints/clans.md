# Clans

This endpoint retrieves multiple clans. To retrieve a single clan, take a look at [/clan/<TAG>](/endpoints/clan).

## HTTP Request

`GET https://v3-beta.royaleapi.com/clans/<TAGS>`

### URL Parameters

Parameter | Description
--- | ---
`TAGS` | A comma-seperated list of clan tags to retrieve

## Response

https://v3-beta.royaleapi.com/clans/9PJ82CRC,9UQJUJC9

<a href="/json/clans_9PJ82CRC,9UQJUJC9.json">Full JSON response</a>

The above command returns JSON structured like this:

```json
[
    {},
    {}
]
```

## Implementation

You can see an example of this at https://royaleapi.com/clan/family/racf/members