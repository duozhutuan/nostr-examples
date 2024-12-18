import WebSocket from 'ws';
import { performance } from 'perf_hooks';

export async function testRelayConnectionSpeed(url) {
    return new Promise((resolve, reject) => {
        const start = performance.now();
        const ws = new WebSocket(url);

        ws.on('open', () => {
            const end = performance.now();
            const timeTaken = end - start;
            console.log(`Connected to ${url} in ${timeTaken.toFixed(2)} ms`);
            resolve(timeTaken);
            ws.close(); // Close connection after task completion
        });

        ws.on('error', (error) => {
            console.error(`Connection error: ${error.message}`);
            reject(error);
        });
    });
}

let relays = [
  'wss://nostr.slothy.win',
  'wss://xmr.usenostr.org',
  'wss://at.nostrworks.com',
  'wss://btc.klendazu.com',
  'wss://relay.nostrified.org',
  'wss://news.utxo.one',
  'wss://relay1.nostrchat.io',
  'wss://relay2.nostrchat.io',
  'wss://strfry.iris.to',
  'wss://relay.damus.io',
  'wss://nos.lol',
];

let relays1 = [
  "wss://relay.damus.io",
  "wss://nostr-pub.wellorder.net",
  "wss://nostr.mom",
  "wss://nostr.slothy.win",
  "wss://relay.stoner.com",
  "wss://nostr.einundzwanzig.space",
  "wss://nos.lol",
  "wss://relay.nostr.band",
  "wss://relay.oldcity-bitcoiners.info",
  "wss://nostr-relay.schnitzel.world",
  "wss://relay.nostr.com.au",
  "wss://knostr.neutrine.com",
  "wss://nostr.nodeofsven.com",
  "wss://nostr.vulpem.com",
  "wss://relay.farscapian.com",
  "wss://relay.sovereign-stack.org",
  "wss://nostr-verif.slothy.win",
  "wss://relay.lexingtonbitcoin.org",
  "wss://nostr-1.nbo.angani.co",
  "wss://relay.wellorder.net",
  "wss://nostr.easydns.ca",
  "wss://relay.dwadziesciajeden.pl",
  "wss://relay.orangepill.dev",
  "wss://e.nos.lol",
  "wss://ragnar-relay.com",
  "wss://nostr.data.haus",
  "wss://nostr.wine",
  "wss://nostr.koning-degraaf.nl",
  "wss://nostr.thank.eu",
  "wss://relay.hamnet.io",
  "wss://nostr.blockpower.capital",
  "wss://nostr.sidnlabs.nl",
  "wss://nostr.inosta.cc",
  "wss://nostr21.com",
  "wss://nostr.ch3n2k.com",
  "wss://relay.nostrview.com",
  "wss://relay.nostromo.social",
  "wss://offchain.pub",
  "wss://relay.nostr.wirednet.jp",
  "wss://nostr.l00p.org",
  "wss://lightningrelay.com",
  "wss://private.red.gb.net",
  "wss://relay.nostrid.com",
  "wss://relay.nostrcheck.me",
  "wss://nostrelay.yeghro.site",
  "wss://relay.nostr.vet",
  "wss://nostr.yuv.al",
  "wss://nostrue.com",
  "wss://nproxy.kristapsk.lv",
  "wss://nostr.topeth.info",
  "wss://nostr.bitcoiner.social",
  "wss://relay.orange-crush.com",
  "wss://nostr.spaceshell.xyz",
  "wss://nostr.roundrockbitcoiners.com",
  "wss://relay.nostrology.org",
  "wss://nostr-dev.wellorder.net",
  "wss://relay.snort.social",
  "wss://nr.yay.so",
  "wss://nostr.lu.ke",
  "wss://atlas.nostr.land",
  "wss://nostr.pjv.me",
  "wss://brb.io",
  "wss://eden.nostr.land",
  "wss://nostr-verified.wellorder.net",
  "wss://nostr.noones.com",
  "wss://relay.nostr.nu",
  "wss://nostr-relay.bitcoin.ninja",
  "wss://freespeech.casa",
  "wss://bitcoiner.social",
  "wss://nostr.1f52b.xyz",
  "wss://nostr.sebastix.dev",
  "wss://nostr.cizmar.net",
  "wss://n.wingu.se",
  "wss://relay.nostr.hach.re",
  "wss://nostr.bitcoinplebs.de",
  "wss://nostr.corebreach.com",
  "wss://nostr.tools.global.id",
  "wss://xmr.usenostr.org",
  "wss://at.nostrworks.com",
  "wss://nostr.sovbit.host",
  "wss://nostr.1sat.org",
  "wss://mastodon.cloud/api/v1/streaming",
  "wss://nostr.256k1.dev",
  "wss://relay.beta.fogtype.com",
  "wss://rsslay.ch3n2k.com",
  "wss://relay.nostr.bg",
  "wss://nostr.primz.org",
  "wss://relay.johnnyasantos.com",
  "wss://btc.klendazu.com",
  "wss://slick.mjex.me",
  "wss://nostr.yael.at",
  "wss://relay.nostrified.org",
  "wss://nostr.orangepill.dev",
  "wss://relay.primal.net",
  "wss://nostr.cercatrova.me",
  "wss://nostr.swiss-enigma.ch",
  "wss://nostr-relay.derekross.me",
  "wss://puravida.nostr.land",
  "wss://nostr.sectiontwo.org",
  "wss://nostr.oxtr.dev",
  "wss://relay.s3x.social",
  "wss://relay.ryzizub.com",
  "wss://nostr.liberty.fans",
  "wss://nostr.cro.social",
  "wss://nostr.ginuerzh.xyz",
  "wss://nostr.d11n.net",
  "wss://nostr.semisol.dev",
  "wss://misskey.io",
  "wss://nostr.namek.link",
  "wss://relay.nostr.wf",
  "wss://nostr.land",
  "wss://relay.mostr.pub",
  "wss://relay.nostrplebs.com",
  "wss://yestr.me",
  "wss://paid.nostrified.org",
  "wss://nostr-02.dorafactory.org",
  "wss://nostr.zbd.gg",
  "wss://relay.hodl.ar",
  "wss://relay.nostr.sc",
  "wss://feeds.nostr.band/nostrhispano",
  "wss://nostr.middling.mydns.jp",
  "wss://nostr.portemonero.com",
  "wss://search.nos.today",
  "wss://relay.minds.com/nostr/v1/ws",
  "wss://welcome.nostr.wine",
  "wss://yabu.me",
  "wss://nrelay.c-stellar.net",
  "wss://nostrja-kari.heguro.com",
  "wss://nostr-relay.app",
  "wss://rly.nostrkid.com",
  "wss://nostr.filmweb.pl",
  "wss://relay.utxo.one",
  "wss://nostr.openhoofd.nl",
  "wss://nostr.strits.dk",
  "wss://rs2.abaiba.top",
  "wss://rs1.abaiba.top",
  "wss://relay.poster.place",
  "wss://anon.computer",
  "wss://freerelay.xyz",
  "wss://nostr.mining.sc",
  "wss://nostr.xmr.rocks",
  "wss://ithurtswhenip.ee",
  "wss://powrelay.xyz",
  "wss://relay.vanderwarker.family",
  "wss://nostr.ingwie.me",
  "wss://nostr.gleeze.com",
  "wss://relay.nostrify.io",
  "wss://relay2.nostrchat.io",
  "wss://relay1.nostrchat.io",
  "wss://relay.devstr.org",
  "wss://relay.nostr.hu",
  "wss://nostr.dakukitsune.ca",
  "wss://nostr.hifish.org",
  "wss://nostr2.sanhauf.com",
  "wss://nostrja-kari-nip50.heguro.com",
  "wss://nostrua.com",
  "wss://relay.nsecbunker.com",
  "wss://relay2.nostr.vet",
  "wss://relay.nostr.youlot.org",
  "wss://nostr.hekster.org",
  "wss://nostr.schorsch.fans",
  "wss://nostr.reelnetwork.eu",
  "wss://nostr.hexhex.online",
  "wss://relay.nostr.directory",
  "wss://relay.wavlake.com",
  "wss://relay.nostr.lighting",
  "wss://nostr.sagaciousd.com",
  "wss://nostr.fbxl.net",
  "wss://multiplextr.coracle.social",
  "wss://nostril.cam",
  "wss://nostr.btc-library.com",
  "wss://relay.getalby.com/v1",
  "wss://rss.nos.social",
  "wss://relay.nostrcn.com",
  "wss://nostr-01.yakihonne.com",
  "wss://nostr.fort-btc.club",
  "wss://relay.bitcoinpark.com",
  "wss://nostr01.counterclockwise.io",
  "wss://relap.orzv.workers.dev",
  "wss://christpill.nostr1.com",
  "wss://relay.verified-nostr.com",
  "wss://nostr.sathoarder.com",
  "wss://wbc.nostr1.com",
  "wss://nostr.heliodex.cf",
  "wss://relay.casualcrypto.date",
  "wss://relay.notmandatory.org",
  "wss://fiatjaf.com",
  "wss://relay.despera.space",
  "wss://bitstack.app",
  "wss://nostr-relay.psfoundation.info",
  "wss://purplerelay.com",
  "wss://relay.orangepill.ovh",
  "wss://nostr.rubberdoll.cc",
  "wss://relay.ingwie.me",
  "wss://soloco.nl",
  "wss://nostr.dlsouza.lol",
  "wss://relay.kamp.site",
  "wss://nostr.heavyrubberslave.com",
  "wss://relay.keychat.io",
  "wss://relay.froth.zone",
  "wss://nostr.2b9t.xyz",
  "wss://nostr.bitcoinist.org",
  "wss://nostr.cloud.vinney.xyz",
  "wss://relay.momostr.pink",
  "wss://nosdrive.app/relay",
  "wss://nostrrelay.win",
  "wss://nostr.8777.ch",
  "wss://unhostedwallet.com",
  "wss://21ideas.nostr1.com",
  "wss://nostr.stakey.net",
  "wss://nostr.hubmaker.io",
  "wss://nostr.sats.li",
  "wss://relay.guggero.org",
  "wss://relay.noswhere.com",
  "wss://unostr.site",
  "wss://pyramid.fiatjaf.com",
  "wss://frens.nostr1.com",
  "wss://creatr.nostr.wine",
  "wss://a.nos.lol",
  "wss://directory.yabu.me",
  "wss://hist.nostr.land",
  "wss://nostr.dodge.me.uk",
  "wss://privateisland.club",
  "wss://relay.weloveit.info",
  "wss://relay.magiccity.live",
  "wss://nostr.notribe.net",
  "wss://relay.westernbtc.com",
  "wss://groups.0xchat.com",
  "wss://theforest.nostr1.com",
  "wss://premis.one",
  "wss://problematic.network",
  "wss://us.purplerelay.com",
  "wss://nostr1.daedaluslabs.io",
  "wss://relay.noderunners.network",
  "wss://relay.azzamo.net",
  "wss://bevo.nostr1.com",
  "wss://freelay.sovbit.host",
  "wss://relay.sebdev.io",
  "wss://inbox.nostr.wine",
  "wss://ditto.puhcho.me/relay",
  "wss://nostr.t-rg.ws",
  "wss://multiplexer.huszonegy.world",
  "wss://nostr.huszonegy.world",
  "wss://nostr.jcloud.es",
  "wss://nostr.thurk.org",
  "wss://dev-relay.kube.b-n.space",
  "wss://relay.nos.social",
  "wss://ditto.slothy.win/relay",
  "wss://nostr.hashi.sbs",
  "wss://paid.relay.vanderwarker.family",
  "wss://nostr.javi.space",
  "wss://gleasonator.dev/relay",
  "wss://bucket.coracle.social",
  "wss://relay.nsec.app",
  "wss://hotrightnow.nostr1.com",
  "wss://relay.artx.market",
  "wss://nfrelay.app",
  "wss://relay.notoshi.win",
  "wss://relay.highlighter.com",
  "wss://relay.geyser.fund",
  "wss://relay.minibits.cash",
  "wss://nostr.petrkr.net/strfry",
  "wss://n.ok0.org",
  "wss://greensoul.space",
  "wss://nostr-02.yakihonne.com",
  "wss://nostr-03.dorafactory.org",
  "wss://vitor.nostr1.com",
  "wss://relay.lax1dude.net",
  "wss://relay.zhoushen929.com",
  "wss://relay.oke.minds.io/nostr/v1/ws",
  "wss://strfry.corebreach.com",
  "wss://relay.bitdevs.tw",
  "wss://nostr.btczh.tw",
  "wss://nostrich.adagio.tw",
  "wss://nostr.zoel.network",
  "wss://nostr.lifeonbtc.xyz",
  "wss://nostr.se7enz.com",
  "wss://thecitadel.nostr1.com",
  "wss://mleku.nostr1.com",
  "wss://nostr2.daedaluslabs.io",
  "wss://fiatjaf.nostr1.com",
  "wss://nostr.daedaluslabs.io",
  "wss://xmr.ithurtswhenip.ee",
  "wss://cellar.nostr.wine",
  "wss://nostr.stupleb.cc",
  "wss://rkgk.moe",
  "wss://nostr.self-determined.de",
  "wss://nostr.gerbils.online",
  "wss://jingle.carlos-cdb.top",
  "wss://carlos-cdb.top",
  "wss://bostr.online",
  "wss://jp.purplerelay.com",
  "wss://ir.purplerelay.com",
  "wss://me.purplerelay.com",
  "wss://nostr.0x7e.xyz",
  "wss://strfry.openhoofd.nl",
  "wss://nostr.reckless.dev",
  "wss://nostr.kolbers.de",
  "wss://relay.nostr.net",
  "wss://relay.fountain.fm",
  "wss://v1250.planz.io/nostr",
  "wss://relay.13room.space",
  "wss://relay.usefusion.ai",
  "wss://ae.purplerelay.com",
  "wss://njump.me",
  "wss://nostrasia.mom",
  "wss://au.purplerelay.com",
  "wss://in.purplerelay.com",
  "wss://nosflare.plebes.fans",
  "wss://nostr.at",
  "wss://nostr.satstralia.com",
  "wss://bostr.bitcointxoko.com",
  "wss://nostria.space",
  "wss://nostr.searx.is",
  "wss://test.nfrelay.app",
  "wss://relay.fanfares.io",
  "wss://relay.varke.eu",
  "wss://relay.nostr.jabber.ch",
  "wss://relay.nostpy.lol",
  "wss://relay.camelus.app",
  "wss://nostr.myshosholoza.co.za",
  "wss://nostr.carroarmato0.be",
  "wss://nostr.ussenterprise.xyz",
  "wss://nostr.dbtc.link",
  "wss://ftp.halifax.rwth-aachen.de/nostr",
  "wss://tw.purplerelay.com",
  "wss://eu.purplerelay.com",
  "wss://relay.benthecarman.com",
  "wss://fabian.nostr1.com",
  "wss://staging.yabu.me",
  "wss://nostr.dmgd.monster",
  "wss://testnet.plebnet.dev/nostrrelay/1",
  "wss://hivetalk.nostr1.com",
  "wss://relay.earthly.land",
  "wss://relay.lawallet.ar",
  "wss://relay.piazza.today",
  "wss://bostr.nokotaro.work",
  "wss://relay.pleb.to",
  "wss://orangepiller.org",
  "wss://nostr.lopp.social",
  "wss://ch.purplerelay.com",
  "wss://loli.church",
  "wss://adre.su",
  "wss://misskey.04.si",
  "wss://bostr.nokotaro.com",
  "wss://cache2.primal.net/v1",
  "wss://relay.sincensura.org",
  "wss://relay.moinsen.com",
  "wss://relay.freeplace.nl",
  "wss://nostr.animeomake.com",
  "wss://cache1.primal.net/v1",
  "wss://nostr.openordex.org",
  "wss://rly.bopln.com",
  "wss://relay.0v0.social",
  "wss://lnbits.aruku.kro.kr/nostrrelay/private",
  "wss://nostr.psychoet.nexus",
  "wss://us.nostr.land",
  "wss://srtrelay.c-stellar.net",
  "wss://lnbits.papersats.io/nostrclient/api/v1/relay",
  "wss://strfry.chatbett.de",
  "wss://nostr.plantroon.com",
  "wss://relay.corpum.com",
  "wss://relay.proxymana.net",
  "wss://relay.bostr.online",
  "wss://lunchbox.sandwich.farm",
  "wss://nr.rosano.ca",
  "wss://nostr.happytavern.co",
  "wss://novoa.nagoya",
  "wss://misskey.takehi.to",
  "wss://relay.satoshidnc.com",
  "wss://nostr.novacisko.cz",
  "wss://nsrelay.assilvestrar.club",
  "wss://nostr.atitlan.io",
  "wss://relay.livefreebtc.dev",
  "wss://nostr.tavux.tech",
  "wss://nostr.girino.org",
  "wss://misskey.art",
  "wss://merrcurrup.railway.app",
  "wss://nostr-dev.zbd.gg",
  "wss://misskey.systems",
  "wss://submarin.online",
  "wss://social.camph.net",
  "wss://relay.nostrich.cc",
  "wss://relay.roygbiv.guide",
  "wss://relay.lumina.rocks",
  "wss://profiles.nostr1.com",
  "wss://nostr-relay.philipcristiano.com",
  "wss://rebelbase.social/relay",
  "wss://support.nostr1.com",
  "wss://relay.dev.bdw.to",
  "wss://nostr.jaonoctus.dev",
  "wss://ca.purplerelay.com",
  "wss://nostr.bitcoinvn.io",
  "wss://auth.nostr1.com",
  "wss://custom.fiatjaf.com",
  "wss://nostr.dumango.com",
  "wss://hub.nostr-relay.app",
  "wss://chefstr.nostr1.com",
  "wss://nostr.babyshark.win",
  "wss://echo.websocket.org",
  "wss://nostr.kosmos.org",
  "wss://polnostr.xyz",
  "wss://relay.refinery.coracle.tools",
  "wss://user.kindpag.es",
  "wss://nostr.hashbang.nl",
  "wss://czas.live",
  "wss://chorus.pjv.me",
  "wss://relay.agorist.space",
  "wss://jmoose.rocks",
  "wss://nostr.itsnebula.net",
  "wss://bostr.cx.ms",
  "wss://relay.nostrhub.fr",
  "wss://kadargo.zw.is",
  "wss://groups.fiatjaf.com",
  "wss://hodlbod.coracle.tools",
  "wss://hk.purplerelay.com",
  "wss://lnbits.satoshibox.io/nostrclient/api/v1/relay",
  "wss://relay.cosmicbolt.net",
  "wss://nostr.drafted.pro",
  "wss://relay.nostrosity.com",
  "wss://nostr.a2x.pub",
  "wss://bostr.lightningspore.com",
  "wss://nostr.intrepid18.com",
  "wss://de.purplerelay.com",
  "wss://obiurgator.thewhall.com",
  "wss://nostr.madco.me",
  "wss://slime.church/relay",
  "wss://relay.braydon.com",
  "wss://nostr-relay.algotech.io",
  "wss://relay.unknown.cloud",
  "wss://relay.gems.xyz",
  "wss://notes.miguelalmodo.com",
  "wss://onlynotes.lol",
  "wss://relay.tagayasu.xyz",
  "wss://relay2.nostrasia.net",
  "wss://relay.zone667.com",
  "wss://relay.hakua.xyz",
  "wss://nostr-relay.sn-media.com",
  "wss://relay.mostro.network",
  "wss://nostr.polyserv.xyz",
  "wss://n3r.xyz",
  "wss://relay5.bitransfer.org",
  "wss://brisceaux.com",
  "wss://nostr.faust.duckdns.org",
  "wss://satellite.hzrd149.com",
  "wss://gnost.faust.duckdns.org",
  "wss://relay.jerseyplebs.com",
  "wss://nostr.cxplay.org",
  "wss://nostr.polonkai.eu",
  "wss://relay.rootservers.eu",
  "wss://libretechsystems.nostr1.com",
  "wss://nostr.15b.blue",
  "wss://nostr.kloudcover.com",
  "wss://nostr.pailakapo.com",
  "wss://relay.alex71btc.com",
  "wss://cfrelay.puhcho.workers.dev",
  "wss://kiwibuilders.nostr21.net",
  "wss://nostr3.daedaluslabs.io",
  "wss://relay1.xfire.to:",
  "wss://nostr.brackrat.com",
  "wss://relay.satlantis.io",
  "wss://relay.test.nquiz.io",
  "wss://relay.illuminodes.com",
  "wss://relay.arrakis.lat",
  "wss://cfrelay.haorendashu.workers.dev",
  "wss://core.btcmap.org/nostrrelay/relay",
  "wss://nostr.manasiwibi.com",
  "wss://junxingwang.org",
  "wss://relay2.angor.io",
  "wss://relaypag.es",
  "wss://nostr.skitso.business",
  "wss://history.nostr.watch",
  "wss://relay.oh-happy-day.xyz",
  "wss://invillage-outvillage.com",
  "wss://nostr-relay.cbrx.io",
  "wss://tigs.nostr1.com",
  "wss://misskey.design",
  "wss://relay.nostrainsley.coracle.tools",
  "wss://relay.cxplay.org",
  "wss://relay.angor.io",
  "wss://nostr.tbai.me:592",
  "wss://strfry.iris.to",
  "wss://orangesync.tech",
  "wss://nostr.chaima.info",
  "wss://relay.minibolt.info",
  "wss://jingle.nostrver.se",
  "wss://kr.purplerelay.com",
  "wss://relay-proxy.freefrom.club/v1/ws",
  "wss://relay.tapestry.ninja",
  "wss://fl.purplerelay.com",
  "wss://relay.chontit.win",
  "wss://nostr.bilthon.dev",
  "wss://dtonon.nostr1.com",
  "wss://relay.gasteazi.net",
  "wss://us.nostr.wine",
  "wss://frjosh.nostr1.com",
  "wss://relay.staging.geyser.fund",
  "wss://relay.mattybs.lol",
  "wss://sushi.ski",
  "wss://relay.unsupervised.online",
  "wss://prl.plus",
  "wss://news.nos.social",
  "wss://airchat.nostr1.com",
  "wss://nortis.nostr1.com",
  "wss://adeptus.cwharton.com",
  "wss://node.coincreek.com/nostrclient/api/v1/relay",
  "wss://nostr2.girino.org",
  "wss://relay.s-w.art",
  "wss://nerostr.girino.org",
  "wss://uk.purplerelay.com",
  "wss://bostr.erechorse.com",
  "wss://eostagram.com",
  "wss://relay.coinos.io",
  "wss://sendit.nosflare.com",
  "wss://relay.nostraddress.com",
  "wss://nostrelites.org",
  "wss://wot.nostr.party",
  "wss://wot.utxo.one",
  "wss://haven.cyberhornet.net",
  "wss://relay.customkeys.de",
  "wss://algo.utxo.one",
  "wss://relay.groups.nip29.com",
  "wss://relay29.notoshi.win",
  "wss://nostr.2h2o.io",
  "wss://relay.nostriot.com",
  "wss://strfry.orange-crush.com",
  "wss://relay.lem0n.cc",
  "wss://rocky.nostr1.com",
  "wss://misskey.social",
  "wss://frens.utxo.one",
  "wss://wot.sovbit.host",
  "wss://relay.sovereign.app",
  "wss://zap.watch",
  "wss://zorrelay.libretechsystems.xyz",
  "wss://sorrelay.libretechsystems.xyz",
  "wss://mailbox.mw.leastauthority.com/v1",
  "wss://frysian.nostrich.casa",
  "wss://memrelay.girino.org",
  "wss://relay.lnfi.network",
  "wss://wot.girino.org",
  "wss://labour.fiatjaf.com",
  "wss://wot.codingarena.top",
  "wss://relay.nostrdice.com",
  "wss://nostr.azzamo.net",
  "wss://wot.azzamo.net",
  "wss://wot.nostr.sats4.life",
  "wss://wot.nostr.net",
  "wss://api.freefrom.space/v1/ws",
  "wss://wheat.happytavern.co",
  "wss://chorus.bonsai.com",
  "wss://strfry.bonsai.com",
  "wss://wot.sebastix.social",
  "wss://haven.nostrver.se",
  "wss://devs.nostr1.com",
  "wss://inner.sebastix.social",
  "wss://haven.accioly.social",
  "wss://relay.notestack.com",
  "wss://relay.sigit.io",
  "wss://satsage.xyz",
  "wss://nostr.noderunners.network",
  "wss://chronicle.puhcho.me",
  "wss://haven.puhcho.me",
  "wss://haven.calva.dev/inbox",
  "wss://dergigi.nostr1.com",
  "wss://wons.calva.dev",
  "wss://thebarn.nostr1.com",
  "wss://nostr.grooveix.com",
  "wss://relay.rodbishop.nz/inbox",
  "wss://travis-shears-nostr-relay-v2.fly.dev",
  "wss://nostr.sprovoost.nl",
  "wss://nostr.x0f.org",
  "wss://bostr.syobon.net",
  "wss://art.nostrfreaks.com",
  "wss://cobrafuma.com/relay",
  "wss://alru07.nostr1.com",
  "wss://relay.nostrfreedom.net/outbox",
  "wss://aplaceinthesun.nostr1.com",
  "wss://relay.flirtingwithbitcoin.com",
  "wss://elites.nostrati.org",
  "wss://plebone.nostr1.com",
  "wss://cfrelay.snowcait.workers.dev",
  "wss://relay.nostrpunk.com",
  "wss://thewritingdesk.nostr1.com",
  "wss://relay.botev.sv",
  "wss://relay.degmods.com",
  "wss://seth.nostr1.com",
  "wss://untreu.me",
  "wss://agentorange.nostr1.com",
  "wss://reimagine.nostr1.com",
  "wss://nostr.takasaki.dev",
  "wss://nostr.coincrowd.fund",
  "wss://bnc.netsec.vip",
  "wss://nostr.inaridiy.com",
  "wss://nostr.community.ath.cx",
  "wss://relay.geektank.ai",
  "wss://nostr.cltrrd.us",
  "wss://relay.xeble.me",
  "wss://no.netsec.vip",
  "wss://strfry.shock.network",
  "wss://relay.8333.space",
  "wss://relay02.lnfi.network",
  "wss://filter.weme.wtf",
  "wss://nostr.cypherpunk.today",
  "wss://relay.nostrfreaks.com",
  "wss://relay.shuymn.me",
  "wss://haven.eternal.gdn",
  "wss://cyberspace.nostr1.com",
  "wss://nostr-rs-relay.dev.fedibtc.com",
  "wss://relay.das.casa",
  "wss://ursin.nostr1.com",
  "wss://monitorlizard.nostr1.com",
  "wss://wot.shaving.kiwi",
  "wss://relay.cyphernomad.com",
  "wss://nostr.extrabits.io",
  "wss://relay.jellyfish.land",
  "wss://wot.tealeaf.dev",
  "wss://chorus.tealeaf.dev",
  "wss://haven.tealeaf.dev/inbox",
  "wss://h.codingarena.top/inbox",
  "wss://relay.goodmorningbitcoin.com",
  "wss://wot.zacoos.com",
  "wss://relay.shawnyeager.com/chat",
  "wss://proxy0.siamstr.com",
  "wss://articles.layer3.news",
  "wss://relay.hs.vc",
  "wss://chronicle.dtonon.com",
  "wss://wot.dtonon.com",
  "wss://relay.stens.dev",
  "wss://social.protest.net/relay",
  "wss://relay.patrickulrich.com/inbox",
  "wss://nostr.dfaria.eu",
  "wss://relay.dev.ntech.it",
  "wss://chronicle.dev.ntech.it",
  "wss://nostr.bitpunk.fm",
  "wss://lnvoltz.com/nostrrelay/n49jzjytb",
  "wss://ghost.dolu.dev",
  "wss://thebarn.nostrfreaks.com",
  "wss://niel.nostr1.com",
  "wss://adoringcardinal1.lnbits.com/nostrrelay/test-relay",
  "wss://nostr.karmickoala.info",
  "wss://nostr.thebiglake.org",
  "wss://wot.relay.vanderwarker.family",
  "wss://haven.girino.org",
  "wss://nostr-news.nostr1.com",
  "wss://thewildhustle.nostr1.com",
  "wss://wot.sandwich.farm",
  "wss://nostr.sats.coffee",
  "wss://dikaios1517.nostr1.com",
  "wss://nostr4.daedaluslabs.io",
  "wss://nostr2.azzamo.net",
  "wss://relay.rushmi0.win",
  "wss://nostr.mikoshi.de",
  "wss://relay.nuts.cash",
  "wss://nostr.pipegrep.se:2121",
  "wss://brightlights.nostr1.com",
  "wss://darknights.nostr1.com",
  "wss://relay.chrisatmachine.com",
  "wss://nostr.agentcampfire.com",
  "wss://nostr.me/relay",
  "wss://relay.nostr.watch",
  "wss://dwebcamp.nos.social",
  "wss://nostr.1312.media",
  "wss://nostr.phauna.org",
  "wss://nostr.gluestick.io",
  "wss://henhouse.social/relay",
  "wss://nostr.neilalexander.dev",
  "wss://nip13.girino.org",
  "wss://osrs.nostr-labs.xyz",
  "wss://tijl.xyz",
  "wss://relay.kookykeys.com",
  "wss://relay.rengel.org",
  "wss://nostr.moynihan.live",
  "wss://relay.stewlab.win",
  "wss://relay.badgr.digital",
  "wss://relay.crbl.io",
  "wss://rl.baud.one",
  "wss://schnorr.me",
  "wss://relay.axeldolce.xyz",
  "wss://nip85.nostr.band",
  "wss://relay.nostr-labs.xyz",
  "wss://inbox.nostr-labs.xyz",
  "wss://antisocial.nostr1.com",
  "wss://relay.isphere.lol",
  "wss://relay.btcforplebs.com",
  "wss://relay.i9.eti.br",
  "wss://nostr.synalysis.com",
  "wss://cl4.tnix.dev",
  "wss://nostr.dl3.dedyn.io",
  "wss://immo.jellyfish.land",
  "wss://nostr.belgianbitcoinembassy.org/relay",
  "wss://hayloo.nostr1.com",
  "wss://nostr.schneimi.de",
  "wss://wostr.hexhex.online",
  "wss://relay.hunstr.mywire.org",
  "wss://pareto.nostr1.com",
  "wss://nostr.pareto.space",
  "wss://relay.utih.net",
  "wss://relay.lifpay.me",
  "wss://david.nostr1.com",
  "wss://haven.ciori.net",
  "wss://bonifatius.nostr1.com",
  "wss://pay.thefockinfury.wtf/nostrrelay/1",
  "wss://relay.xplbzx.uk",
  "wss://relay.lightwork.space",
  "wss://nostr.tac.lol",
  "wss://btcpay2.nisaba.solutions/nostr",
  "wss://nostream-stg.ordlify.com",
  "wss://dev-relay.lnfi.network",
  "wss://relay.netstr.io",
  "wss://nostr.allgemeinheit.info",
  "wss://sebastix.social/relay",
  "wss://freespeech.social/relay",
  "wss://straylight.cafe/relay",
  "wss://relay.devvul.com",
  "wss://relay.bitcoinveneto.org",
  "wss://relay.shop21.dk",
  "wss://nostr.mtrj.cz",
  "wss://relay.gnostr.cloud",
  "wss://clnbits.diynodes.com/nostrclient/api/v1/relay",
  "wss://devapi.freefrom.space/v1/ws",
  "wss://aaa-api.freefrom.space/v1/ws",
  "wss://ldl.relay.maleniti.com",
  "wss://fido-news.z7.ai",
  "wss://stratum.libretechsystems.xyz",
  "wss://nostr-relay.apps.den.ratwater.xyz",
  "wss://nostr.cottongin.xyz",
  "wss://wot.eminence.gdn",
  "wss://hi.myvoiceourstory.org",
  "wss://nostr.red5d.dev",
  "wss://relay-testnet.k8s.layer3.news",
  "wss://nostr.pistaum.com",
  "wss://relay-nwc.rizful.com/v1",
  "wss://nostrum.satoshinakamoto.win",
  "wss://eupo43gj24.execute-api.us-east-1.amazonaws.com/test",
  "wss://relay.allsocial.me",
  "wss://backup.keychat.io",
  "wss://relay.newatlantis.top",
  "wss://relay.openbalance.app",
  "wss://nostr.jonmartins.com",
  "wss://nostr-relay.kloudcover.com",
  "wss://social.proxymana.net",
  "wss://nostr-pr02.redscrypt.org",
  "wss://nostr-pr03.redscrypt.org",
  "wss://nostrelay.memory-art.xyz",
  "wss://promenade.fiatjaf.com",
  "wss://inbox.azzamo.net",
  "wss://mandidraws.nostrnaut.love",
  "wss://kirpy.nostrnaut.love",
  "wss://premium.primal.net",
  "wss://nostr.timegate.co",
  "wss://team-relay.pareto.space",
  "wss://relay.dannymorabito.com/inbox",
  "wss://nostr.lojong.info",
  "wss://nostr.nwe.li",
  "wss://relay.transtoad.com",
  "wss://cfrelay.royalgarter.workers.dev",
  "wss://nostr-rs-relay-ishosta.phamthanh.me",
  "wss://nostr.rblb.it:7777",
  "wss://nostr.basedpotato.org",
  "wss://fiatrevelation.nostr1.com",
  "wss://sources.nostr1.com",
  "wss://nostr-pr04.redscrypt.org",
  "wss://relay.nostronautti.fi",
  "wss://moonboi.nostrfreaks.com",
  "wss://mats-techno-gnome-ca.trycloudflare.com",
  "wss://nostr.iz5wga.radio",
  "wss://nostr.d3id.xyz/relay",
  "wss://nostr.holbrook.no",
  "wss://logen.btcforplebs.com",
  "wss://relay.nostrtalk.org",
  "wss://community.proxymana.net",
  "wss://misskey.gothloli.club",
  "wss://ditto.openbalance.app/relay",
  "wss://mleku.realy.lol",
  "wss://relay.maiqr.app",
  "wss://relay.tv-base.com",
  "wss://relay.rkus.se",
  "wss://relay.snotr.nl:49999",
  "wss://relay.nostrdam.com",
  "wss://magic.nostr1.com",
  "wss://null.spdns.eu",
  "wss://nostr.itdestro.cc",
  "wss://nostrrelay.taylorperron.com",
  "wss://nostr.tegila.com.br",
  "wss://stage.mosavi.xyz/v1/ws",
  "wss://nostream.oviato.com",
  "wss://eclipse.pub/relay",
  "wss://relay.asthroughfire.com",
  "wss://relay.nostrarabia.com",
  "wss://relay.devs.tools",
  "wss://nostr.skmtkytr.com",
  "wss://news.utxo.one",
  "wss://relay.stream.labs.h3.se"
];

//let hub = "wss://bridge.duozhutuan.com/";
let hub = "";
relays = relays.map(relay => hub + relay );


async function test_speed(url){
    try {
        const time = await testRelayConnectionSpeed(url);
        console.log(`Connection time: ${time.toFixed(2)} ms`);
    } catch (error) {
        console.error("Failed to connect:");
    }
}

for (let relay of relays) {
    await test_speed(relay)
}
