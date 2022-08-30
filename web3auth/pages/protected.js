import { getSession } from 'next-auth/react';
import Moralis from 'moralis';
import { useRouter } from 'next/router';

function Protected({ message, nftList, metaData }) {
    const {push} = useRouter();
    
    const downlink = JSON.stringify(metaData).split(',')[1].split('"')[3]
    return(
        <div>
            <button onClick={() => push('/user')}>Profile</button>
            <h3>Protected content</h3>
            <p>{message}</p>
            {/* <p>{JSON.stringify(test).split(',')[1].split('"')[3]}</p> */}
            <a href={downlink}>Download Link</a>
            <br></br>
            <br></br>
            {nftList.map((e) => {
                return (<img src={JSON.parse(e.metadata).image} alt="nftImg" height={100}/>)
            })}
            <pre>{JSON.stringify(nftList, null, 2)}</pre>
            {/* <pre>{nftList[0].metadata}</pre> */}
        </div>
    )
}

export async function getServerSideProps(context) {
    
    const session = await getSession(context);
    // 세션 없을 경우
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const nftList = await Moralis.EvmApi.account.getNFTsForContract({
        address: session.user.address,
        // opensea-testnet 의 nft중 하나. polygon_nft_test 계정의 nft
        tokenAddress: '0x79daf157C85772d6975b88cdCE4606ae33FBace6',
        // 80001은 뭄바이라서 입력. 기본은 1이고 이건 이더리움
        chain: 80001 
    });

    return {
        props: {
            message:
                // if user has at least one NFT he will get protected content
                nftList.raw.total > 0 ? 'Nice! You have our NFT' : "Sorry, you don't have our NFT",
            nftList: nftList.raw.result,
            metaData: nftList.raw.result[0].metadata
        },
    };

}

export default Protected;
