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
// date drop
const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const searchBox = selected.nextElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
});
// table change
document.getElementById('card1').addEventListener('click',
function() {
   var table2 = document.getElementById('board2');
   var table3 = document.getElementById('board3');
   var hide_box = document.getElementById('hide-box');
   var drop_box = document.getElementById('drop-hide');
   var drop_box2 = document.getElementById('drop-hide2');

   hide_box.classList.remove('hide-box');
   drop_box.classList.remove('drop-hide');
   drop_box2.classList.add('drop-hide2');

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_tomorrow2.classList.add('board3-3');
   table_tomorrow2.classList.remove('board');
   table_yesterday2.classList.add("board3-2");
   table_yesterday2.classList.remove("board");

   table2.classList.remove("board2");
   table2.classList.add("board");

   table3.classList.add("board3");
   table3.classList.remove("board");

   document.querySelector('.board').style.display = "none";
   document.querySelector('.board').style.marginTop = "10px";
   document.querySelector('#card1-text').style.color = "#fff";
   document.querySelector('#card1-text2').style.color = "#fff";
   document.querySelector('#card1-icon').style.color = "#fff";
   document.querySelector('#card1').style.backgroundColor = "#6d0911";

   document.querySelector('#card2-text').style.color = "black";
   document.querySelector('#card2-text2').style.color = "#8390A2";
   document.querySelector('#card2-icon').style.color = "#6d0911";
   document.querySelector('#card2').style.backgroundColor = "#fff";

   document.querySelector('#card4-text').style.color = "black";
   document.querySelector('#card4-text2').style.color = "#8390A2";
   document.querySelector('#card4-icon').style.color = "#6d0911";
   document.querySelector('#card4').style.backgroundColor = "#fff";
})
document.getElementById('card4').addEventListener('click',
function() {
   var table2 = document.getElementById('board2');
   var table3 = document.getElementById('board3');
   var hide_box = document.getElementById('hide-box');
   var drop_box = document.getElementById('drop-hide');
   var drop_box2 = document.getElementById('drop-hide2');

   hide_box.classList.add('hide-box');
   drop_box.classList.add('drop-hide');
   drop_box2.classList.add('drop-hide2');

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_tomorrow2.classList.add('board3-3');
   table_tomorrow2.classList.remove('board');
   table_yesterday2.classList.add("board3-2");
   table_yesterday2.classList.remove("board");

   table2.classList.add("board2");
   table2.classList.remove("board");

   table3.classList.add("board3");
   table3.classList.remove("board");

   document.querySelector('.board').style.display = "inline-grid";
   document.querySelector('.board').style.marginTop = "35px";

   document.querySelector('#card4-text').style.color = "#fff";
   document.querySelector('#card4-text2').style.color = "#fff";
   document.querySelector('#card4-icon').style.color = "#fff";
   document.querySelector('#card4').style.backgroundColor = "#6d0911";

   document.querySelector('#card1-text').style.color = "black";
   document.querySelector('#card1-text2').style.color = "#8390A2";
   document.querySelector('#card1-icon').style.color = "#6d0911";
   document.querySelector('#card1').style.backgroundColor = "#fff";

   document.querySelector('#card2-text').style.color = "black";
   document.querySelector('#card2-text2').style.color = "#8390A2";
   document.querySelector('#card2-icon').style.color = "#6d0911";
   document.querySelector('#card2').style.backgroundColor = "#fff";
   
})
document.getElementById('card2').addEventListener('click',
function() {
   var table2 = document.getElementById('board2');
   var table3 = document.getElementById('board3');
   var hide_box = document.getElementById('hide-box');
   var drop_box = document.getElementById('drop-hide');
   var drop_box2 = document.getElementById('drop-hide2');

   hide_box.classList.remove('hide-box');
   drop_box.classList.add('drop-hide');
   drop_box2.classList.remove('drop-hide2');

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_tomorrow2.classList.add('board3-3');
   table_tomorrow2.classList.remove('board');
   table_yesterday2.classList.add("board3-2");
   table_yesterday2.classList.remove("board");

   table2.classList.add("board2");
   table2.classList.remove("board");

   table3.classList.remove("board3");
   table3.classList.add("board");

   document.querySelector('.board').style.display = "none";
   document.querySelector('.board').style.marginTop = "10px";
   document.querySelector('#card2-text').style.color = "#fff";
   document.querySelector('#card2-text2').style.color = "#fff";
   document.querySelector('#card2-icon').style.color = "#fff";
   document.querySelector('#card2').style.backgroundColor = "#6d0911";

   document.querySelector('#card1-text').style.color = "black";
   document.querySelector('#card1-text2').style.color = "#8390A2";
   document.querySelector('#card1-icon').style.color = "#6d0911";
   document.querySelector('#card1').style.backgroundColor = "#fff";

   document.querySelector('#card4-text').style.color = "black";
   document.querySelector('#card4-text2').style.color = "#8390A2";
   document.querySelector('#card4-icon').style.color = "#6d0911";
   document.querySelector('#card4').style.backgroundColor = "#fff";
})

