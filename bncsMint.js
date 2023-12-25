import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';

(async () => {
    let mnemonic = "your mnemonic"
    let polkadotWSS = 'wss://bifrost-polkadot-rpc.dwellir.com'
    let mintNumer = 100
    let remarkData = '{"p":"bncs-20","op":"mint","tick":"BNCS"}'
    let subscan = 'https://bifrost.subscan.io/'
    const polkadotProvider = new WsProvider(polkadotWSS);
    const polkadotApi = await ApiPromise.create({provider: polkadotProvider});
    let joey = (new Keyring({type: 'sr25519'})).addFromMnemonic(mnemonic)

    let countNumber = 0

    async function creatMint() {
        let resolve
        let reject
        let promise = new Promise((res, rej) => {
            resolve = res
            reject = rej
        });

        await polkadotApi.tx.system.remarkWithEvent(remarkData).signAndSend(joey, ({ status })=>{
            if (status.isFinalized) {
                console.log(`success，subscan link: ${subscan}${status.asFinalized}`);
                countNumber = 1 + countNumber
                console.log("success count:" + countNumber)
                resolve();
            }
        }).catch(info => {
            console.log(info)
            reject();
        });
        return promise;
    }

    for (let i = 0; i < mintNumer; i++) {
        await creatMint()
    }
})()
