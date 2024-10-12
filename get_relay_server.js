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
//hub = ""
relays = relays.map(relay => hub + relay );


let msg = [
        {kinds:[
  10000,
  0,
  10002,
  3
]}
]

pool.subscribeMany(relays,msg,{
        onevent(data){
            try {
                const content = JSON.parse(data.content);
                if (data.content.includes("wss://")){
                    console.log( content);
                }
            } catch (error) {
            }    
        }
})





