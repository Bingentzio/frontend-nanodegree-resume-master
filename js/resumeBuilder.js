var work={
"jobs":[
  {
    "employer":"Innovatek",
    "title":"JAVA Programer",
    "location":"Beasain, Basque Country",
    "dates":"2014/09/01-Nowadays",
    "description":"Actually working as a JAVA Programer, programing web and desktop applications, also mantaining servers."
  },
  {
    "employer":"Ik4-Tekniker",
    "title":"Robotics Developer",
    "location":"Eibar, Basque Country",
    "dates":"2014/01/01-2014/07/24",
    "description":"Making tests with robots using ROS and C programation to improve the software."
  }
]
};

var projects={
"project":[
  {
    "title":"Cheese championship",
    "dates":"2015/04/02-2015/09/02",
    "description":"A rating system for an important cheese championship in a web application to improve the velocity of the results calculation.",
    "images":["images/jsf.jpg","images/primefaces.jpg","images/hibernate.jpg"]
  },
  {
    "title":"Raffle",
    "dates":"2015/02/01-2015/03/25",
    "description":"A JAVA application to make a raffle with whatsapp messages for a local TV",
    "images":["images/java.jpg","images/wp.jpg"]
  }
]
};

var bio={
"name":"Bingen Gonzalez",
"role":"Software Engineer",
"contact":{
  "mobile":"665741928",
  "email":"bingen.glez@gmail.com",
  "github":"bingentzio",
  "location":"Ordizia, Basque Country"
},
"welcomeMessage":"Welcome to my CV.",
"skills":["communication","teamwork", "initiative","problem solving"],
"pic":"images/fry.jpg"
};

var education={
"schools":[
  {
    "name":"University of Basque Country",
    "location":"Donostia, Basque Country",
    "degree":"Computer Engineering",
    "majors":"CS",
    "dates":"2011-2014",
    "url":"http://www.ehu.eus/eu/web/informatika-fakultatea"
  },
  {
    "name":"Eötvös Loránd University",
    "location":"Budapest, Hungary",
    "degree":"MASTER",
    "majors":"CS",
    "dates":"2013",
    "url":"http://www.elte.hu"
  },
  {
    "name":"University of Basque Country",
    "location":"Donostia, Basque Country",
    "degree":"Information Technology and Software Engineering",
    "majors":"CS",
    "dates":"2007-2011",
    "url":"http://www.ehu.eus/eu/web/informatika-fakultatea"
  }
],
"onlineCourses":[
  {
    "title":"Artificial Intelligence for Robotics",
    "school":"Udacity",
    "dates":"4/13/14",
    "url":"https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373"
  },
  {
    "title":"How to Use Git and GitHub",
    "school":"Udacity",
    "dates":"1/10/15",
    "url":"https://www.udacity.com/course/progress#!/c-ud775"
  }
]
}



  var formattedName=HTMLheaderName.replace("%data%",bio.name);
  var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
  var formattedPic=HTMLbioPic.replace("%data%",bio.pic);
  var formattedMessage=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  var formattedMobile=HTMLmobile.replace("%data%",bio.contact.mobile);
  var formattedEmail=HTMLemail.replace("%data%",bio.contact.email);
  var formattedGitHub=HTMLgithub.replace("%data%",bio.contact.github);
  var formattedLocation=HTMLlocation.replace("%data%",bio.contact.location);

  $("#header").prepend(formattedMessage);
  $("#header").prepend(formattedPic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedLocation);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills){
      var formattedSkill= HTMLskills.replace("%data%",bio.skills[skill]);
      $("#skillsH3").append(formattedSkill);
    }
  }
function displayWork(){
  for (job in work.jobs){
    //create a div for work experience
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();


function inName(){
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}
var name = $("#name").text();

projects.display = function(){
  for (p in projects.project){
  $("#projects").append(HTMLprojectStart);
  $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[p].title));
  $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[p].dates));
  $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[p].description));
  if(projects.project[p].images.length>0){
    for (image in projects.project[p].images)
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.project[p].images[image]));
    }
  }
}
projects.display();

education.display = function(){
  for (e in education.schools){
  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[e].name)+HTMLschoolDegree.replace("%data%",education.schools[e].degree));
  $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[e].dates));

  $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[e].location));
  $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[e].majors));
  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for (o in education.onlineCourses){

    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[o].title)+HTMLonlineSchool.replace("%data%",education.onlineCourses[o].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[o].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[o].url));
    }

}
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
