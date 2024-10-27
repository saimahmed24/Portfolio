const editorBtn = document.getElementById('editBtn').addEventListener('click', edit);

function edit() {
    const editor = document.querySelector('.editMain');
    

    // Toggle the editor's display
    if (editor.style.display === 'none') {
        editor.style.display = 'flex';
    } else {
        editor.style.display = 'none';
    }

    // Check the screen size and toggle the main section visibility
    checkEditorVisibility();
}

// Function to check and hide main section based on editor state and screen size
function checkEditorVisibility() {
    const editor = document.querySelector('.editMain');
    const main = document.getElementById('main');
    const resume = document.getElementById('resume');

    const isEditorOpen = editor.style.display === 'flex';
    const mediumMediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
    const smallMediaQuery = window.matchMedia("(max-width: 767px)");

    if ((mediumMediaQuery.matches || smallMediaQuery.matches) && isEditorOpen) {
        main.style.display = 'none'; // Hide main section
        
    } else {
        main.style.display = 'block'; // Show main section
       
    }
}

// Function to apply styles for medium screens
function applyMediumStyles() {
    const mediumMediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
    
    if (mediumMediaQuery.matches) {
        // Apply medium styles or functionalities
        checkEditorVisibility(); // Check visibility when medium styles apply
    }
}

// Function to apply styles for small screens
function applySmallStyles() {
    const smallMediaQuery = window.matchMedia("(max-width: 767px)");

    if (smallMediaQuery.matches) {
        // Apply small screen styles or functionalities
        checkEditorVisibility(); // Check visibility when small styles apply
    }
}

// Listen for changes to the media query
window.addEventListener("resize", () => {
    applyMediumStyles();
    applySmallStyles();
});

// Initial check
applyMediumStyles();
applySmallStyles();



















let currentSection = 0;
const sections = document.querySelectorAll('.editContent'); // All sections

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none'; // Show only the current section
    });
    document.querySelector('.prevButton').style.display = index > 0 ? 'inline-block' : 'none'; // Show "Previous" for sections > 0
    document.querySelector('.nextButton').textContent = index === sections.length - 1 ? 'Finish' : 'Next'; // Change "Next" to "Finish" on last section
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
    }
}

function prevSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
}

// Initialize by showing the first section
showSection(currentSection);


// BASIC INFO
const Name = document.getElementById('name');
const Profession = document.getElementById('profession');


document.getElementById('inputName').addEventListener('input', function () {
    Name.textContent = this.value;
});
document.getElementById('inputProfession').addEventListener('input', function () {
    Profession.textContent = this.value;
});


// CONTACT INFO

const Gender = document.getElementById('gender');
const DOB = document.getElementById('dob');
const Phone = document.getElementById('phone');
const Email = document.getElementById('email');
const Website = document.getElementById('website');
const Location = document.getElementById('location');
const skill1 = document.getElementById('skill-1');
const skill2 = document.getElementById('skill-2');
const skill3 = document.getElementById('skill-3');
const certificate1 = document.getElementById('certificate-1');
const certificate2 = document.getElementById('certificate-2');
const certificate3 = document.getElementById('certificate-3');
const summary = document.getElementById('summaryParagraph');
const education1 = document.getElementById('education1');
const education2 = document.getElementById('education2');
const educationTitle1 = document.getElementById('educationTitle1');
const educationTitle2 = document.getElementById('educationTitle2');
const experience1 = document.getElementById('experience1');
const experience2 = document.getElementById('experience2');
const experienceTitle1 = document.getElementById('experienceTitle1');
const experienceTitle2 = document.getElementById('experienceTitle2');



document.getElementById('inputGender').addEventListener('input', function () {
    Gender.textContent = this.value;
});
document.getElementById('inputDOB').addEventListener('input', function () {
    DOB.textContent = this.value;
});
document.getElementById('inputPhone').addEventListener('input', function () {
    Phone.textContent = this.value;
});
document.getElementById('inputEmail').addEventListener('input', function () {
    Email.textContent = this.value;
});
document.getElementById('inputWebsite').addEventListener('input', function () {
    Website.textContent = this.value;
});
document.getElementById('inputLocation').addEventListener('input', function () {
    Location.textContent = this.value;
});



document.getElementById('inputSkill-1').addEventListener('input', function () {
    skill1.textContent = this.value;
});
document.getElementById('inputSkill-2').addEventListener('input', function () {
    skill2.textContent = this.value;
});
document.getElementById('inputSkill-3').addEventListener('input', function () {
    skill3.textContent = this.value;
});



