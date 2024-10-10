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
  'wss://relay1.nostrchat.io',
  'wss://relay2.nostrchat.io',
  'wss://relay.damus.io',
  'wss://relay.snort.social',
  'wss://nos.lol',
];

//let hub = "ws://relay.xxxx.com/"; //relay_hub
let hub = "";

relays = relays.map(relay => hub + relay );

//let events = await pool.querySync(relays, { kinds: [0, 1] })

let msg = [{"kinds":[41,5],"#e":["f412192fdc846952c75058e911d37a7392aa7fd2e727330f4344badc92fb8a22"]},{"kinds":[42],"#e":["f412192fdc846952c75058e911d37a7392aa7fd2e727330f4344badc92fb8a22"],"limit":30}]
pool.subscribeMany(relays,msg,{
        onevent(data){
            console.log(data.content)
        }
})

