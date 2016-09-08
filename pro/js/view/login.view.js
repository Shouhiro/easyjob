'use strict';

define(function () {
	$('#loginForm').form({
		on: "blur",
		fields: {
			email: {
				identifier: 'email',
				rules: [{
					type: 'empty',
					prompt: '请输入邮箱账号'
				}, {
					type: 'email',
					prompt: '请输入正确的邮箱账号'
				}]
			},
			password: {
				identifier: 'password',
				rules: [{
					type: 'empty',
					prompt: '请输入密码'
				}]
			}
		}
	});
});