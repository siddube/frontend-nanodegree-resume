/*Resume Builder*/
var skills = ['HTML5','CSS3','Javascript','jQuery','Bootstrap 3','Python','Wordpress'];

var bio = {
    'name' : 'Prajwal Belagatti',
    'role' : 'UI Developer',
    'contacts' : {
        'mobile' : '+91 9900265285',
        'email' : 'prajwal.belagatti.89@gmail.com',
        'github' : 'https://github.com/siddube/',
        'twitter' : 'https://twitter.com/siddu_be',
        'location' : 'Jayanagar, Bangalore'
    },
    'welcomeMessage' : 'Hello! My name is Prajwal Belagatti and I\'m a UI Developer...',
    'skills' : skills,
    'biopic' : 'https://media.licdn.com/media/AAEAAQAAAAAAAAQ0AAAAJDMzYjQ5NDA2LTNjYzMtNDQzOC1hY2NkLWI2NmYwMzMzMmUxOQ.jpg',
    'display' : function () {
        //Add Basic Info
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').prepend(formattedRole).prepend(formattedName).append(formattedPic).append(formattedWelMsg).append(HTMLskillsStart);
        
        //Add skills
        var len = bio.skills.length;
        for(var skill = 0; skill < len ; skill++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedSkill);
        }

        //Add Contact info
        var formattedMob = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedMail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGit = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedTwit = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedLoc = HTMLlocation.replace('%data%', bio.contacts.location);
        
        $('#topContacts').append(formattedMob).append(formattedMail);
        $('#footerContacts').append(formattedMob).append(formattedMail).append(formattedGit).append(formattedTwit).append(formattedLoc);
    }
};



var education = {
    'schools' : [
        {
            'name' : 'Asian Institute of Gaming and Animation, AIGA',
            'location' : 'HAL Airport Road, Bangalore',
            'degree' : 'Diploma in Games Programming',
            'majors' : ['Flash and ActionScript 3.0 Games Development'],
            'dates' : 2010,
            'url' : ''
        },
        {
            'name' : 'Jain Pre University College, V V Puram',
            'location' : 'Jayanagar, Bangalore',
            'degree' : 'Pre-University',
            'majors' : ['Computer Science','Maths','Physics'],
            'dates' : 2007,
            'url' : ''
        }
    ],
    'onlineCourses' : [
        {
            'title' : 'Nanodegree in UI Development',
            'school' : 'Udacity',
            'date' : 2015,
            'url' : ''
        },
        {
            'title' : 'Web Design For Everybody Specialization',
            'school' : 'University of Michigan, Coursera',
            'date' : 2015,
            'url' : ''
        },
        {
            'title' : 'Python For Everybody Specialization',
            'school' : 'University of Michigan, Coursera',
            'date' : 2015,
            'url' : ''
        }
    ],
    'display' : function() {
        var formattedName;
        var formattedDate;
        for(var course in education.schools) {
            $('#education').append(HTMLschoolStart);
            formattedName = HTMLschoolName.replace('%data%', education.schools[course].name);
            formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[course].degree);
            formattedDate = HTMLschoolDates.replace('%data%', education.schools[course].dates);
            var formattedLoc = HTMLschoolLocation.replace('%data%', education.schools[course].location);
            var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[course].majors);
            $('.education-entry:last').append(formattedName).append(formattedDate).append(formattedLoc).append(formattedMajor);
        }

        $('#education').append(HTMLonlineClasses);

        for(course in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            formattedName = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
            $('.education-entry:last').append(formattedName).append(formattedSchool).append(formattedDate);
        }
    }
};


var work = {
    'jobs' : [
        {
            'employer' : '',
            'title' : 'Independent Flash Games Developer',
            'location' : 'Jayanagar, Bangalore',
            'dates' : '2010-2012',
            'description' : 'Farm-to-table gentrify synth, gastropub pinterest cornhole artisan distillery keytar offal plaid pop-up organic godard. <br />Lo-fi post-ironic offal, tilde farm-to-table flexitarian health goth salvia thundercats plaid wolf banjo 90\'s. '
        },
        {
            'employer' : '',
            'title' : 'Freelance Web Developer',
            'location' : 'Jayanagar, Bangalore',
            'dates' : '2012 - Present',
            'description' : 'Occupy taxidermy shoreditch actually, you probably haven\'t heard of them intelligentsia stumptown. '
        },
        {
            'employer' : 'Event Linked',
            'title' : 'UI Developer',
            'location' : 'Jayanagar, Bangalore',
            'dates' : '2015 - Present',
            'description' : 'Plaid semiotics blog listicle, lomo tote bag twee.Squid keffiyeh messenger bag brunch austin raw denim.<br /> Quinoa XOXO jean shorts venmo banh mi retro. '
        }
    ],
    'display' : function() {
        for(var job in work.jobs) {

            $('#workExperience').append(HTMLworkStart);
            var formattedJob = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
            
            if(work.jobs[job].employer === '') {
                formattedJob = formattedJob.replace('-', '');
            }

            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            var formattedDescp = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedDates).append(formattedLocation).append('<div style="clear:both;"></div>').append(formattedDescp).prepend(formattedJob);
        }
    }
};

var project = {

    'projects' : [
        {
            'title' : 'Event Linked',
            'dates' : 'July 2015 - Present',
            'description' : 'Farm-to-table gentrify synth, gastropub pinterest cornhole artisan distillery keytar offal plaid pop-up organic godard. Lo-fi post-ironic offal, tilde farm-to-table flexitarian health goth salvia',
            'images' : ['images/proj_1.png','images/proj_2.png']
        }
    ],
    'display' : function() {
        for(var myproject in project.projects) {
            var formattedTitle = HTMLprojectTitle.replace('%data%', project.projects[myproject].title);
            var formattedDates = HTMLprojectDates.replace('%data%', project.projects[myproject].dates);
            var formattedDesc = HTMLprojectDescription.replace('%data%', project.projects[myproject].description);
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formattedTitle).append(formattedDates).append(formattedDesc);
           
            for(var image in project.projects[myproject].images) {
                var formattedPic = HTMLprojectImage.replace('%data%', project.projects[myproject].images[image]);
                $('.project-entry:last').append(formattedPic);
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
$('#mapDiv').append(googleMap);

//Log User Clicks
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});