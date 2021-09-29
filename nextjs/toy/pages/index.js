import Link from 'next/link';

const Index = () => (
    <div>
        {/* A태그를 사용할 경우 페이지를 새로 고치기 때문에 CSR에는 어울리지 않을 수 있음
            pages안의 파일들은 소문자로 시작해야 함 -> 왜? 파일 이름이 곧 url이 되는데, 대소문자를 구별하는 운영체제에서 오류를 방지하기 위함 */}
        <Link href="/about">
            <a title="About Page">About Page</a>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;