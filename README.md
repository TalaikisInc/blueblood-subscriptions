<p align="center">
  <a href="https://blueblood.talaikis.com/">
    <img alt="Blue Blood" src="https://github.com/BlueBloodLtd/blueblood.ltd/blob/master/media/logo.png" width="685">
  </a>
</p>

# BlueBlood Trading Plans (Frontend)

## Add secrets

```bash
now secret add stripe-key <publishable key>
now secret add plan-basic <id>
now secret add plan-pro <id>
now secret add create-endpoint <url>
now secret add cancel-endpoint <url>
now secret add getsub-endpoint <url>
```

```
  POST - https://w75pgcjxmc.execute-api.us-east-1.amazonaws.com/prod/create-customer
  POST - https://w75pgcjxmc.execute-api.us-east-1.amazonaws.com/prod/get-subscription
  POST - https://w75pgcjxmc.execute-api.us-east-1.amazonaws.com/prod/cancel-subscription
  POST - https://w75pgcjxmc.execute-api.us-east-1.amazonaws.com/prod/webhook
```
