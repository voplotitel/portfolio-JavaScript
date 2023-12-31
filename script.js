gsap.from(".startOne", {
  y: -200,
  duration: 1,
  delay: 1,
  stagger: .5,
  opacity: 0,
})

gsap.to("h1", {
  text: "My name is Anton. I am web developer.",
  duration: 5,
  repeat: -1,
  repeatDelay: 1,
  ease: "bounce.inOut",
  yoyo: true,
  delay: 5
})

const zerOne = document.querySelector("#zer1");
const zerTwo = document.querySelector("#zer2");
const zerTree = document.querySelector("#zer3");
const zerFour = document.querySelector("#zer4");
const zerFive = document.querySelector("#zer5");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const tree = document.querySelector("#tree");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

one.addEventListener("click", ()=> {
  zerOne.style.display = "flex";
  zerTwo.style.display = "none";
  zerTree.style.display = "none";
  zerFour.style.display = "none";
  zerFive.style.display = "none";
});

two.addEventListener("click", ()=> {
  zerOne.style.display = "none";
  zerTwo.style.display = "flex";
  zerTree.style.display = "none";
  zerFour.style.display = "none";
  zerFive.style.display = "none";
});

tree.addEventListener("click", ()=> {
  zerOne.style.display = "none";
  zerTwo.style.display = "none";
  zerTree.style.display = "flex";
  zerFour.style.display = "none";
  zerFive.style.display = "none";
});
four.addEventListener("click", ()=> {
  zerOne.style.display = "none";
  zerTwo.style.display = "none";
  zerTree.style.display = "none";
  zerFour.style.display = "flex";
  zerFive.style.display = "none";
});
five.addEventListener("click", ()=> {
  zerOne.style.display = "none";
  zerTwo.style.display = "none";
  zerTree.style.display = "none";
  zerFour.style.display = "none";
  zerFive.style.display = "flex";
});

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 100,
          "duration": 2,
          "opacity": 8,
          "speed": 1
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });