// licht voor woonkamer (1)
const slider = document.getElementById("slider");
const value = document.getElementById("value");
value.innerHTML = slider.value;
slider.oninput = function () {
  value.innerHTML = this.value;
}

// licht voor keuken (2)
const slider2 = document.getElementById("slider2");
const value2 = document.getElementById("value2");
value2.innerHTML = slider2.value;
slider2.oninput = function () {
  value2.innerHTML = this.value;
}

// licht voor gang (3)
const slider3 = document.getElementById("slider3");
const value3 = document.getElementById("value3");
value3.innerHTML = slider3.value;
slider3.oninput = function () {
  value3.innerHTML = this.value;
}

// licht voor badkamer (4)
const slider4 = document.getElementById("slider4");
const value4 = document.getElementById("value4");
value4.innerHTML = slider4.value;
slider4.oninput = function () {
  value4.innerHTML = this.value;
}

// licht voor slaapkamer (5)
const slider5 = document.getElementById("slider5");
const value5 = document.getElementById("value5");
value5.innerHTML = slider5.value;
slider5.oninput = function () {
  value5.innerHTML = this.value;
}

// licht voor zolder (6)
const slider6 = document.getElementById("slider6");
const value6 = document.getElementById("value6");
value6.innerHTML = slider6.value;
slider6.oninput = function () {
  value6.innerHTML = this.value;
}







function checkValues() {

  let value = document.getElementById("slider");
  let value2 = document.getElementById("slider2");
  let value3 = document.getElementById("slider3");
  let value4 = document.getElementById("slider4");
  let value5 = document.getElementById("slider5");
  let value6 = document.getElementById("slider6");

  let sum = (value.value + +value2.value + +value3.value + +value4.value + +value5.value + +value6.value);

  const intervalId = setInterval(() => {

    value = document.getElementById("slider");
    value2 = document.getElementById("slider2");
    value3 = document.getElementById("slider3");
    value4 = document.getElementById("slider4");
    value5 = document.getElementById("slider5");
    value6 = document.getElementById("slider6");

    sum = (+value.value + +value2.value + +value3.value + +value4.value + +value5.value + +value6.value);

    if (sum >= 38) {
      document.getElementById("energieFoto").setAttribute("src", "img/sad.png");
      return;
    }

    else if (sum < 23) {
      document.getElementById("energieFoto").setAttribute("src", "img/happy.png");
      return;
    }

    else {
      document.getElementById("energieFoto").setAttribute("src", "img/neutraal.png");
      return;
    }

  }, 1000);
}



checkValues();