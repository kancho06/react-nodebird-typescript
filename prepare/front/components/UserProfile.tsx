import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
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