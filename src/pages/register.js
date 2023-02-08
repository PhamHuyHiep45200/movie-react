import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Row } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Register() {
  return (
    <div className="formRegister">
      <div>Đăng Ký tài khoản</div>
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tài khoản"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password1"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Nhập lại mật khẩu"
              name="password2"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập lại mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
