import * as PropTypes from 'prop-types';
import Link from 'next/link';
import {Input, Menu, Row, Col} from 'antd';
import {useState} from "react"; // antd 에선 반응형 그리드를 지원한다
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>nodeBird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>signup</a></Link>
                </Menu.Item>
            </Menu>
            {/**/}
            <Row gutter={8}> {/* 컬럼사이에 간격을 주는것 (패딩 4px씩 들어감)*/}
                <Col xs={24} md={6}>  {/* n/24 즉, 모바일일때 24(full) 화면을 차지하고 데스크탑으로 갔을때는 6(25%) 화면을 차지한다. */}
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}> {/* 모바일에서 세로로 배치되었던것이 데스크탑에서는 세로로 배치가 된다. 같이 배치하고 싶으면 13 ,11 이런식으로 합이 24가 되게 해야한다. */}
                    {children}
                </Col>
                <Col xs={24} md={6}> {/* 24가 넘어가면 아래로 컴포넌트가 밀린다. */}
                    <a href="https://available-parent-09c.notion.site/NodeBird-SNS-next-js-node-js-jo-hyun-young-fb601179b61d47d4bc60e2a04ef988d6" target="_blank" rel="noreferrer noopener">Made by Jason</a>
                    {/* _blank (새창에서 띄우기)를 사용할때는 rel="noreferrer noopener" 를 사용해주어야 보안위협이 사라진다. */}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propsTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;