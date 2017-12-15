document.addEventListener('DOMContentLoaded', function() {
  var navIcon = document.querySelector('.nav-icon');
  var links = document.querySelector('.links');
  var anchors = document.querySelectorAll('.links a');

  for(var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function() {
      links.classList.remove('click');
      navIcon.classList.remove('open');
    });
  }

  navIcon.addEventListener('click', function() {
    this.classList.toggle('open');
    links.classList.toggle('click');
  });//navIcon end

  window.addEventListener('resize', function() {
    if(window.outerWidth > 800) {
      links.classList.remove('click');
      navIcon.classList.remove('open');
    }
  });
});
