const form = document.querySelector("form"),
ufield = form.querySelector(".user"),
uinput = ufield.querySelector("input"),
pfield = form.querySelector(".pass"),
pinput = pfield.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();
    let pattern = /^[^]+@harbor+\.[a-z]{2,3}$/;
    if(uinput.value == "" || !uinput.value.match(pattern)){
        ufield.classList.add("shake","error");
        document.getElementById("txt1").style.opacity = 100;
    }else{
        checkEmail();
    }
    if(pinput.value == ""){
        pfield.classList.add("shake","error");
        document.getElementById("txt2").style.opacity = 100;
    }

    setTimeout(() => {
        ufield.classList.remove("shake");
        pfield.classList.remove("shake");
    }, 500);

    uinput.onkeyup = () => {
        checkEmail();
    }

    function checkEmail() {
        let pattern = /^[^]+@harbor+\.[a-z]{2,3}$/;
        if(!uinput.value.match(pattern)){
            ufield.classList.add("error");
            document.getElementById("txt1").style.opacity = 100;
            document.getElementById("txt1").innerHTML = "Please Enter a valid E-mail";
        }else{
            ufield.classList.remove("error")
            document.getElementById("txt1").style.opacity = 0;
        }
    }

    pinput.onkeyup = () => {
           if(pinput.value == ""){
            pfield.classList.add("error");
            document.getElementById("txt2").style.opacity = 100;
            document.getElementById("err-icn2").style.opacity = 100;
        }else{
            // ufield.classList.remove("error")
            document.getElementById("txt2").style.opacity = 0;
            document.getElementById("err-icn2").style.opacity = 0;
        }
    }
    if(!ufield.classList.contains("error") && !pfield.classList.contains("error")) {
        window.location.href = "../dashboard/dashboard.html";
    }
}
