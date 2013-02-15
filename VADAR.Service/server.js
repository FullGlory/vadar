var express = require("../VADAR.Common/node_modules/express"),
	swagger = require("../VADAR.Common/node_modules/swagger-node-express"), 
	url = require("url");
    
// Load the resources that will provide the service endpoints
var projectResources = require("./project.resources.js");

var app = express();
app.use(express.bodyParser());

// Set the main handler in swagger to the express app
swagger.setAppHandler(app);

// This validator simply says that for _all_ POST, DELETE, PUT
// methods, the header `api_key` OR query param `api_key` must be equal
// to the string literal `special-key`.  All other HTTP ops are A-OK
swagger.addValidator(
  function validate(req, path, httpMethod) {
  	//  example, only allow POST for api_key="special-key"
  	if ("POST" == httpMethod || "DELETE" == httpMethod || "PUT" == httpMethod) {
  		var apiKey = req.headers["api_key"];
  		if (!apiKey) {
  			apiKey = url.parse(req.url, true).query["api_key"];
  		}
  		if ("special-key" == apiKey) {
  			return true;
  		}
  		return false;
  	}
  	return true;
  }
);

// Add models and methods to swagger
swagger.addModels(projectResources.models);
swagger.addGet(projectResources.getProjects)
 	   .addGet(projectResources.getProjectById);

// Configures the app's base path and api version.
swagger.configureSwaggerPaths("", "/api-docs", "");
swagger.configure("http://localhost:8002", "0.1");

console.log("__dirname=" + __dirname);

// Serve up swagger ui at /docs via static route
var docs_handler = express.static(__dirname + '/../VADAR.Common/swagger-ui-1.1.7/');
app.get(/^\/docs(\/.*)?$/, function (req, res, next) {
	if (req.url === '/docs') { // express static barfs on root url w/o trailing slash
		res.writeHead(302, { 'Location': req.url + '/' });
		res.end();
		return;
	}
	// take off leading /docs so that connect locates file correctly
	req.url = req.url.substr('/docs'.length);
	return docs_handler(req, res, next);
});

// Start the server on port 8002
app.listen(8002);
console.log('Listening on port 8002');