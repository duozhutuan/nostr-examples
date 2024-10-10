import { LocalStorage } from 'node-localstorage';
import { generateSecretKey, getPublicKey } from 'nostr-tools/pure'

const localStorage = new LocalStorage('.data');

//localStorage.removeItem("Keypriv")

let Keypub;
let Keypriv = localStorage.getItem('Keypriv');
if (Keypriv === null){
    Keypriv = generateSecretKey() // `sk` is a Uint8Array
    Keypub = getPublicKey(Keypriv) // `pk` is a hex string
    localStorage.setItem('Keypriv', Keypriv);
} else {
    const numArray = Keypriv.split(',').map(Number);
    Keypriv = new Uint8Array(numArray)
    Keypub = getPublicKey(Keypriv) // `pk` is a hex string
}

console.log("Your public key:",Keypub)

