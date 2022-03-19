// popup
document.getElementById('profile').addEventListener('click', 
function() {
   document.querySelector('.bg-trans').style.display = "flex"; 
});
// popup close
document.getElementById('close').addEventListener('click', 
function() {
   document.querySelector('.bg-trans').style.display = "none";
})
// map pop up
document.getElementById('view-location1').addEventListener('click', 
function() {
   document.querySelector('.map-bg').style.display = "flex"; 
});
// popup close
document.getElementById('map-close1').addEventListener('click', 
function() {
   document.querySelector('.map-bg').style.display = "none";
});

document.getElementById('view-location2').addEventListener('click', 
function() {
   document.querySelector('.map-bg2').style.display = "flex";
});
// popup close
document.getElementById('map-close2').addEventListener('click', 
function() {
   document.querySelector('.map-bg2').style.display = "none";
});

document.getElementById('view-location3').addEventListener('click', 
function() {
   document.querySelector('.map-bg3').style.display = "flex";
});
// popup close
document.getElementById('map-close3').addEventListener('click', 
function() {
   document.querySelector('.map-bg3').style.display = "none";
});