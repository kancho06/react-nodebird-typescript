import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head' // next 에서 헤드를 만질 수 있는 임포트를 기본 제공한다.

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>

    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;