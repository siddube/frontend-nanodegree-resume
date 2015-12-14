/*Resume Builder*/
skills = ["HTML5","CSS3","Javascript","jQuery","Bootstrap 3","Python","Wordpress"];

var bio = {
    "name" : "Prajwal Belagatti",
    "role" : "UI Developer",
    "contacts" : {
        "mobile" : "+91 9900265285",
        "email" : "prajwal.belagatti.89@gmail.com",
        "github" : "https://github.com/siddube/",
        "twitter" : "https://twitter.com/siddu_be",
        "location" : "Jayanagar, Bangalore"
    },
    "welcomeMessage" : "Hello! My name is Prajwal Belagatti and I'm a UI Developer...",
    "skills" : skills,
    "biopic" : "https://media.licdn.com/media/AAEAAQAAAAAAAAQ0AAAAJDMzYjQ5NDA2LTNjYzMtNDQzOC1hY2NkLWI2NmYwMzMzMmUxOQ.jpg",
    "display" : function () {
        
        //Add Basic Info
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic); 
        $("#header").append(formattedPic);
        var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelMsg);

        //Add Skills Div
        $("#header").append(HTMLskillsStart);
        for(var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }

        //Add Contact info
        var formattedMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMob);
        $("#footerContacts").append(formattedMob);

        var formattedMail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedMail);
        $("#footerContacts").append(formattedMail);

        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGit);

        var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwit);

        var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLoc);
    
    }
};



var education = {
    "schools" : [
        {
            "name" : "Asian Institute of Gaming and Animation, AIGA",
            "location" : "HAL Airport Road, Bangalore",
            "degree" : "Diploma in Games Programming",
            "majors" : "Flash and ActionScript 3.0 Games Development",
            "dates" : 2010,
            "url" : ""
        },
        {
            "name" : "Jain Pre University College, V V Puram",
            "location" : "Jayanagar, Bangalore",
            "degree" : "Pre-University",
            "majors" : "Computer Science, Maths, Physics",
            "dates" : 2007,
            "url" : ""
        },
        {
            "name" : "Vijaya High School",
            "location" : "Jayanagar, Bangalore",
            "degree" : "High School",
            "majors" : "",
            "dates" : 2005,
            "url" : ""
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Nanodegree in UI Development", 
            "school" : "Udacity",
            "date" : 2016,
            "url" : ""
        },
        {
            "title" : "Web Design For Everybody Specialization", 
            "school" : "University of Michigan, Coursera",
            "date" : 2015,
            "url" : ""
        },
        {
            "title" : "Python For Everybody Specialization", 
            "school" : "University of Michigan, Coursera",
            "date" : 2016,
            "url" : ""
        }
    ],
    "display" : function() {
        for(var course in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[course].name);
            $(".education-entry:last").append(formattedName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[course].degree)
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[course].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[course].location);
            $(".education-entry:last").append(formattedLoc);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[course].majors);
            if(education.schools[course].majors != "") {
                $(".education-entry:last").append(formattedMajor);
            }
        }
        
        $("#education").append(HTMLonlineClasses);
        
        for(course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".education-entry:last").append(formattedName);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
            $(".education-entry:last").append(formattedSchool);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedDate);
        }
    }
};


var work = {
    "jobs" : [
        {
            "employer" : "",
            "title" : "Independent Flash Games Developer",
            "location" : "Jayanagar, Bangalore",
            "dates" : "2010-2012",
            "description" : "Farm-to-table gentrify synth, gastropub pinterest cornhole artisan distillery keytar offal plaid pop-up organic godard. <br />Lo-fi post-ironic offal, tilde farm-to-table flexitarian health goth salvia thundercats plaid wolf banjo 90's. "
        },
        {
            "employer" : "",
            "title" : "Freelance Web Developer",
            "location" : "Jayanagar, Bangalore",
            "dates" : "2012 - Present",
            "description" : "Occupy taxidermy shoreditch actually, you probably haven't heard of them intelligentsia stumptown. "
        },
        {
            "employer" : "Event Linked",
            "title" : "UI Developer",
            "location" : "Jayanagar, Bangalore",
            "dates" : "2015 - Present",
            "description" : "Plaid semiotics blog listicle, lomo tote bag twee.Squid keffiyeh messenger bag brunch austin raw denim.<br /> Quinoa XOXO jean shorts venmo banh mi retro. "
        }
    ],
    "display" : function() {
        for(var job in work.jobs) {
            
            $("#workExperience").append(HTMLworkStart);
            var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
            if(work.jobs[job].employer === "") {
                formattedJob = formattedJob.replace("-", "");
            }
            
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            $(".work-entry").append('<div style="clear:both;" ></div>');

            var formattedDescp = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescp)

            $(".work-entry:last").prepend(formattedJob);
        }
    }
};

var project = {
    
    "projects" : [
        {
            "title" : "Event Linked",
            "dates" : "July 2015 - Present",
            "description" : "Farm-to-table gentrify synth, gastropub pinterest cornhole artisan distillery keytar offal plaid pop-up organic godard. Lo-fi post-ironic offal, tilde farm-to-table flexitarian health goth salvia",
            "images" : ["images/proj_1.png","images/proj_2.png"]
        }
    ],
    "display" : function() {
        for(var myproject in project.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[myproject].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.projects[myproject].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDesc = HTMLprojectDescription.replace("%data%", project.projects[myproject].description);
            $(".project-entry:last").append(formattedDesc);
            for(var image in project.projects[myproject].images) {
                var formattedPic = HTMLprojectImage.replace("%data%", project.projects[myproject].images[image]);
                $(".project-entry:last").append(formattedPic);
            }
        }
    }
    
};

// Display each resume section
bio.display();
education.display();
work.display();
project.display();

//Add Google Map info
$("#mapDiv").append(googleMap);