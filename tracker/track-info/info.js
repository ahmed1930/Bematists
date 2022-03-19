// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".options");


// selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
// });

// optionsList.forEach( e => {
//     e.addEventListener("click", () => {
//         // selected.innerHTML = e.querySelector("label").innerHTML;
//         selected.innerHTML = e.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     });
// });

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

  searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
  });

  const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  };
});
// date
isLeapYear = (year) => {
  return(year % 4 === 0 && year % 100 !== 0 && year % 400 !==0) || 
  (year % 100 === 0 && year % 400 === 0)
}
getFebDays = (years) => {
  return isLeapYear(year) ? 29:28
}
let calendar = document.querySelector('.calendar')
const month_names = ['January','February','March','April','May',
'June','July','August','September','October','November','December']

let month_picker = document.querySelector('#month-picker')

month_picker.onclick = () => {
  month_list.classList.add('show')
}
// Generate Calendar
generateCalendar =  (month, year) => {
  let calendar_days = document.querySelector('.calendar-days')
  calendar_days.innerHTML = ''
  let calendar_header_year = document.querySelector('#year')


  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let currDate = new Date()

  month_picker.innerHTML = month_names[month]
  calendar_header_year.innerHTML = year

  let first_day = new Date(month, year, 1)

  for (let i = 0; i<= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement('div')
    if (i >= first_day.getDay()) {
      day.classList.add('calendar-day-hover')
      day.innerHTML = i - first_day.getDay() + 1
      day.innerHTML += `<span></span>
                        <span></span>
                        <span></span>
                        <span></span>`
      if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
        day.classList.add('curr-date')
      }
    }
    calendar_days.appendChild(day)
  }
}

let month_list = calendar.querySelector('.month-list')
month_names.forEach((e, index) => {
  let month = document.createElement('div')
  month.innerHTML = `<div>${e}</div>`
  month.onclick = () => {
    month_list.classList.remove('show')
    curr_month.value = index
    generateCalendar(curr_month.value, curr_year.value)
  }
  month_list.appendChild(month)
})

document.querySelector('#prev-year').onclick = () => {
  --curr_year.value
  generateCalendar(curr_month.value, curr_year.value)
}
document.querySelector('#next-year').onclick = () => {
  ++curr_year.value
  generateCalendar(curr_month.value, curr_year.value)
}

let currDate = new Date()

let curr_month =   {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)
// search-term
const qrSearch = document.querySelector('.qr-search'),
input_area = qrSearch.querySelector('#input-area'),
seacrh_btn = qrSearch.querySelector('#search-btn'),
icon = qrSearch.querySelector('err-icon');

seacrh_btn.onclick = (e) => {
  let pattern = /[a-z][1-9]{5}$/;
  if(input_area.value == "" || input_area.value.lenght > "6" || !input_area.value.match(pattern)) {
    input_area.classList.add("error")
    document.getElementById('err-icn').style.opacity = 100;
  }else {
    checkTerm();
  }
  setTimeout(() => {
    // ufield.classList.remove("shake");
    // pfield.classList.remove("shake");
  }, 500);

  function checkTerm() {
    let pattern = /[a-z][1-9]{5}$/;
    if(!input_area.value.match(pattern) || input_area.value.lenght > "6"){
      input_area.classList.add("error")
      document.getElementById('err-icn').style.opacity = 100;
    }else{
        input_area.classList.remove("error")
        document.getElementById('err-icn').style.opacity = 0;
      }
  }
  input_area.onkeyup = () => {
    checkTerm();
  }
  if(!input_area.classList.contains("error")) {
    window.location.href = "track-details/track.html";
  }
}
