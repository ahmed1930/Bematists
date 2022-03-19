document.getElementById('type-1').addEventListener('click',
function() {
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');


    var row1 = document.getElementById('row1');
    var row2 = document.getElementById('row2');
    var row3 = document.getElementById('row3');

    var type1 = document.getElementById('type-1');
    var type2 = document.getElementById('type-2');
    var type3 = document.getElementById('type-3');

    row1.classList.add('active-row');
    row2.classList.remove('active-row');
    row3.classList.remove('active-row');
    document.getElementById("card1-text").textContent="3000";
    document.getElementById("card2-text").textContent="0";
    // document.getElementById("card3-text").textContent="3000";
    document.getElementById("card4-text").textContent="32h";
})
document.getElementById('type-2').addEventListener('click',
function() {
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');


    var row1 = document.getElementById('row1');
    var row2 = document.getElementById('row2');
    var row3 = document.getElementById('row3');

    var type1 = document.getElementById('type-1');
    var type2 = document.getElementById('type-2');
    var type3 = document.getElementById('type-3');

    row1.classList.remove('active-row');
    row2.classList.add('active-row');
    row3.classList.remove('active-row');
    document.getElementById("card1-text").textContent="0";
    document.getElementById("card2-text").textContent="2000";
    // document.getElementById("card3-text").textContent="3000";
    document.getElementById("card4-text").textContent="24h";
})
document.getElementById('type-3').addEventListener('click',
function() {
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');


    var row1 = document.getElementById('row1');
    var row2 = document.getElementById('row2');
    var row3 = document.getElementById('row3');

    var type1 = document.getElementById('type-1');
    var type2 = document.getElementById('type-2');
    var type3 = document.getElementById('type-3');

    row1.classList.remove('active-row');
    row2.classList.remove('active-row');
    row3.classList.add('active-row');
    document.getElementById("card1-text").textContent="1250";
    document.getElementById("card2-text").textContent="500";
    // document.getElementById("card3-text").textContent="3000";
    document.getElementById("card4-text").textContent="27h";
})