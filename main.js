const siyvebi = ["rustavi", "mcxeta", "chiatura", "tyibuli", "batumi", "qutaisi", "tbilisi"];

let shesavsebi;
let gamosacnobi;
let mcdelobebi;
const maxmcdelobebi = 6;

const dawyeba = document.querySelector("#dawyeba");
const gamoicani = document.querySelector("#gamoicani");
const airchie = document.querySelector("#airchie");
const restart = document.querySelector("#restart");
const sityva = document.querySelector("#sityva");
const mcdeloba = document.querySelector("#mcdeloba");

function tamashisdawyeba() {
  shesavsebi = rendomulisityva();
  gamosacnobi = Array(shesavsebi.length).fill("_");
  mcdelobebi = maxmcdelobebi;

  dawyeba.style.display = "none";
  gamoicani.style.display = "inline-block";
  airchie.style.display = "inline-block";
  restart.style.display = "inline-block";


  ganaxleba();
}

function rendomulisityva() {
  const random = Math.floor(Math.random() * siyvebi.length);
  return siyvebi[random];
}

function ganaxleba() {
  sityva.innerHTML = gamosacnobi.join(" ");
  mcdeloba.innerHTML = `darchenili mcdelobebi: ${mcdelobebi}`;
}

function asosarcheva() {
  const aso = gamoicani.value.toLowerCase();
  gamoicani.value = "";

  if (!aso || aso.length !== 1) {
    displayAlert(`chaweret aso`, "error");
    return;
  }

  if (shesavsebi.includes(aso)) {
    for (let i = 0; i < shesavsebi.length; i++) {
      if (shesavsebi[i] === aso) {
        gamosacnobi[i] = aso;
      }
    }
  } else {
    mcdelobebi--;
  }

  if (gamosacnobi.join("") === shesavsebi) {
    displayAlert(`gilocavt`, "sucsuccess");
    dasasruli();
  } else if (mcdelobebi === 0) {
    displayAlert(`tqven waaget gamosacnobi sityva iyo: ${shesavsebi}`);
    dasasruli();
  } else {
    ganaxleba();
  }
}

function dasasruli() {
  gamoicani.style.display = "none";
  airchie.style.display = "none";
}

function restartgame() {
  tamashisdawyeba();
}

function displayAlert(title, icon, text = "") {
  Swal.fire({ title, icon, text });
}
dawyeba.addEventListener("click", tamashisdawyeba);
airchie.addEventListener("click", asosarcheva);
restart.addEventListener("click", restartgame);
