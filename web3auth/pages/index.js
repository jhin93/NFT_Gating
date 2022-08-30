
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

const address = '0x60255c6De2cf768D5cE89f54eDb42D4E374a3177';
const chain = EvmChain.MUMBAI;
let response;


function HomePage() {
    Moralis.start({
        apiKey: 'wuTRXSGYCbL42JbmFQH7SKkKCg6OE6uDuWJS3moULHsKK912VMGJanJvEE7JRFvf',
    });
    
    response = Moralis.EvmApi.account.getNFTs({
        address,
        chain,
    });
    response.then((res) => {
        console.log("nfts : ", res._data.result)
    })

    return (
        <div>
            Welcome to Next.js! Go to http://localhost:3000/signin
        </div>
    )
}



export default HomePage;
