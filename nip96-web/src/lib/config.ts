import type { WindowNostr } from 'nostr-tools/nip07';

export const linkGitHub = 'https://github.com/duozhutuan/nostr-examples/';

export const defaultUploaderURLs = [
  'https://nostrcheck.me',
  'https://nostr.build',
  'https://yabu.me',
  'https://nostpic.com',
  'https://void.cat',
  'https://files.sovbit.host',
];

export const defaultRelays = [
  'wss://relay-jp.nostr.wirednet.jp/',
  'wss://yabu.me/',
  'wss://nos.lol/',
  'wss://relay.damus.io/',
];

declare global {
  interface Window {
    nostr?: WindowNostr;
  }
}
