import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';

(async () => {
    let mnemonic = "input mnemonic"
    let polkadotlWSS = "input polkadot wss"
    let mintNumber = 100
    let remarkData = '{"p":"dot-20","op":"mint","tick":"DOTA"}'
    let subscan = 'https://polkadot.subscan.io/extrinsic/'
    const polkadotProvider = new WsProvider(polkadotlWSS);
    const polkadotApi = await ApiPromise.create({provider: polkadotProvider});
    let joey = (new Keyring({type: 'sr25519'})).addFromMnemonic(mnemonic)
    let joeyAddress = joey.address

    let countNumber = 0

    async function creatMint() {
        let resolve
        let reject
        let promise = new Promise((res, rej) => {
            resolve = res
            reject = rej
        });

        let tx1 = polkadotApi.tx.balances.transferKeepAlive(joeyAddress, 0)
        let tx2 = polkadotApi.tx.system.remark(remarkData)
        await polkadotApi.tx.utility.batchAll([tx1, tx2]).signAndSend(joey, ({ status })=>{
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

    for (let i = 0; i < mintNumber; i++) {
        await creatMint()
    }
})()
