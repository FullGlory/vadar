var sw = require("../VADAR.Common/node_modules/swagger-node-express"),
    param = require("../VADAR.Common/node_modules/swagger-node-express/common/node/paramTypes.js"), 
	url = require("url");

var swe = sw.errors;

var projectData = require("./project.data.js");

function writeResponse(res, data) {
	sw.setHeaders(res);
	res.send(JSON.stringify(data));
}

exports.models = require("./project.models.js");

exports.getProjects = {
	'spec': {
		"description": "Gets the filtered list of projects which are currently setup on a CI server",
		"path": "/builds/board/{boardId}/projects",
		"notes": "Returns a filtered list of projects",
		"summary": "Returns a list of projects from your CI server(s) and filteres that list according to the current filter criteria",
		"method": "GET",
		"params": [param.path("boardId", "ID of the VADAR board that data is being fetched for", "string")],
		"responseClass": "Project",
		"errorResponses": [swe.invalid('boardId')],
		"nickname": "getProjects"
	},
	'action': function (req, res) {

		if (!req.params.boardId) {
			throw swe.invalid('boardId');
		}
		var boardId = req.params.boardId;

		var projects = projectData.getProjects(boardId);

		if (projects) res.send(JSON.stringify(projects));
		else throw swe.notFound('projects');
	}
};


exports.getProjectById = {
	'spec': {
		"description": "Returns information about the specified project",
		"path": "/builds/board/{boardId}/project/{id}",
		"notes": "Returns only the project with the identity specified",
		"summary": "Returns the project witht he specified if",
		"method": "GET",
		"params": [param.path("boardId", "ID or name of the VADAR board", "string"), 
				   param.path("id", "ID of the project that needs to be fetched", "string")],
		"responseClass": "Project",
		"errorResponses": [swe.invalid('id'), swe.notFound('project'), swe.invalid("boardId"), swe.notFound("board")],
		"nickname": "getProjectById"
	},
	'action': function (req, res) {
	
		if (!req.params.boardId) {
			throw swe.invalid('boardId');
		}
		var boardId = req.params.boardId;

		if (!req.params.petId) {
			throw swe.invalid('id');
		}
		var id = parseInt(req.params.petId);

		var project = projectData.getProjectById(boardId, id);

		if (project) res.send(JSON.stringify(project));
		else throw swe.notFound('project');
	}
};

/*
exports.postProjectsFilter = {
	'spec': {
		"description": "Adds a project filter to the current VADAR board",
		"path": "/builds/board/{boardId}/projects/filter",
		"notes": "Adds a filter to the current board to control which projects are returned for the board specified",
		"summary": "The filters associated with the current board will control which projects are visible on the board",
		"method": "POST",
		"params": [param.path("boardId", "ID or name of the VADAR board", "string")],
		"responseClass": "Board",
		"errorResponses": [swe.invalid('boardId'), swe.notFound('board')],
		"nickname": "postProjectFilters"
	},
	'action': function (req, res) {

		if (!req.params.boardId) {
			throw swe.invalid('boardId');
		}
		var boardId = req.params.boardId;

		if (!req.params.petId) {
			throw swe.invalid('id');
		}
		var id = parseInt(req.params.petId);

		var board = projectData.getProjectById(boardId, id);

		if (project) res.send(JSON.stringify(project));
		else throw swe.notFound('project');
	}
};
*/