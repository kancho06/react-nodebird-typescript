import * as PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu} from 'antd';

const AppLayout = ({children}) => {
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
                    <Link href="/signup"><a>signup</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};

AppLayout.propsTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;