# nostr-examples
Some examples of code using the Nostr protocol

Install dependency libraries
```
npm install
```

## chatroom.js
chatroom.js from https://github.com/NostrChat/NostrChat.
```
node chatroom.js
```

list chatroom home page content.

## getkey.js
Generate a Nostr private key and public key to identify the user. The keys will be stored locally the first time they are generated and will not be regenerated.
```
node getkey.js
``` 

```
Your public key: npub1pf7fnmchmgj9vz6qztgkq9rrhf76fv2dm8n4zudmzpl5dtm4dewqn5yyws
```

## sendmsg.js
Send message to https://github.com/NostrChat/NostrChat default room.
```
node sendmsg.js
```

The program encountered an exception, but it doesn’t matter. The message was sent successfully. You can go and check it.
browser https://github.com/NostrChat/NostrChat or node chatroom.js get new message.

## get iris.to message 
```
node getmessage_iris.js
```
## get nostribe home message list
```
node nostribe_home_list.js
```
## get_relay_server.js
get some relay server
```
node get_relay_server.js
``` 
result see relays.md

## add nip96 file upload web demo
```
cd nip96-web
npm install
npm run dev
```


## get user profile 、following and followers
 
```
node get_user_following_tools.js
node get_user_followers_tools.js
```


# relay hub
https://github.com/duozhutuan/relayhub

Using RelayHub can indeed help more users access Nostr relay servers. RelayHub acts as an intermediary, allowing users to route their requests and responses through it when their network is restricted and they cannot directly access a specific relay server. This way, even if certain relay servers are restricted, users can still access them via RelayHub.

Establishing more intermediary stations can effectively distribute traffic, reduce the risk of single points of failure, and enhance the network’s resistance to censorship. This relay mechanism ensures the stability and accessibility of the Nostr network, making relay servers less dependent on specific network environments.

For example: wss://relayhub.xxx.com/wss://relay.damus.io.


