// let prevAudio = document.getElementById("audio");
// console.log(prevAudio.src);

// const audio = document.querySelector("audio");
// let prevAudio = audio.src;
// let currentAudio = audio.src;
// let changePrevious = false;
// let isSkiped = false;

// audio.addEventListener("play", () => {
//   console.log("Audio started playing");
//   if (isSkiped === true) {
//     isSkiped = false;
//     prevAudio = currentAudio;
//     currentAudio = audio.src;
//     return;
//   }
//   if (changePrevious === false && currentAudio != audio.src) {
//     prevAudio = currentAudio;
//     currentAudio = audio.src;
//   }
//   if (changePrevious === true) {
//     changePrevious = false;
//   }
//   console.log("prevAudio: " + prevAudio);
//   console.log("currentAudio: " + currentAudio);
// });

// Source - https://stackoverflow.com/a/44213036
// Posted by Gibolt, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-15, License - CC BY-SA 4.0
document.addEventListener("keydown", (event) => {
  // Source - https://stackoverflow.com/a/44213036
  // Posted by Gibolt, modified by community. See post 'Timeline' for change history
  // Retrieved 2025-11-15, License - CC BY-SA 4.0
  if (event.ctrlKey) {
    switch (event.key) {
      case "ArrowLeft":
        // previousAudio();
        break;
      case "ArrowRight":
        skip();
        break;
    }
  }
  switch (event.key) {
    case "ArrowLeft":
      backwards();
      // Left pressed
      break;
    case "ArrowRight":
      forwards();
      // Right pressed
      break;
  }
});

// Source - https://stackoverflow.com/a/24278561
// Posted by mohamedrias, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-15, License - CC BY-SA 3.0
function skip() {
  const skipBtn = document.querySelector('button[title="player skip"]');
  skipBtn.click();
  isSkiped = true;
  console.log("skip");
}

// function previousAudio() {
//   const temp = currentAudio;
//   audio.src = prevAudio;
//   currentAudio = prevAudio;
//   prevAudio = temp;
//   changePrevious = true;
//   audio.load();
//   // audio.play();
// }

function forwards() {
  const input = document.getElementById("seek");
  if (input.value < 20) {
    input.value = 20;
  } else if (input.value < 40) {
    input.value = 40;
  } else if (input.value < 60) {
    input.value = 60;
  } else if (input.value < 80) {
    input.value = 80;
  } else if (input.value < 100) {
    input.value = 100;
  } else if (input.value < 120) {
    input.value = 120;
  }
  input.dispatchEvent(new Event("input", { bubbles: true }));
  console.log(input.value);
}

function backwards() {
  const input = document.getElementById("seek");
  input.value -= input.step * 10;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  console.log(input.value);
}