document.getElementById('inputCertificate-1').addEventListener('input', function () {
    certificate1.textContent = this.value;
});
document.getElementById('inputCertificate-2').addEventListener('input', function () {
    certificate2.textContent = this.value;
});
document.getElementById('inputCertificate-3').addEventListener('input', function () {
    certificate3.textContent = this.value;
});

document.getElementById('inputSummary').addEventListener('input', function () {
   summary.textContent = this.value;
});


document.getElementById('inputEducation1').addEventListener('input', function () {
   education1.textContent = this.value;
});
document.getElementById('inputEducation2').addEventListener('input', function () {
   education2.textContent = this.value;
});
document.getElementById('inputEducationTitle1').addEventListener('input', function () {
   educationTitle1.textContent = this.value;
});
document.getElementById('inputEducationTitle2').addEventListener('input', function () {
   educationTitle2.textContent = this.value;
});


document.getElementById('inputExperience1').addEventListener('input', function () {
   experience1.textContent = this.value;
});
document.getElementById('inputExperience2').addEventListener('input', function () {
   experience2.textContent = this.value;
});
document.getElementById('inputExperienceTitle1').addEventListener('input', function () {
   experienceTitle1.textContent = this.value;
});
document.getElementById('inputExperienceTitle2').addEventListener('input', function () {
   experienceTitle2.textContent = this.value;
});




document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click(); // Trigger the file input
});

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        
        const reader = new FileReader();
        reader.onload = function(e) {
            // Set the new background image
            const profilePhoto = document.getElementById('profilePhoto');
            profilePhoto.style.backgroundImage = `url(${e.target.result})`;
            profilePhoto.style.backgroundSize = 'contain'; // Adjust size as needed
            profilePhoto.style.backgroundRepeat = 'no-repeat'; // Prevent repetition
            profilePhoto.style.backgroundPosition = 'center'; // Center the image
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});


document.getElementById('saveButton').addEventListener('click', function() {
    // Collecting data from inputs
    const name = document.getElementById('inputName').value;
    const profession = document.getElementById('inputProfession').value;
    const gender = document.getElementById('inputGender').value;
    const dob = document.getElementById('inputDOB').value;
    const phone = document.getElementById('inputPhone').value;
    const email = document.getElementById('inputEmail').value;
    const website = document.getElementById('inputWebsite').value;
    const location = document.getElementById('inputLocation').value;
    const summary = document.getElementById('inputSummary').value;

    // Update displayed values directly in the DOM
    document.getElementById('name').textContent = name;
    document.getElementById('profession').textContent = profession;
    document.getElementById('gender').textContent = gender;
    document.getElementById('dob').textContent = dob;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('website').textContent = website;
    document.getElementById('location').textContent = location;
    document.getElementById('summaryParagraph').textContent = summary;

    // Update skills and certificates
    document.getElementById('skill-1').textContent = document.getElementById('inputSkill-1').value;
    document.getElementById('skill-2').textContent = document.getElementById('inputSkill-2').value;
    document.getElementById('skill-3').textContent = document.getElementById('inputSkill-3').value;

    document.getElementById('certificate-1').textContent = document.getElementById('inputCertificate-1').value;
    document.getElementById('certificate-2').textContent = document.getElementById('inputCertificate-2').value;
    document.getElementById('certificate-3').textContent = document.getElementById('inputCertificate-3').value;

    // Update education
    document.getElementById('education1').textContent = document.getElementById('inputEducation1').value;
    document.getElementById('educationTitle1').textContent = document.getElementById('inputEducationTitle1').value;

    document.getElementById('education2').textContent = document.getElementById('inputEducation2').value;
    document.getElementById('educationTitle2').textContent = document.getElementById('inputEducationTitle2').value;

    // Update experience
    document.getElementById('experience1').textContent = document.getElementById('inputExperience1').value;
    document.getElementById('experienceTitle1').textContent = document.getElementById('inputExperienceTitle1').value;

    document.getElementById('experience2').textContent = document.getElementById('inputExperience2').value;
    document.getElementById('experienceTitle2').textContent = document.getElementById('inputExperienceTitle2').value;

    // Optional: Notify user that data has been updated
    alert('Your information has been updated!');
    const editor = document.querySelector('.editMain');

    if (editor.style.display === 'none') {
        editor.style.display = 'flex';
    } else {
        editor.style.display = 'none';
    }

});


