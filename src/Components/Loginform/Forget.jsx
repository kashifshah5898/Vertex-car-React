import React from "react";
import "./Login.css";
// import React from 'react';
import { Button, Form, Input } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const Forget = () => {
  return (
    <div className="forget-wrap">
      <div className="lable-forget">Reset Password</div>

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <div className="forget-input">
          <Form.Item
            name={["user", "email"]}
            label="E-Mail Address"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input placeholder="E-Mail Address" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <div className="forget-submit">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Forget;
