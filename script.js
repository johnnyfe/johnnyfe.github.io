
const employmentSummary = document.createElement('div');
employmentSummary.className = 'Employment Summary';
employmentSummary.innerHTML = 
`
    <p>Amazon Robotics Associate </p>
    <small>Amazon Warehouse Robbinsville NJ | September
    2018 - present</small>
    <li>Supervision of floor health.</li>
    <li>Reboot and control amazon robots.</li>
    <li>Inventory restoration and updating lost articles.</li>
    <li>Reports of possible items damage or lost.</li>
    <li>Reports in inventory updates.</li>
    <p>Temporal Process Assitant(PG)<p>
    <small>Amazon Warehouse Robbinsville NJ | May 2018 September
    2018 - present<small>
    <li>Supervision of costumer orders</li>
    <li>Analysis of floor productivity</li>
    <li>Created detailed reports for manager</li>
`

document.getElementsByClassName("block1")[0].appendChild(employmentSummary);

const education = document.createElement('div');
education.className = 'Education';
education.innerHTML = 
`
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
    <li>English</li>
    <li>Spanish<li>
`

document.getElementsByClassName("block3")[0].appendChild(language);

const technicalExpertise = document.createElement('div');
technicalExpertise.className = 'Technical Expertise';
technicalExpertise.innerHTML = 
`
<li>Excellent computer skills</li>
<li>Domain in Microsoft Word, Excel, Power Point, Outlook, and Project.</li>
<li>Basic programming knowledge: Java, Javascript, html and css.</li>
<li>Knowledge in PC installation, formatting, windows installation and BIOS optimization.</li>
`

document.getElementsByClassName("block4")[0].appendChild(technicalExpertise);
