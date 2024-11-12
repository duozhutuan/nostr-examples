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



let msg = 
{
  "kinds": [
    3
  ],
  "#p": [
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
        if (data.length > 0)
            process.stdout.write(JSON.parse(data[0].content).name);
        else
            process.stdout.write(pubkey)
    } catch (e){
        console.log(e,pubkey)
    }
}

let ids = []

async function followers (pubkey){
    if (ids.indexOf(pubkey) !== -1)
        return ;
    ids.push(pubkey)
    msg['#p']= [pubkey]
    let datas = await pool.querySync(relays,msg)

    for (const data of datas) { 
        console.log(" ",data.tags.length)
        for (const tag of data.tags.slice(0, 5)){
            if (ids.indexOf(tag[1]) == -1){
                await profile(tag[1])
                await followers(tag[1])
            }
        }
    }
}

profile("3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d")
followers("3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d")
