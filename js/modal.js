
$("#experience").click(function () {
  expandModal()
});

let width = ($(window).width() * 0.9)
let height = $(window).height()

const expandModal = () => {
  anime.timeline({})
    .add({
      targets: ' #experience',
      width: width,
      backgroundColor: '#FFF',
      easing: 'easeInOutQuad',
    })
    .add({
      targets: ' #experience',
      height: height,
      backgroundColor: '#FFF',
      easing: 'easeInOutQuad',
      offset: 1000,
    });

  setTimeout(() => { openModal(); }, 10);
}

const openModal = () => {
  $(' .modal-button').toggleClass('open')
}

$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});