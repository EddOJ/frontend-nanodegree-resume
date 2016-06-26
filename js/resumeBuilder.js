/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var bio = {
 			"name" : "Edwin", 
 			"jobRole" : "Web Developer", 
 			"contact" : {
 				"mobile" : "(917) 951-7720",
 				"email" : "wolfedd4@gmail.com",
 				"github" : "EddOJ",
 				"loation" : "Astoria, New York, 11103"
 			}, 
 			"welcomeMessage" : "Hi, I am Edwin! and I am a, aspiring to be, web develper." ,
 			"skills" : ["Programmer", " Interviewer", " JS", " Ruby "],
 			"biopic" : "pics/me.jpg",
 			"display" : 4
 			};

 var education = {
	"schools": [{
		"name": "Baruch College",
		"location": "NY, NY",
		"degree": "B.B.A.",
		"majors": "Computer Information Systems (CIS)",
		"minors": "Math",
		"dates": "December, 2012 - present",
		"url": "http://www.baruch.cuny.edu/"
	}, {
		"name": "BMCC",
		"location": "NY, NY",
		"degree": "A.A.S.",
		"majors": "Computer Information Systems (CIS)",
		"minors": null,
		"dates": "December, 2010 - June 2012",
		"url": "http://www.bmcc.cuny.edu/j2ee/index.jsp"
	}],
	"onlineCourses": [{
		"title": "Intro to JavaScript",
		"school": "Udacity",
		"date": "in progress",
		"url": "https://classroom.udacity.com/courses/ud804/"
	}],
	"display": 4
};

 var work = {
 	"jobs" : [{
 		"employer" : "CLIP",
 		"title" : "College Assistant",
 		"location" : "Bronx, NY",
 		"dates" : "September, 2015 - presesnt",
 		"description" : "Prepared Workshop Presenattions, Took Care of the Computer Labs, etc."
 	}],
	"display" : 4
};

var project = {
	"projects":[{
		"title":"To-Do-List Responsive Website",
		"dates":"October, 2014 - June, 2015",
		"description":"Ceated a front-end responsive website using Bootstrap [almost finished it]",
		"images":["img.url","img2.url"]
	}],
	"display": 4
}

 //function display(){};

 // to replace a string stored in the variables HTML"__" -- "%data%"
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.jobRole);
 
 //var formattedGenenricContact = HTMLcontactGeneric.replace("%contact%", "My Contact Info").replace("%data%","Contact Point")
 var formattedMobileContact = HTMLmobile.replace("%data%", bio.contact.mobile);
 var formattedEmail=HTMLemail.replace("%data%", bio.contact.email);
 var formattedGithub=HTMLgithub.replace("%data%", bio.contact.github);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 // skills
 var formattedSkills = HTMLskills.replace("%data%", bio.skills);

 // work
 var formattedWrkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
 var formattedWrkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
 
 //school
 var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0]["name"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// appending contacts
//$("#header").append(formattedGenericContact);
$("#header").append(formattedMobileContact);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
//skills potrtion
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

//work part
$("#workExperience").append(HTMLworkStart).append(formattedWrkEmployer).append(formattedWrkTitle)

//education
$("#main").append(HTMLschoolStart).append(formattedSchoolName);




