
const employmentSummary = document.createElement('div');
employmentSummary.className = 'Employment Summary';
employmentSummary.innerHTML = 
`
    <h2>Employment Summary</h2>
    <p>Temporal Process Assitant(PG)<p>
    <small>Amazon Warehouse Robbinsville NJ | May 2018 - September 2018 </small>
    <li>Supervision of costumer orders</li>
    <li>Analysis of floor productivity</li>
    <li>Created detailed reports for manager</li>
    <p>Amazon Robotics Associate </p>
    <small>Amazon Warehouse Robbinsville NJ | September 2018 - present</small>
    <li>Supervision of floor health.</li>
    <li>Reboot and control amazon robots.</li>
    <li>Inventory restoration and updating lost articles.</li>
    <li>Reports of possible items damage or lost.</li>
    <li>Reports in inventory updates.</li>
    
`

document.getElementsByClassName("block1")[0].appendChild(employmentSummary);

const education = document.createElement('div');
education.className = 'Education';
education.innerHTML = 
`
    <h2>Education</h2>
    <p>Bucks County Community College </p>
    <li>Associate Degree in engineering | January 2021 </li>
    <p>Flatiron School<p>
    <li>Software engineering | Current </li>
`

document.getElementsByClassName("block2")[0].appendChild(education);

const language = document.createElement('div');
language.className = 'language';
language.innerHTML = 
`
    <h2>Languages</h2>
    <li>English</li>
    <li>Spanish</li>
`

document.getElementsByClassName("block3")[0].appendChild(language);

const technicalExpertise= document.createElement('div');
technicalExpertise.className = 'Technical Expertise';
technicalExpertise.innerHTML = 
`
<h2>Technical Expertise</h2>
<li>Excellent computer skills</li>
<li>Domain in Microsoft Word, Excel, Power Point, Outlook, and Project.</li>
<li>Basic programming knowledge: Java, Javascript, html and css.</li>
<li>Knowledge in PC installation, formatting, windows installation and BIOS optimization.</li>

`

document.getElementsByClassName("block4")[0].appendChild(technicalExpertise);

const personalProfile = document.createElement('div');
personalProfile.className = 'Personal Profile';
personalProfile.innerHTML = 
`
<h2>Personal Profile</h2>
<li> I'm a creative and motivated person who enjoy to learn a new skills everyday and who is willing to learn from others the best of everybody.</li>
`

document.getElementsByClassName("column2")[0].appendChild(personalProfile);

const personalSkills = document.createElement('div');
personalSkills.className = 'Personal Skills';
personalSkills.innerHTML = 
`
<h2>Personal Skills</h2>
<li>Diligent worker</li>
<li>Quick to respond to issues</li>
<li>Problem-solver</li>
<li>Creative and flexible when necessary</li>
<li>Easily approachable</li>
<li>Quick learner</li>

`

document.getElementsByClassName("column3")[0].appendChild(personalSkills);

const button1 = document.getElementById("employment-summary")

function goEmploymentSummary()  { 

    window.scrollTo(0,100);
}
button1.addEventListener('click',goEmploymentSummary)

const button2 = document.getElementById("education")

function goEducation()  { 

    window.scrollTo(0,500);
}
button2.addEventListener('click',goEducation)

const button3 = document.getElementById("languages")

function goLanguage()  { 

    window.scrollTo(0,900);
}
button3.addEventListener('click',goLanguage)

const button4 = document.getElementById("technical-expertise")

function goTechnicalExpertise()  { 

    window.scrollTo(0,900);
}
button4.addEventListener('click',goTechnicalExpertise)

const button5 = document.getElementById("photo-profile")

function goPhotoProfile()  { 

    window.scrollTo(0,100);
}
button5.addEventListener('click',goPhotoProfile)

const button6 = document.getElementById("personal-profile")

function goPersonalProfile()  { 

    window.scrollTo(0,250);
}
button6.addEventListener('click',goPersonalProfile)

const button7 = document.getElementById("personal-skills")

function goPersonalSkills()  { 

    window.scrollTo(0,400);
}
button7.addEventListener('click',goPersonalSkills)

const button8 = document.getElementById("contact-info")

function goContactInfo()  { 

    window.scrollTo(0,700);
}
button8.addEventListener('click',goContactInfo)


