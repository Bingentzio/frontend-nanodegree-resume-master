var work={
"jobs":[
  {
    "employer":"Innovatek",
    "title":"JAVA Programer",
    "location":"Beasain, Basque Country",
    "dates":"2014/09/01-Nowadays",
    "description":"Programing web application and maintaining servers"
  },
  {
    "employer":"Ik4-Tekniker",
    "title":"Robotics Developer",
    "location":"Eibar, Basque Country",
    "dates":"2014/01/01-2014/07/24",
    "description":"Software for robotics"
  }
]
};

var projects={
"project":[
  {
    "title":"Cheese championship",
    "dates":"2015/04/02-2015/09/02",
    "description":"A rating system in a web application",
    "images":""
  },
  {
    "title":"Raffle",
    "dates":"2015/02/01-2015/03/25",
    "description":"A JAVA application to make a raffle with whatsapp messages",
    "images":""
  }
]
};

var bio={
"name":"Bingen Gonzalez",
"role":"Web Developer",
"contact":{
  "mobile":"665741928",
  "email":"bingen.glez@gmail.com",
  "github":"bingentzio",
  "location":"Ordizia, Basque Country"
},
"welcomeMessage":"Welcome to my CV.",
"skills":["funny","hard worker", "awesome"],
"pic":"images/fry.jpg"
};

var education={
"schools":[
  {
    "name":"University of Basque Country",
    "location":"Donostia, Basque Country",
    "degree":"Computer Engineering",
    "majors":[],
    "dates":"2011-2014",
    "url":"http://www.ehu.eus/eu/web/informatika-fakultatea"
  },
  {
    "name":"University of Basque Country",
    "location":"Donostia, Basque Country",
    "degree":"Information Technology and Software Engineering",
    "majors":[],
    "dates":"",
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

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGitHub);
$("#header").append(formattedLocation);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills){
    var formattedSkill= HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}
if(work.jobs.length > 0){
  $("#workExperience").append(HTMLworkStart);
  for (job in work.jobs){
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
