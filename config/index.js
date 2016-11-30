//assign uname/password object to value
var configValues = require('./config');
//export connection to mongodb 'mlab'
module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds147267.mlab.com:47267/react_test';
	}
}
