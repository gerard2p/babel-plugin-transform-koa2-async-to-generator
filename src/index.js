import helper from 'babel-helper-remap-koa2-async-to-generator';
export default function () {
	return {
		inherits: require('babel-plugin-syntax-async-functions'),
		visitor: {
			Function: function Function (path, state) {
				if (!path.node.async || path.node.generator) return;
				try {
					helper(path, state);
				} catch(e) {
					console.log(e);
				}
			}
		}
	};
}
