import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;

/*
이 밖에 Layout 컴포넌트를 만드는 방법
- Method 1 - Layout as a Higher Order Component
- Method 2 - Page content as a prop
*/