// date & table change
var yesterday = document.getElementById('yesterday-option');
var today = document.getElementById('today-option');
var tomorrow = document.getElementById('tomorrow-option');

var yesterday2 = document.getElementById('yesterday-option2');
var today2 = document.getElementById('today-option2');
var tomorrow2 = document.getElementById('tomorrow-option2');

var table2 = document.getElementById('board2');
var table3 = document.getElementById('board3');
var table_yesterday = document.getElementById('board2-2');
var table_tomorrow = document.getElementById('board2-3');
var table_yesterday2 = document.getElementById('board3-2');
var table_tomorrow2 = document.getElementById('board3-3');

yesterday.onclick = function() {
   document.getElementById("date-change").textContent="18/3/2022";

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');

   table_yesterday.classList.remove("board2-2");
   table_yesterday.classList.add("board");

   table2.classList.add("board2");
   table2.classList.remove("board");

   table3.classList.add("board3");
   table3.classList.remove("board");
}
today.onclick = function() {
   document.getElementById("date-change").textContent="19/3/2022";

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');

   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");

   table2.classList.remove("board2");
   table2.classList.add("board");

   table3.classList.add("board3");
   table3.classList.remove("board");
}
tomorrow.onclick = function() {
   document.getElementById("date-change").textContent="20/3/2022";

   table_tomorrow.classList.remove('board2-3');
   table_tomorrow.classList.add('board');

   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");

   table2.classList.add("board2");
   table2.classList.remove("board");

   table3.classList.add("board3");
   table3.classList.remove("board");
}

yesterday2.onclick = function() {
   document.getElementById("date-change").textContent="18/3/2022";

   table_yesterday2.classList.remove('board3-2')
   table_yesterday2.classList.add('board');

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_tomorrow2.classList.add('board3-3')
   table_tomorrow2.classList.remove('board');
   table2.classList.add("board2");
   table2.classList.remove("board");
   table3.classList.add("board3");
   table3.classList.remove("board");
}
today2.onclick = function() {
   document.getElementById("date-change").textContent="19/3/2022";

   table3.classList.remove("board3");
   table3.classList.add("board");

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_tomorrow2.classList.add('board3-3')
   table_tomorrow2.classList.remove('board');
   table2.classList.add("board2");
   table2.classList.remove("board");
   table_yesterday2.classList.add('board3-2')
   table_yesterday2.classList.remove('board');
}
tomorrow2.onclick = function() {
   document.getElementById("date-change").textContent="20/3/2022";

   table_tomorrow2.classList.remove('board3-3')
   table_tomorrow2.classList.add('board');

   table_tomorrow.classList.add('board2-3');
   table_tomorrow.classList.remove('board');
   table_yesterday.classList.add("board2-2");
   table_yesterday.classList.remove("board");
   table_yesterday2.classList.add('board3-2')
   table_yesterday2.classList.remove('board');
   table2.classList.add("board2");
   table2.classList.remove("board");
   table3.classList.add("board3");
   table3.classList.remove("board");
}
// map pop up
// popup
document.getElementById('view-location').addEventListener('click', 
function() {
   document.querySelector('.map-bg').style.display = "flex"; 
});
// popup close
document.getElementById('close2').addEventListener('click', 
function() {
   document.querySelector('.map-bg').style.display = "none";
})