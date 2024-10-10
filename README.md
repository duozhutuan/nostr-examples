# nostr-examples
Some examples of code using the Nostr protocol

Install dependency libraries
```
npm install
```

# chatroom.js
chatroom.js from https://github.com/NostrChat/NostrChat.
```
node chatroom.js
```

list chatroom content.

# relay hub
https://github.com/duozhutuan/relayhub

Using RelayHub can indeed help more users access Nostr relay servers. RelayHub acts as an intermediary, allowing users to route their requests and responses through it when their network is restricted and they cannot directly access a specific relay server. This way, even if certain relay servers are restricted, users can still access them via RelayHub.

Establishing more intermediary stations can effectively distribute traffic, reduce the risk of single points of failure, and enhance the network’s resistance to censorship. This relay mechanism ensures the stability and accessibility of the Nostr network, making relay servers less dependent on specific network environments.

For example: wss://relayhub.xxx.com/wss://relay.damus.io.

# getkey.js
Generate a Nostr private key and public key to identify the user. The keys will be stored locally the first time they are generated and will not be regenerated.
```
node getkey.js
``` 

```
Your public key: npub1pf7fnmchmgj9vz6qztgkq9rrhf76fv2dm8n4zudmzpl5dtm4dewqn5yyws
```
