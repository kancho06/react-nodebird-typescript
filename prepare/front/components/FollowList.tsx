import { Button, Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const FollowList = ({ header, data }: any) => {
    return (
        <List
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3 }} // 리스트인데 격자모양으로 (반응형)
            size="small"
            header={<div>{header}</div>}
            loadMore={
                <div style={{ textAlign: "center", margin: "10px 0" }}>
                    <Button>more</Button>
                </div>
            }
            bordered
            dataSource={data}
            renderItem={({ nickname }) => (
                <List.Item style={{ marginTop: 20 }}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={nickname} />
                    </Card>
                </List.Item>
            )}
        />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;
