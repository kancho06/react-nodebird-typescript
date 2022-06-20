import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {logoutAction} from "../reducers";

const UserProfile = () => {
    const disPatch = useDispatch();

    const onLogOut = useCallback(() => {
        disPatch(logoutAction())
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
            <Button onClick={onLogOut}>Logout</Button>
        </Card>
    );
};

export default UserProfile