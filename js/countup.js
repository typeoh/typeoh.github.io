// $(function calculateTimeSpent() {
//   let then = moment([2017, 5, 29]);
//   let now = moment();
//   let durationOfWork = moment.duration(now - then);
//   var timeSpent = durationOfWork._data;

//   $('.hours').each(function () {

//     let $this = $(this),
    
//       countTo = timeSpent.hours;

//     $({ countNum: $this.text() }).animate({
//       countNum: countTo
//     },

//       {
//         duration: 2500,
//         easing: 'swing',
//         step: function () {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function () {
//           $this.text(this.countNum);
//           //alert('finished');
//         }

//       });
//   });
//   $('.days').each(function () {
//     //format days
//     let daysLeft = timeSpent.days % 7;

//     let $this = $(this),
//       countTo = daysLeft;

//     $({ countNum: $this.text() }).animate({
//       countNum: countTo
//     },

//       {
//         duration: 2500,
//         easing: 'swing',
//         step: function () {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function () {
//           $this.text(this.countNum);
//           //alert('finished');
//         }

//       });
//   });
//   $('.weeks').each(function () {
//     let weeksLeft = Math.floor(timeSpent.days / 7);

//     let $this = $(this),
//       countTo = weeksLeft;

//     $({ countNum: $this.text() }).animate({
//       countNum: countTo
//     },

//       {
//         duration: 2500,
//         easing: 'swing',
//         step: function () {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function () {
//           $this.text(this.countNum);
//           //alert('finished');
//         }

//       });
//   });
//   $('.months').each(function () {

//     let $this = $(this),
    
//       countTo = timeSpent.months;

//     $({ countNum: $this.text() }).animate({
//       countNum: countTo
//     },

//       {
//         duration: 2500,
//         easing: 'swing',
//         step: function () {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function () {
//           $this.text(this.countNum);
//           //alert('finished');
//         }

//       });
//   });
// });