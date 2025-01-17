
import Moralis from 'moralis';
import { EvmChain } from '../node_modules/@moralisweb3/evm-utils';

const address = '0x60255c6De2cf768D5cE89f54eDb42D4E374a3177';

const chain = EvmChain.MUMBAI;

export default function test() {
    Moralis.start({
        apiKey: 'wuTRXSGYCbL42JbmFQH7SKkKCg6OE6uDuWJS3moULHsKK912VMGJanJvEE7JRFvf',
    });
    
    const response = Moralis.EvmApi.account.getNFTs({
        address,
        chain,
    });

    // console.log("response : ", response);

    response
        .then((res) => {
            console.log("result : ", res._data.result);
        })
        .catch((error) => {
            console.error(error);
          });

    return(
        <div>test</div>
    )
}


// function test() {
//     Moralis.start({
//         apiKey: 'wuTRXSGYCbL42JbmFQH7SKkKCg6OE6uDuWJS3moULHsKK912VMGJanJvEE7JRFvf',
//     });
    
//     response = Moralis.EvmApi.account.getNFTs({
//         address,
//         chain,
//     });
//     // response.then((res) => {console.log("what response is : ", res._data.result)})

//     return {
//         props: {
//             nfts: response.then((res) => {console.log("what response is : ", res._data.result)})
//         }
//     }
// }

// test()