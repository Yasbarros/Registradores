var dx = 0;
var dy = 0;
var px = 0;
var py = 350;
var vel = 1.5;
var obj;
var playerImg;

function iniciar() {
  obj = document.getElementById("player");
  playerImg = obj.querySelector("img");
  window.addEventListener("keydown", teclaDw);
  window.addEventListener("keyup", teclaUp);
  window.addEventListener("blur", resetMovement);

  requestAnimationFrame(enterFrame);
}

function teclaDw(event) {
  let tecla = event.key;
  if (tecla === "ArrowLeft") {
    dx = -1;
    requestAnimationFrame(() => {
      if (playerImg.src.endsWith("leftSprite1.png")) {
        playerImg.src = "./assets/leftSprite2.png";
      } else if (playerImg.src.endsWith("leftSprite2.png")) {
        playerImg.src = "./assets/leftSprite3.png";
      } else {
        playerImg.src = "./assets/leftSprite1.png";
      }
    });
  } else if (tecla === "ArrowUp") {
    dy = -1;
    requestAnimationFrame(() => {
      if (playerImg.src.endsWith("upSprite1.png")) {
        playerImg.src = "./assets/upSprite2.png";
      } else if (playerImg.src.endsWith("upSprite2.png")) {
        playerImg.src = "./assets/upSprite3.png";
      } else {
        playerImg.src = "./assets/upSprite1.png";
      }
    });
  } else if (tecla === "ArrowRight") {
    dx = 1;
    requestAnimationFrame(() => {
      if (playerImg.src.endsWith("rightSprite1.png")) {
        playerImg.src = "./assets/rightSprite2.png";
      } else if (playerImg.src.endsWith("rightSprite2.png")) {
        playerImg.src = "./assets/rightSprite3.png";
      } else {
        playerImg.src = "./assets/rightSprite1.png";
      }
    });
  } else if (tecla === "ArrowDown") {
    dy = 1;
    requestAnimationFrame(() => {
      if (playerImg.src.endsWith("downSprite1.png")) {
        playerImg.src = "./assets/downSprite2.png";
      } else if (playerImg.src.endsWith("downSprite2.png")) {
        playerImg.src = "./assets/downSprite3.png";
      } else {
        playerImg.src = "./assets/downSprite1.png";
      }
    });
  }
}

function teclaUp(event) {
  let tecla = event.key;
  if (tecla === "ArrowLeft" && dx === -1) {
    dx = 0;
    requestAnimationFrame(() => {
      playerImg.src = "./assets/leftSprite.png";
    });
  } else if (tecla === "ArrowUp" && dy === -1) {
    dy = 0;
    requestAnimationFrame(() => {
      playerImg.src = "./assets/upSprite.png";
    });
  } else if (tecla === "ArrowRight" && dx === 1) {
    dx = 0;
    requestAnimationFrame(() => {
      playerImg.src = "./assets/rightSprite.png";
    });
  } else if (tecla === "ArrowDown" && dy === 1) {
    dy = 0;
    requestAnimationFrame(() => {
      playerImg.src = "./assets/downSprite.png";
    });
  }
}

function resetMovement() {
  dx = 0;
  dy = 0;
}
function enterFrame() {
  const mapa = document.getElementById("mapa");
  const mapaRect = mapa.getBoundingClientRect();

  const mapWidth = mapaRect.width;
  const mapHeight = mapaRect.height;

  if (dx !== 0 || dy !== 0) {
    px += dx * vel;
    py += dy * vel;

    if (px < mapaRect.left) {
      px = mapaRect.left;
    }

    if (py < mapaRect.top) {
      py = mapaRect.top;
    }

    if (px + obj.offsetWidth > mapaRect.right) {
      px = mapaRect.right - obj.offsetWidth;
    }

    if (py + obj.offsetHeight > mapaRect.bottom) {
      py = mapaRect.bottom - obj.offsetHeight;
    }

    obj.style.left = px + "px";
    obj.style.top = py + "px";
  }

  // Verificar se o jogador está dentro da div alvo "mapa1"
  const targetDivMapa1 = document.getElementById("mapa1");
  const targetRectMapa1 = targetDivMapa1.getBoundingClientRect();

  if (
    px >= targetRectMapa1.left &&
    px + obj.offsetWidth <= targetRectMapa1.right &&
    py >= targetRectMapa1.top &&
    py + obj.offsetHeight <= targetRectMapa1.bottom
  ) {
    // Jogador está dentro da div alvo "mapa1", redirecionar para outra página
    window.location.href = "mapa1.html";
  }

  // Verificar se o jogador está dentro da div alvo "info"
  const targetDivInfo = document.getElementById("info");
  const targetRectInfo = targetDivInfo.getBoundingClientRect();
  const overlay = document.getElementById("overlay");

  if (
    px >= targetRectInfo.left &&
    px + obj.offsetWidth <= targetRectInfo.right &&
    py >= targetRectInfo.top &&
    py + obj.offsetHeight <= targetRectInfo.bottom
  ) {
    // Jogador está dentro da div alvo "info", abrir o overlay
    overlay.style.display = "block";
  } else {
    // Jogador não está dentro da div alvo "info", fechar o overlay
    overlay.style.display = "none";
  }
  const targetDivInfo1 = document.getElementById("info1");
  const targetRectInfo1 = targetDivInfo1.getBoundingClientRect();
  const overlay1 = document.getElementById("overlay1");
  if (
    px >= targetRectInfo1.left &&
    px + obj.offsetWidth <= targetRectInfo1.right &&
    py >= targetRectInfo1.top &&
    py + obj.offsetHeight <= targetRectInfo1.bottom
  ) {
    // Jogador está dentro da div alvo "info", abrir o overlay
    overlay1.style.display = "block";
  } else {
    // Jogador não está dentro da div alvo "info", fechar o overlay
    overlay1.style.display = "none";
  }
  /*
  
   Verificar se o jogador está dentro da div alvo "blocker"
  const targetDivBlocker = document.getElementById("blocker");
  const targetRectBlocker = targetDivBlocker.getBoundingClientRect();

  if (
    px + obj.offsetWidth > targetRectBlocker.left &&
    px < targetRectBlocker.right &&
    py + obj.offsetHeight > targetRectBlocker.top &&
    py < targetRectBlocker.bottom
  ) {
    // Jogador está dentro da div alvo "blocker", impedir que ele ultrapasse
    if (dx !== 0) {
      px -= dx * vel;
    }
    if (dy !== 0) {
      py -= dy * vel;
    }
  }
*/
  requestAnimationFrame(enterFrame);
}

window.addEventListener("load", iniciar);
