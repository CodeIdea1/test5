window.addEventListener('load', function() {
    var loader = document.getElementById('loading-screen');
    var content = document.getElementById('content');
    loader.style.display = 'none';
    content.style.display = 'block';
});  
// script.js
window.addEventListener('load', function() {
var loadingScreen = document.getElementById('loading-screen');
var content = document.getElementById('content');
var modelContainer = document.getElementById('model-container');

// Simulate loading delay
setTimeout(function() {
    loadingScreen.style.display = 'none'; // Hide loading animation
    content.style.display = 'block'; // Show content

    // Load and display 3D model
    loadModel().then(function() {
      modelContainer.innerHTML = '<p>3D model loaded successfully!</p>';
    });
  }, 2000); // Adjust delay as needed
});

function loadModel() {
  // Simulate loading the 3D model (replace with actual loading code)
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Resolve the promise after loading is complete
      resolve();
    }, 3000); // Adjust loading time as needed
  });
}


(() => {
    let modelViewer = document.querySelector('.main');
    let orbitCycle = [
        '75deg 55deg 4m',
        '-60deg 110deg 2m',
        '-180deg 90deg 2.4m',
        modelViewer.cameraOrbit
    ];
    setInterval(() => {
        let currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        modelViewer.cameraOrbit =
            orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 4000); 
    })(); 

    window.onscroll = function () {
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        let about = document.querySelector('.about');
        let aboutTop = about.offsetTop;
        let aboutHeight = about.offsetHeight;
        if (windowScrollTop > (aboutTop + aboutHeight - windowHeight)) {
            document.querySelector('.main').classList.add('animation');
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.add('margin-bottom');
            })
        }
        else if(windowScrollTop < (aboutTop + aboutHeight - windowHeight -500)) {
            document.querySelector('.main').classList.remove('animation');
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.remove('margin-bottom');
            })
        }
    }