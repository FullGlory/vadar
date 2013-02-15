var counter = 0;

exports.getProjects = function (boardId) {

	counter++;

	var projects = [

		{
			id: 1,
			name: "RulesEngine",
			jobs:
			[
				{
					id: 1,
					enabled: true,
					name: "COMMIT",
					latestBuild: {
						id: 123,
						running: false,
						started: "13/02/2013 12:01:01",
						durationMs: 2320,
						status: "success",
						triggeredBy: {
							type: "COMMIT",
							changes: [
								{
									id: 123,
									comment: "loads of goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature",
										"someACCEPTTest.feature.cs"
									]
								},
								{
									id: 124,
									comment: "A fix for the goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature.cs"
									]
								}
							]
						}
					},
					jobStatistics: {
						buildFrequency: 0.75
					}
				},
				{
					id: 2,
					enabled: true,
					name: "ACCEPT",
					latestBuild: {
						id: 124,
						running: true,
						started: "13/02/2013 16:01:01",
						durationMs: 3456,
						status: "success",
						triggeredBy: {
							type: "Dependency",
							job: {
								id: 1
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.75
					}
				},
				{
					id: 3,
					enabled: true,
					name: "QA",
					latestBuild: {
						id: 125,
						running: true,
						started: "11/02/2013 16:01:01",
						durationMs: 1234,
						status: "success",
						triggeredBy: {
							type: "Manual",
							user: {
								id: 1,
								displayName: "simon parsons"
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.21
					}
				},
				{
					id: 4,
					enabled: true,
					name: "UAT",
					latestBuild: {
						id: 126,
						running: true,
						started: "11/02/2013 16:01:01",
						durationMs: 1234,
						status: "fail",
						culprit: {
							displayName: "paul marshall"
						}, 
						triggeredBy: {
							type: "Manual",
							user: {
								id: 1,
								displayName: "simon parsons"
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.1
					}
				}
			]
		},

		{
			id: 2,
			name: "OSP",
			jobs:
			[
				{
					id: 1,
					enabled: true,
					name: "COMMIT",
					latestBuild: {
						id: 123,
						running: false,
						started: "13/02/2013 12:01:01",
						durationMs: 2320,
						status: "success",
						triggeredBy: {
							type: "COMMIT",
							changes: [
								{
									id: 123,
									comment: "loads of goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature",
										"someACCEPTTest.feature.cs"
									]
								},
								{
									id: 124,
									comment: "A fix for the goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature.cs"
									]
								}
							]
						}
					},
					jobStatistics: {
						buildFrequency: 0.55
					}
				},
				{
					id: 2,
					enabled: true,
					name: "ACCEPT",
					latestBuild: {
						id: 124,
						running: true,
						started: "13/02/2013 16:01:01",
						durationMs: 3456,
						status: "fail",
						culprit: {
							displayName: "paul marshall"
						}, 
						triggeredBy: {
							type: "Dependency",
							job: {
								id: 1
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.60
					}
				},
				{
					id: 3,
					enabled: true,
					name: "QA",
					latestBuild: {
						id: 125,
						running: true,
						started: "11/02/2013 16:01:01",
						durationMs: 1234,
						status: ((counter < 3) || (counter > 10)) ? "success" : "fail",
						culprit: {
							displayName: "simon parsons"
						}, 
						triggeredBy: {
							type: "Manual",
							user: {
								id: 1,
								displayName: "simon parsons"
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.2
					}
				},
				{
					id: 4,
					enabled: true,
					name: "UAT",
					latestBuild: {
						id: 126,
						running: true,
						started: "11/02/2013 16:01:01",
						durationMs: 1234,
						status: "success",
						triggeredBy: {
							type: "Manual",
							user: {
								id: 1,
								displayName: "simon parsons"
							}
						}
					},
					jobStatistics: {
						buildFrequency: 0.4
					}
				}
			]
		},

		{
			id: 3,
			name: "COMMON",
			jobs:
			[
				{
					id: 1,
					enabled: true,
					name: "COMMIT",
					latestBuild: {
						id: 123,
						running: false,
						started: "13/02/2013 12:01:01",
						durationMs: 2320,
						status: "success",
						triggeredBy: {
							type: "COMMIT",
							changes: [
								{
									id: 123,
									comment: "loads of goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature",
										"someACCEPTTest.feature.cs"
									]
								},
								{
									id: 124,
									comment: "A fix for the goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature.cs"
									]
								}
							]
						}
					},
					jobStatistics: {
						buildFrequency: 0.75
					}
				}
			]
		},

		{
			id: 2,
			name: "Tools",
			jobs:
			[
				{
					id: 1,
					enabled: true,
					name: "COMMIT",
					latestBuild: {
						id: 123,
						running: false,
						started: "13/02/2013 12:01:01",
						durationMs: 2320,
						status: "success",
						triggeredBy: {
							type: "COMMIT",
							changes: [
								{
									id: 123,
									comment: "loads of goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature",
										"someACCEPTTest.feature.cs"
									]
								},
								{
									id: 124,
									comment: "A fix for the goodness",
									user: {
										displayName: "paul marshall"
									},
									files: [
										"someACCEPTTest.feature.cs"
									]
								}
							]
						}
					},
					jobStatistics: {
						buildFrequency: 0.1
					}
				}
			]
		}

	];

	return projects;
}

exports.getProjectById = function(boardId, projectId) {
	return "hello board " + boardId + " here is the information for project " + projectId;
} 

/*
var tags = {
	1: { id: 1, name: "tag1" },
	2: { id: 2, name: "tag2" },
	3: { id: 3, name: "tag3" },
	4: { id: 4, name: "tag4"}
};

var categories = {
	1: { id: 1, name: "Dogs" },
	2: { id: 2, name: "Cats" },
	3: { id: 3, name: "Rabbits" },
	4: { id: 4, name: "Lions"}
};

var pets = {
	1: { id: 1,
		category: categories[2],
		name: "Cat 1",
		urls: ["url1", "url2"],
		tags: [tags[1], tags[2]],
		status: "available"
	},
	2: { id: 2,
		category: categories[2],
		name: "Cat 2",
		urls: ["url1", "url2"],
		tags: [tags[2], tags[3]],
		status: "available"
	},
	3: { id: 3,
		category: categories[2],
		name: "Cat 3",
		urls: ["url1", "url2"],
		tags: [tags[3], tags[4]],
		status: "available"
	},
	4: { id: 4,
		category: categories[1],
		name: "Dog 1",
		urls: ["url1", "url2"],
		tags: [tags[1], tags[2]],
		status: "available"
	},
	5: { id: 5,
		category: categories[1],
		name: "Dog 2",
		urls: ["url1", "url2"],
		tags: [tags[2], tags[3]],
		status: "available"
	},
	6: { id: 6,
		category: categories[1],
		name: "Dog 3",
		urls: ["url1", "url2"],
		tags: [tags[3], tags[4]],
		status: "available"
	},
	7: { id: 7,
		category: categories[4],
		name: "Lion 1",
		urls: ["url1", "url2"],
		tags: [tags[1], tags[2]],
		status: "available"
	},
	8: { id: 8,
		category: categories[4],
		name: "Lion 2",
		urls: ["url1", "url2"],
		tags: [tags[2], tags[3]],
		status: "available"
	},
	9: { id: 9,
		category: categories[4],
		name: "Lion 3",
		urls: ["url1", "url2"],
		tags: [tags[3], tags[4]],
		status: "available"
	},
	10: { id: 10,
		category: categories[3],
		name: "Rabbit 1",
		urls: ["url1", "url2"],
		tags: [tags[3], tags[4]],
		status: "available"
	}
};

exports.getPetById = function getPetById(id) {
	return pets[id];
}


exports.findPetByStatus = function findPetByStatus(status) {
	var keys = {}
	var array = status.split(",");
	array.forEach(function (item) {
		keys[item] = item;
	})
	var output = [];
	for (key in pets) {
		var pet = pets[key];
		if (pet.status && keys[pet.status]) output.push(pet);
	}
	return output;
}

exports.findPetByTags = function findPetByTags(tags) {
	var keys = {}
	var array = tags.split(",");
	array.forEach(function (item) {
		keys[item] = item;
	})
	var output = [];
	for (key in pets) {
		var pet = pets[key];
		if (pet.tags) {
			pet.tags.forEach(function (tag) {
				if (tag.name && keys[tag.name]) output.push(pet);
			});
		}
	}
	return output;
}

exports.addPet = function addPet(pet) {
	pets[pet.id] = pet;
}

exports.deletePet = function deletePet(id) {
	delete pets[id];
}
*/