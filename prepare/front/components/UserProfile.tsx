import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {logoutAction} from "../redux/actions/userAction";


const UserProfile = () => {
    const disPatch = useDispatch();

    const onLogout = useCallback(() => {
        disPatch(logoutAction({}))
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">tweet<br />0</div>,
                <div key="followings">tweet<br />0</div>,
                <div key="followings">tweet<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="Jason"
            />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    );
};

export default UserProfile