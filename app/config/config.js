//Initilized a global object/Namespace with can be accessed throughout the application
var APP = APP || {};

//Service URL for backend
APP.url = 'http://localhost:3000/';

APP.service = {
	'createUser': APP.url + 'user/create'
};
