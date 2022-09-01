
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

const address = '0x60255c6De2cf768D5cE89f54eDb42D4E374a3177';
const chain = EvmChain.MUMBAI;
let response;


function HomePage(nftData) {
    // Moralis.start({
    //     apiKey: 'wuTRXSGYCbL42JbmFQH7SKkKCg6OE6uDuWJS3moULHsKK912VMGJanJvEE7JRFvf',
    // });
    
    // response = Moralis.EvmApi.account.getNFTs({
    //     address,
    //     chain,
    // });
    // response.then((res) => {
    //     console.log("nfts : ", res._data.result)
    // })
    
    console.log("nftData : ", nftData)

    return (
        <div>
            Welcome to Next.js! 
            <br></br>
            <a href='http://localhost:3000/signin'>Go to SignIn</a>
        </div>
    )
}

export async function getServerSideProps() {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const nftData = await Moralis.EvmApi.account.getNFTs({
        address,
        chain 
    }).then((res) => {res._data});



    return {
        props: {
            nftData: nftData
        }
    }
}



export default HomePage;
