import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";
import Logo from "./images/logo.svg";

const rules = {
	username: [
		{ required: true, whitespace: true, message: "用户名必须输入" },
		{ max: 12, min: 4, message: "用户名长度必须大于4小于12" },
		{ pattern: /^\w+$/, message: '用户名必须是字母、数字、下划线组成' }
	],
	password: [
		{
			validator: (rule, value) => {
				if(!value) return Promise.reject('密码必须输入');
				if(value.length <= 4 || value.length >= 12) return Promise.reject('密码长度必须大于4小于12')
				if(!(/^\w+$/).test(value)) return Promise.reject('密码必须是字母、数字、下划线组成');
				return Promise.resolve();
			}
		}
	],
};

/**
 * 登录路由组件
 */
export default class Login extends Component {
	onFinish = e => {
		console.log(e);
	}

	onFinishFailed = ({ values, errorFields, outOfDate }) => {
		console.log(values, errorFields, outOfDate);
	}

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
							initialValues={{
								username: 'admin'
							}}
							onFinish={this.onFinish}
							onFinishFailed={this.onFinishFailed}
						>
							<Form.Item name="username" rules={rules.username}>
								<Input
									prefix={<UserOutlined className="site-form-item-icon" />}
									autoComplete="off"
									placeholder="用户名"
								/>
							</Form.Item>
							<Form.Item name="password" rules={rules.password}>
								<Input.Password
									prefix={<LockOutlined className="site-form-item-icon" />}
									autoComplete="off"
									placeholder="密码"
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
