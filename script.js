// script.js

// document.getElementById('d-resume').addEventListener('click', () => {
//     const element = document.querySelector('main').cloneNode(true)
//     element.querySelector('.hero-btn').style.display='none'
//     element.style.width='100%'
//     element.style.margin='0'
//     element.style.marginLeft='-1rem'
//     element.style.backgroundImage ='linear-gradient(to bottom, #d9dff3 , #b6c0e0)'
//     var opt = {
//         margin:       0,
//         pagebreak: {after:'section'},
//         enableLinks: true,
//         filename:     'olubanjo david-resume.pdf',
//         image:        { type: 'jpeg', quality: 1 },
//         html2canvas:  { scale: 2 },
//         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//       };
//       // New Promise-based usage:
//     html2pdf().set(opt).from(element).save();

//     // var worker = html2pdf().from(element).toPdf() .save('olubanjo david-resume.pdf');
// });


function setProgress(elementId, percent) {
    const numberElement = document.getElementById(elementId);
    const outerCircle = numberElement.closest('.outer-circle');
    let i = 0;
    let intervalID = setInterval(() => {
            const angle = (100-i) * 3.6; // 360 degrees for 100%
            outerCircle.style.background = `conic-gradient(#ddd ${angle}deg, #1c44c9 ${angle}deg 360deg)`;
            numberElement.textContent = `${i}%`;
            i++;
            if (i > percent) {
                clearInterval(intervalID);
            }
    }, 10);

    
  }
  


  
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.nav-item a');
  
    function scrollPy() {
        let currentSection = '';
    
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          console.log("section-top", sectionTop);
          const sectionHeight = section.clientHeight;
          console.log("section-height", sectionHeight);
          console.log("windows Scroll Y", window.screenY)
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
            console.log("current section", currentSection)
          }
        });
    
        navDots.forEach(dot => {
          dot.classList.remove('active');
          if (dot.getAttribute('href').substring(1) === currentSection) {
            dot.classList.add('active');
          }
        });
      }
    window.addEventListener('scroll', scrollPy);
    window.addEventListener('load', scrollPy);
  });






document.addEventListener('DOMContentLoaded', function () {
    const benefitItems = document.querySelectorAll('section');

    // Options for the IntersectionObserver
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // Margin around the root (no margin)
        threshold: 0.3 // Percentage of the target element which is visible
    };

    // IntersectionObserver callback function
    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animate');
                if(entry.target.id == 'skills'){
                    // Set progress for each skill
                    setTimeout(() => {
                        setProgress('progress1', 80); // Express.js
                        setProgress('progress2', 85); // Flask
                        setProgress('progress3', 70); // Laravel
                        setProgress('progress4', 75); // React
                        setProgress('progress5', 75); // Bootstrap
                        setProgress('progress6', 70); // Tailwind css
                        setProgress('progress7', 85); // Mysql
                        setProgress('progress8', 80); // Mongo DB
                        setProgress('progress9', 85); // Arduino
                        setProgress('progress10', 60); // Raspberry pi
                        }, 1000);
                }
                observer.unobserve(entry.target);
            }
        });
    }

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe each .benefit-item
    benefitItems.forEach(item => {
        observer.observe(item);
    });
});
