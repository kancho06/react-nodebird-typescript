import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../reducers";
import { createPostAction, PostActionType } from "../reducers/post";

const FormWrapper = styled(Form)`
    margin: 10px 0 20px;
`;

const ButtonWrapper = styled(Button)`
    float: right;
`;

const ImgWrapper = styled.img`
    width: 280px;
`;

const ImageContainer = styled.div`
    display: inline-block;
`;

export const PostForm = () => {
    const { imagePaths } = useSelector((state: InitialState) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef<HTMLInputElement>(null);
    const [text, setText] = useState("");

    const onChangeText = useCallback((v: string) => {
        setText(v);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(createPostAction(PostActionType.ADD_POST));
        setText("");
    }, []);
    const onClickImageUpload = useCallback(() => {
        imageInput.current && imageInput.current.click();
    }, [imageInput.current]);

    return (
        <FormWrapper encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={(ev) => {
                    onChangeText(ev.target.value);
                }}
                maxLength={140}
                placeholder="What fun things have you had?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>Image Upload</Button>
                <ButtonWrapper type="primary" htmlType="submit">
                    Tweet
                </ButtonWrapper>
            </div>
            <div>
                {imagePaths.map((v: any) => (
                    <ImageContainer key={v}>
                        <ImgWrapper src={v} alt={v} />
                        <div>
                            <Button>Delete</Button>
                        </div>
                    </ImageContainer>
                ))}
            </div>
        </FormWrapper>
    );
};
