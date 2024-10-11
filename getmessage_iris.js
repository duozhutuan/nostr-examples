import { useWebSocketImplementation } from 'nostr-tools/pool';
import WebSocket from "ws"
useWebSocketImplementation(WebSocket);

import { SimplePool } from 'nostr-tools/pool'
import { resolve } from 'import-meta-resolve';

async function getModulePath() {
  const modulePath = await resolve('nostr-tools/pool', import.meta.url);
  console.log(modulePath);
}

getModulePath();

const pool = new SimplePool()

let relays = [
  'wss://relay.damus.io',
  'wss://relay.snort.social',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://strfry.iris.to',
];
//use your relayhub https://github.com/duozhutuan/relayhub
let hub = "wss://relay.xxxx.com/";
hub = ""
relays = relays.map(relay => hub + relay );


let msg = [
{
  "kinds": [
    1,
    6,
    7,
    9735
  ],
  "#e": [
    "df5e5c0aafb93a5160c21597d7cabdfd35bc3dc0172ebe7f751e5c4cdb85ae56",
    "a74000a831d0fcd6001d4ba4428d06f673de51c48c46cadc5a7c6709933fcdc1",
    "c2c597285f1206084d0cd9062afae11927ab0be2dde6282df633f0b831233ac8"
  ]
}
]

pool.subscribeMany(relays,msg,{
        onevent(data){
            console.log(data.content)
        }
})



msg = [
{
  "kinds": [
    0
  ],
  "authors": [
    "0ba8984774359da2c59a4db7dc64a63edb7ded9b3605907bdd2759fd108936d2",
    "87e02be9ae3894742a3fedda2e6b33675b642800633ab8c7ac1a306f107ac81c",
    "4f73037f99da4608b8189e7a0c818746e80007514acfc1f55af29059b6bd89cc",
    "426b651bb3932a869a30a725812e51c1a59f62d52849199d94a6fa1e3b2bf77e"
  ]
}

]
pool.subscribeMany(relays,msg,{
        onevent(data){
            console.log(data.content)
        }
})



