
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';

const address = process.env.ACCOUNT;
const chain = EvmChain.MUMBAI;
let testnft;


function HomePage({nftData}) {
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
    })

    return {
        props: {
            nftData: JSON.parse(JSON.stringify(nftData))
        }
    }
}



export default HomePage;
