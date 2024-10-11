import { useWebSocketImplementation } from 'nostr-tools/pool';
import WebSocket from "ws"
useWebSocketImplementation(WebSocket);

import { SimplePool } from 'nostr-tools/pool'
import { getPublicKey,getEventHash,finalizeEvent } from 'nostr-tools/pure'
import { schnorr as schnorr2 } from "@noble/curves/secp256k1";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex as bytesToHex2 } from "@noble/hashes/utils";

import { resolve } from 'import-meta-resolve';
import {        Keypub,
        Keypriv,
        bech32PrivateKey,
        bech32PublicKey} from './getkey.js'

async function getModulePath() {
  const modulePath = await resolve('nostr-tools/pool', import.meta.url);
  console.log(modulePath);
}

getModulePath();

function getSign(event,key){
  return bytesToHex2(schnorr2.sign(getEventHash(event), key));
}

const pool = new SimplePool()

let relays = [
  'wss://relay1.nostrchat.io',
  'wss://relay2.nostrchat.io',
  'wss://relay.damus.io',
  'wss://relay.snort.social',
  'wss://nos.lol',
];

let hub = "";
relays = relays.map(relay => hub + relay );

let content = "Test a sendmsg from https://github.com/duozhutuan/nostr-examples sendmsg.js"
let kind    = 42
let tags    =  [['e', 'f412192fdc846952c75058e911d37a7392aa7fd2e727330f4344badc92fb8a22', 'wss://nos.lol', 'root']]
let msg = {
                kind,
                tags,
                pubkey: Keypub,
                content,
                created_at: Math.floor(Date.now() / 1000),
                id: '',
                sig: ''
            }
//add id and sign 
msg = finalizeEvent(msg,Keypriv)

pool.publish(relays,msg)

