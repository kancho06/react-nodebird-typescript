import { Button, Form, Input } from "antd";
import { useCallback } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { createUserAction, UserActionType } from "../reducers/user";

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");

    const onSubmitForm = useCallback(() => {
        console.info(id, password);
        dispatch(createUserAction(UserActionType.LOG_IN, { id, password }));
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">PASSWORD</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>
                    Login
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>Signup</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;
