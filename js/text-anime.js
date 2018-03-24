// TODO Refactor & DRY 

// Animated subjects

const animatedLetters = document.querySelector(' .txt-rotate');
const watchTitle = scrollMonitor.create(animatedLetters);

const countUpAnimationOne = document.querySelector(' .count-up');
const watchCountOne = scrollMonitor.create(countUpAnimationOne);

const countUpAnimationTwo = document.querySelector(' .skill-title');
const watchCountTwo = scrollMonitor.create(countUpAnimationTwo);

const countUpAnimationThree = document.querySelector(' .ideal');
const watchCountThree = scrollMonitor.create(countUpAnimationThree);

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
  console.log(this.toRotate)
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  console.log('what is? ', i);
  var fullTxt = this.toRotate[i];
  console.log('full text', fullTxt)

  // if on the second loop (3), 
  if (this.loopNum < 3) {
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      console.log('deleting')
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      console.log('writing')
    }
  } else {
    // drawUnicorn();
    return;
  }
  // } else {
  //   this.txt = fullTxt.substring(0, this.txt.length + 1);
  //   setTimeout(function () { drawUnicorn(); }, 1000);
  //   return;
  // }


  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = Math.floor(1000 + Math.random() * 1000);
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    console.log(this.loopNum);
    delta = 300;
  }


setTimeout(function () {
  that.tick();
}, delta);
};

triggerType = function () {
  var elements = document.getElementsByClassName('txt-rotate');

  // Loop through the letters
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    console.log(period);
    // if theres text to rotate, new object  
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // Inject CSS for type line
  var typeLine = document.createElement("style");
  typeLine.type = "text/css";
  typeLine.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #29378B }";
  document.body.appendChild(typeLine);
};

//Title Animation conversion into letters

$('.title-one .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

// Animation Triggers

const triggerTextAnimation = function () {

  anime.timeline({ loop: false })
    .add({
      targets: ['.title-one .letter', '.title-one'],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: function (el, i) {
        return 34 * (i + 1)
      },
      offset: 1000,
    })
    .add({
      targets: ['.pre-rotate'],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 500,
    })
  setTimeout(() => { triggerType() }, 5000)
}
//******************************************** TO DO add scroll animation

// const drawArrow = function () {
//   anime({
//     targets: ['.txt-rotate'],
//     opacity: [1, 0],
//     easing: "easeOutExpo",
//     duration: 200,
//   })
//   anime.timeline()
//   .add({
//     targets: " .scroll-svg",
//     opacity: [0.4, 1],
//     duration: 500,
//   })
//   .add({
//     loop: true,
//     targets: ".scroll-text", 
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeOutQuart",
//     duration: 2000,
//     delay: function (el, i) {
//       return i * 250;
//     },
//     direction: "both",
//   })
//   anime({
//     loop: true,
//     targets: ".confetti",
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeOutQuart",
//     duration: 500,
//     delay: function (el, i) {
//       return i * 250;
//     },
//     direction: "both",
//   })

// }
const triggerCountUpOne = () => {
  let then = moment([2017, 5, 29]);
  let now = moment();
  let durationOfWork = moment.duration(now - then);
  var timeSpent = durationOfWork._data;

  $('.hours').each(function () {

    let $this = $(this),

      countTo = timeSpent.hours;

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
  });
  $('.days').each(function () {
    //format days
    let daysLeft = timeSpent.days % 7;

    let $this = $(this),
      countTo = daysLeft;

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
  });
  $('.weeks').each(function () {
    let weeksLeft = Math.floor(timeSpent.days / 7);

    let $this = $(this),
      countTo = weeksLeft;

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
  });
  $('.months').each(function () {

    let $this = $(this),

      countTo = timeSpent.months;

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 2500,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
  });
}

const triggerCountUpTwo = () => {
  var design = { countTo: '0%' };
  var frontEnd = { countTo: '0%' };
  var marketing = { countTo: '0%' };
  var admin = { countTo: '0%' };

  var skillsArray = [
    { skillLabel: ' .design', objName: design, start: '0', finish: '15%' },
    { skillLabel: ' .front-end', objName: frontEnd, start: '0', finish: '30%' },
    { skillLabel: ' .marketing', objName: marketing, start: '0', finish: '35%' },
    { skillLabel: '.admin', objName: admin, start: '0', finish: '15%' }
  ]

  //Count Up skill percentage and scale

  for (let skill of skillsArray) {

    anime({
      targets: skill.objName,
      countTo: skill.finish,
      round: 1,
      easing: 'easeInOutQuad',
      duration: function () {
        return parseInt(skill.finish) * 100;
      },
      update: function () {
        var el = document.querySelector(skill.skillLabel);
        el.innerHTML = skill.objName.countTo;
      }
    })
    anime({
      targets: skill.skillLabel,
      scale: function () {
        return parseInt(skill.finish) / 10;
      },
      easing: 'easeInOutQuad',
      duration: function () {
        return parseInt(skill.finish) * 100;
      },
    })
  }


  anime({
    targets: ' .heading-large',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 3000,
  })
  anime({
    targets: ' .heading-small',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 500,
  })
  anime({
    targets: ' .heading',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 1500,
  })
}

const triggerCountUpThree = () => {
  var design = { countTo: '0%' };
  var frontEnd = { countTo: '0%' };
  var marketing = { countTo: '0%' };
  var admin = { countTo: '0%' };

  console.log('feeling triggered')
  var idealArray = [
    { skillLabel: ' .design-ideal', objName: design, start: '0', finish: '40%' },
    { skillLabel: ' .front-end-ideal', objName: frontEnd, start: '0', finish: '40%' },
    { skillLabel: ' .marketing-ideal', objName: marketing, start: '0', finish: '20%' },
  ]
  for (let skill of idealArray) {

    anime({
      targets: skill.objName,
      countTo: skill.finish,
      round: 1,
      easing: 'easeInOutQuad',
      duration: function () {
        return parseInt(skill.finish) * 100;
      },
      update: function () {
        var el = document.querySelector(skill.skillLabel);
        el.innerHTML = skill.objName.countTo;
      }
    })
    anime({
      targets: skill.skillLabel,
      scale: function () {
        return parseInt(skill.finish) / 10;
      },
      easing: 'easeInOutQuad',
      duration: function () {
        return parseInt(skill.finish) * 100;
      },
    })
  }
  anime({
    targets: ' .heading-large',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 3000,
  })
  anime({
    targets: ' .heading-small',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 500,
  })
  anime({
    targets: ' .heading',
    scale: [0.4, 1],
    easing: 'easeInOutQuad',
    duration: 1500,
  })
}

let triggered = false;
// Watchers
watchTitle.enterViewport(function (triggered) {
  triggerTextAnimation()
});

watchCountOne.enterViewport(function () {
  triggerCountUpOne()
});

watchCountTwo.enterViewport(function () {
  triggerCountUpTwo()
});

watchCountThree.enterViewport(function () {
  triggerCountUpThree()
});

watchTitle.exitViewport(function (triggered) {
  // anime.remove(animatedLetters);
});
watchCountOne.exitViewport(function () {
  console.log('I have left the viewport');
});

