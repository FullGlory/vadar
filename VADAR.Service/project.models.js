exports.models = {
	"Project": {
		"id": "Project",
		"properties": {
			"id": {
				"type": "long"
			},
			"name": {
				"type": "string"
			}, 
			"jobs": {
				"items": {	
					"$ref": "Job"
				},
				"type": "Array"
			}
		}
	},

	"Job": {
		"id": "Job",
		"properties": {
			"id": {
				"type": "long"
			},
			"enabled": {
				"type": "boolean"
			}, 
			"name": {
				"type": "string"
			}, 
			"latestBuild": {
				"description": "Contains details of the latest build", 
				"type": "Build"
			},
			"jobStatistics": {
				"description": "Statistics which have been gathered for this job from previous builds", 
				"type": "JobStatistics"
			}
		}
	},

	"JobStatistics": {
		"id": "JobStatistics",
		"properties": {
			"buildFrequency": {
				"type": "double"
			}
		}
	},

	"Build": {
		"id": "Build",
		"properties": {
			"id": {
				"type": "long"
			},
			"running": {
				"type": "boolean"
			}, 
			"triggeredBy": {
				"type": "???"
			}, 
			"started": {
				"type": "Date"
			},
			"durationMs": {
				"type": "long"
			}, 
			"culprit" : {
				"type": "User"
			}, 
			"status": {
				"allowableValues": {
					"valueType": "LIST",
					"values": [
					  "fail",
					  "success",
					  "warning", 
					  "unkonwn"
					],
					"valueType": "LIST"
				},
				"description": "The current build status of a job",
				"type": "string"
			}    
		}
	},

	"ManualTrigger": {
		"properties": {
			"user": {
				"type": "user"
			}
		}
	},

	"CommitTrigger": {
		"properties": {
			"changes": {
				"items": {
					"$ref": "Changeset"
				},
				"type": "Array"
			}
		}
	},

	"DependencyTrigger": {
		"properties": {
			"jobUrl": {
				"type": "string"
			}
		}
	},

	"Changeset": {
		"id": "Changeset",
		"properties": {
			"id": {
				"type": "long"
			},
			"comment": {
				"type": "string"
			},
			"user": {
				"type": "user"
			},
			"files": {
				"items": {
					"type": "string"
				}, 
				"type": "Array"
			}
		}
	},

	"User": {
		"id": "User", 
		"properties": {
			"id": { 
				"type": "long"
			}, 
			"displayName": {
				"type": "string"
			}
		}
	}, 

	"ProjectFilter": {
		"id": "ProjectFilter", 
		"properties": {
			"id": {
				"type": "long"
			}, 
			"expression": {
				"type": "string"
			}
		}
	}
}