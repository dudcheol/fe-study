import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import Link from 'next/link';

const Index = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map((show) => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map((entry) => entry.show),
    };
};

export default Index;

/*
여기서 주목해야 할 점은 [ 데이터를 서버에서 가지고 오는지 클라이언트에서 가지고 오는지 ]
새로 고침을 했을 때 getInitialProps 안에 있는 console.log의 내용이 어디에 찍히는지 보면 확인을 할 수 있음
- 새로 고침할 경우 : 서버(vscode terminal)에 로그 찍힘
- 브라우저 내부에서 페이지 이동 : 브라우저 개발자 콘솔에 로그 찍힘 => "<Link /> 컴포넌트 덕분에~!"

서버에서 이미 데이터를 가지고 왔기 때문에 클라이언트에서는 다시 데이터를 가지고 올 필요 없이 서버에서 가져온 데이터를 기반으로 페이지를 렌더링함.
초기 url로 접속 시, SSR이 되는데, "../p/975" 와 같은 형태를 url 입력해서 들어가면 초기 진입이기 때문에 서버에 로그가 찍히게 됨.
*/