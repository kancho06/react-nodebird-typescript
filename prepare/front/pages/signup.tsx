import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Checkbox, Form, Input, Button } from "antd";
import styled from "styled-components";
import { useCallback, useState } from "react";
import useInput from "../hooks/useInput";

const ErrorMassage = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback(
        (e: any) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e: any) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    // submit 할때도 한번더 체크한다
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.info(id, nickname, password);
    }, [password, passwordCheck, term]);
    return (
        <>
            <AppLayout>
                <Head>
                    <title>sign up | NodeBird</title>
                </Head>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">ID</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nickname">Nickname</label>
                        <br />
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor="user-password">Password</label>
                        <br />
                        <Input name="user-password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">Password Check</label>
                        <br />
                        <Input name="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <ErrorMassage>Passwords do not match</ErrorMassage>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                            I agree to the terms
                        </Checkbox>
                        {termError && <ErrorMassage>please agree to term</ErrorMassage>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">
                            sign up
                        </Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;
