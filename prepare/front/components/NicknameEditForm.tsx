import { Form, Input } from "antd";
import { useMemo } from "react";

const NickNameEditForm = () => {
    const style = useMemo(() => ({ marginBottom: "28px", border: "1px solid #d9d9d9", padding: "20px" }), []);
    return (
        <Form style={style}>
            <Input.Search addonBefore="nickname" enterButton="edit" />
        </Form>
    )
};

export default NickNameEditForm;
