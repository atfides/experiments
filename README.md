Exploring the [Github webhooks api](https://developer.github.com/v3/repos/hooks/).

## exp:

Possibility to activate atFides by creating a new issue or by commenting on an issue.

> anybody on Github can set up a repo to activate atfides

## Architechture

```
+--------------+       +------------------+      +-----------+
|   index.js   |       |  process inc req |      |  process  |
|              | ----> |  > branch out    | ---> |           |
| (run server) |       |  based on event  |      |  payload  |
+--------------+       +------------------+      +-----------+

```

## Lexicon

### Webhooks:

```
Events | Payloads | Ping
```
> Webhooks can be managed using the JSON HTTP API or PubSubHubbub API

### Events:

When configuring a webhook, you can choose which events you would like to receive payloads for.

> By default, webhooks are only subscribed to the `push` event.

### Payloads:

Each event type has a specific payload format with the relevant information.

> All event payloads mirror `the payloads for the Event types` 
