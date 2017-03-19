## Brainstorming on the second phase implementation of atfides

### Questions to answer

1. Is there a way to sign up for atfides without leaving Github?

2. How do you double check whether someone intented to donate for a particular issue to be fixed?

3. What happens when the user's proposed amount (donation) is higher than what's on their account?

 * live updating button (green: when ok / red otherwise)?

4. How do you prevent "3" from happening in the first place?

 * How do you lock the user's fund / How does a user recharge his account


### How do avoid the problem of users who abfuscate their email: @noreply

* Make the atFides bot redirect them to the main website to sign up and claim the donation

## To a magic Experience:

> map all possible user interactions (issues <-> pr <-closed/merge->) and deduct intent > then action

### questions to worry about later

* How do you deal with a (force push)?

> Maybe disable atfides on force-pushes
