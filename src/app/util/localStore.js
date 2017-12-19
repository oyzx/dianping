export default {
	getItem: function (key) {
		let value;
		try {
			value = localStorage.getItem(key);
		} catch (ex) {
			//如果在开发环境下
			// if (__DEV__) {
			// 	console.log('localStorage.getItem报错: ', ex.message);
			// }
		} finally {
			return value
		}
	},
	setItem: function (key, value) {
		try {
			// ios safari 无痕模式下，直接使用localStorage.getItem报错
			localStorage.setItem(key, value);
		} catch (ex) {
			// 开发环境下提示 error
			// if (__DEV__){
			// 	console.log('localStorage.setItem报错: ', ex.message);
			// }
		} 
	}
}