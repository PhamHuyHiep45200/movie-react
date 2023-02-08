import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Row } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  return (
    <div className="form">
      <div>Đăng nhập tài khoản</div>
      <Row>
        <Col span={24}>
          <Form
            name="basic"
            style={{
              padding: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tài khoản"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tài khoản ",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu ",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Ghi nhớ</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit">
                Xác nhận
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
