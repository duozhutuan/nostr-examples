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
let hub = "wss://relay.xxxxx.com/";
hub = ""
relays = relays.map(relay => hub + relay );



let msg = 
{
  "kinds": [
    3
  ],
  "authors": [
    "3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d"
  ]
}



async function profile(pubkey){
    let profileevent = 
    {
    "kinds": [
        0],
  "authors": [
    "3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d"
    ]
    }



    profileevent.authors = [pubkey]
    let data = await pool.querySync(relays,profileevent)
    try {
        console.log(JSON.parse(data[0].content).name);
    } catch (e){
    }
}

let ids = []

async function following (pubkey){
    if (ids.indexOf(pubkey) !== -1)
        return ;
    ids.push(pubkey)

    msg.authors= [pubkey]
    let datas = await pool.querySync(relays,msg)

    for (const data of datas) { 
        console.log(data.tags.length)
        for (const tag of data.tags.slice(0, 5)){
            if (ids.indexOf(tag[1]) == -1){
                await profile(tag[1])
                await following(tag[1])
            }
        }
    }
}

//profile("3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d")
following("3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d")
