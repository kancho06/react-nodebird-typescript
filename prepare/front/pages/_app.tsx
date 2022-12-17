import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head' // next 에서 헤드를 만질 수 있는 임포트를 기본 제공한다.
import wrapper from "../store/configureStore";
import { AppContext } from 'next/app';

const NodeBird = ({ Component }: AppContext) => {
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


NodeBird.protoType = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);