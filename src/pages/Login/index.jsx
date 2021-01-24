import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";
import Logo from "./images/logo.svg";

const rules = {
	username: [
		{
			required: true,
			message: "Please input your Username!",
		},
	],
	password: [
		{
			required: true,
			message: "Please input your Password!",
		},
	],
};

/**
 * 登录路由组件
 */
export default class Login extends Component {
	onFinish = (e) => {
		console.log(e);
	};

	render() {
		return (
			<div className="login">
				<header className="login-header">
					<img src={Logo} alt="" />
					<h1>React后台练习</h1>
				</header>
				<section className="login-section">
					<div className="section-content">
						<h2>用户登录</h2>
						<Form
							name="normal_login"
							className="login-form"
							onFinish={this.onFinish}
						>
							<Form.Item name="username" rules={rules.username}>
								<Input
									prefix={<UserOutlined className="site-form-item-icon" />}
									placeholder="Username"
								/>
							</Form.Item>
							<Form.Item name="password" rules={rules.password}>
								<Input
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									autoComplete="off"
									placeholder="Password"
								/>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
									block
								>
									Log in
								</Button>
							</Form.Item>
						</Form>
					</div>
				</section>
			</div>
		);
	}
}
