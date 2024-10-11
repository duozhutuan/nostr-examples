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
let hub = "wss://relay.xxx.com/";
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

