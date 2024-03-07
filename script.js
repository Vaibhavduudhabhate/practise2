// slider js
let currentIndex = 0;
const slideWidth = document.querySelector('.card').clientWidth + 50; 

function moveSlider(direction) {
  const slider = document.querySelector('.slider');
  const maxIndex = slider.children.length - 4; 

  currentIndex += direction;
  currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
moveSlider(0);

// Call moveSlider1 function again when the screen width changes
window.addEventListener('resize', function() {
  if (window.innerWidth >= 500) {
    currentIndex = 0; // Reset currentIndex to 0
    moveSlider(0);
  }
});




// tabs js //////////////////////////////////
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();

  let currentIndex1 = 0;
  const slideWidth1 = document.querySelector('.card1').clientWidth + 50; 

  function moveSlider1(direction) {
  const slider1 = document.querySelector('.slider1');
  const maxIndex = slider1.children.length - 4; 

  currentIndex += direction;
  currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

  slider1.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

}
moveSlider1(0);

// Call moveSlider1 function again when the screen width changes
window.addEventListener('resize', function() {
  if (window.innerWidth >= 1000) {
    currentIndex = 0; // Reset currentIndex to 0
    moveSlider1(0);
  }
});


// /////////////////////////////////////////////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ////////////////////////////////////////
var modal = document.getElementById("myModal");
var videoOverlay = document.querySelector(".video-overlay");
var video = document.querySelector(".modal iframe");
var span = document.getElementsByClassName("close")[0];

videoOverlay.onclick = function() {
  modal.style.display = "block";
  video.src = "https://www.youtube.com/embed/your_video_id"; 
}

span.onclick = function() {
  modal.style.display = "none";
  video.src = ""; 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.src = ""; 
  }
}
