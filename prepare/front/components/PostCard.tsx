import { Avatar, Button, Card, Popover } from "antd";
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from "@ant-design/icons";
import { MainPost } from "../reducers/post";
import { useSelector } from "react-redux";
import { InitialState } from "../reducers";
import { PostImages } from "./PostImages";
import { useCallback, useState } from "react";

type Props = {
    mainPost: MainPost;
};

export const PostCard = ({ mainPost }: Props) => {
    const id = useSelector((state: InitialState) => state.user.me?.id);
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    return (
        <div style={{ marginBottom: "20px" }}>
            <Card
                cover={mainPost.Images[0] && <PostImages images={mainPost.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover
                        key="more"
                        content={
                            <Button.Group>
                                {id && mainPost.User.id === id ? (
                                    <>
                                        <Button>Edit</Button>
                                        <Button type="primary">Delete</Button>
                                    </>
                                ) : (
                                    <Button>Report</Button>
                                )}
                            </Button.Group>
                        }
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta avatar={<Avatar>{mainPost.User.nickname[0]}</Avatar>} title={mainPost.User.nickname} description={mainPost.content} />
            </Card>
            {commentFormOpened && <div>comment...</div>}
            {/* <CommentForm /> */}
            {/* <Comments /> */}
        </div>
    );
};
