Exploring the [Github webhooks api](https://developer.github.com/v3/repos/hooks/).

## Example of the most basic interaction (MVP)

1. user A: "Sponsoring $20 to get a better test coverage"
2. user B submits pr with title: "Fix: Sponsoring $20 to get a better test coverage"
3. pr gets merged user B gets the $20

### Hard rules

1. Every sponsoring issue will start with "Sponsoring"
2. To get the donation the pr title must be: "Fix: " + ${issue}

## Architechture

```
+--------------+       +------------------+      +-----------+
|   index.js   |       |  process inc req |      |  process  |
|              | ----> |  > branch out    | ---> |           |
| (run server) |       |  based on event  |      |  payload  |
+--------------+       +------------------+      +-----------+
```

Chain reaction: when pr gets merged

```
+--------+       +------------------+      +----------------+
| start  |       | Pull all opened  |      |  Launch        |
|  with  | ----> | issues starting  | ---> |  transaction   |
| Fix:?  |       |  "Sponsoring:"   |      |  when matching |
+--------+       +------------------+      +----------------+
```

To analyze payload before transaction, make sure:

1. action is closed
2. pull_request.merged === true
3. repository.has_issues   === true
4. pull_request.title matches

> We'll throw an exception if there's no match for now > the default being to not launch anything

> We will worry about some NLP later && we only care about dev in master

## Dev

Currently experimenting with [ngrok](https://ngrok.com/). Read this [article](https://medium.com/@mohamedhayibor/minimalist-dive-into-webhooks-a660a826e22).

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

#### exp: (later)

Possibility to activate atFides by creating a new issue or by commenting on an issue.

> anybody on Github can set up a repo to activate atfides
