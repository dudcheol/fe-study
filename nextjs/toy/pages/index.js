import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = (props) => (
    <li>
        {/* as는 브라우저 URL에 보여지는 부분. 'as' props가 없으면 동적 경로가 작동하지 않으니 주의! */}
        <Link href="/p/[id]" as={`/p/${props.id}`}> 
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    );
}
