
document.addEventListener('DOMContentLoaded', function () {
    var toggleCertificateImage = document.querySelector('.toggleCertificates');
    var certificateContent = document.querySelector('.certificateContent');
    if (toggleCertificateImage && certificateContent) {
        toggleCertificateImage.addEventListener('click', function () {
            certificateContent.classList.toggle('visible');
            toggleCertificateImage.classList.toggle('expand');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsImage = document.querySelector('.toggleSkills');
    var skillContent = document.querySelector('.skillContent');
    if (toggleSkillsImage && skillContent) {
        toggleSkillsImage.addEventListener('click', function () {
            skillContent.classList.toggle('visible');
            toggleSkillsImage.classList.toggle('expand');
        });
    }
});



document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {

        const color = window.getComputedStyle(circle).backgroundColor;





        document.querySelector('.preview').style.backgroundColor = color;
    });
});


var toggleCertificateImage = document.querySelector('.toggleCertificates img');
var certificateContent = document.querySelector('.certificateContent');
var toggleSkillsImage = document.querySelector('.toggleSkills img');
var skillContent = document.querySelector('.skillContent');


document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {

        const color = window.getComputedStyle(circle).backgroundColor;


        document.documentElement.style.setProperty('--primary-color', color);


        document.querySelector('.preview').style.backgroundColor = color;
    });
});


function applyInversion(theme) {

    if (theme === 'dark') {
        document.querySelectorAll('.information img, .certificateHeader img, .skillHeader img').forEach(img => {
            img.style.filter = 'invert(1)';
        });


        document.getElementById('btnExpandCollapse').classList.add('inverted');
        document.getElementById('btnExpandCollapse').classList.remove('not-inverted');
    } else {
        document.querySelectorAll('.information img, .certificateHeader img, .skillHeader img').forEach(img => {
            img.style.filter = 'none';
        });


        document.getElementById('btnExpandCollapse').classList.add('not-inverted');
        document.getElementById('btnExpandCollapse').classList.remove('inverted');
    }
}


document.getElementById('light-theme').addEventListener('click', function () {
    applyInversion('light');
});

document.getElementById('dark-theme').addEventListener('click', function () {
    applyInversion('dark');
});



document.getElementById('light-theme').addEventListener('click', function () {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.getElementById('light-theme').classList.add('active');
    document.getElementById('dark-theme').classList.remove('active');


    const currentPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    document.querySelector('.preview').style.backgroundColor = currentPrimaryColor;


    applyInversion('light');
});


document.getElementById('dark-theme').addEventListener('click', function () {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.getElementById('dark-theme').classList.add('active');
    document.getElementById('light-theme').classList.remove('active');


    const currentPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    document.querySelector('.preview').style.backgroundColor = currentPrimaryColor;


    applyInversion('dark');
});


function setupCircleHover() {

    const circles = document.querySelectorAll('.circle');

    const navbar = document.getElementById('navbar');


    circles.forEach(circle => {
        circle.addEventListener('mouseover', () => {

            const accentColor = window.getComputedStyle(circle).backgroundColor;

            navbar.style.backgroundColor = accentColor;
        });

        circle.addEventListener('mouseout', () => {

            navbar.style.backgroundColor = '';
        });
    });
}


setupCircleHover();








