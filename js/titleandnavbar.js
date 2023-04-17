
var navbar = $(`<nav class="navbar navbar-expand-lg bg-white" data-aos="fade-down" data-aos-duration='700'>
<div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src="" class="logo" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
                <a class="nav-link active mx-3" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item d-none1">
                <a class="nav-link mx-3" href="addplayer.html">Add Player</a>
            </li>
            <li class="nav-item d-none1">
                <a class="nav-link mx-3" href="addteam.html">Add Team</a>
            </li>
        </ul>
        <div class="d-flex d-none1 search-input" role="search">
        <input class="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search">
        <div class="autocom-box"></div>
        <button class="btn btn-outline-success search-icon">Search</button>
        </div>
    </div>
</div>
</nav>`);

$('header').append(navbar);

var logo = 'img/logo/logo.png';

$('.logo').attr('src', logo);
$('.logo').attr('href', logo);
$('title').text('vivo ipl')
$('body:not("body#index") .d-none1').remove();


// Attach a scroll event handler to the window
$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  var header = $(".navbar");

  // Check if scroll position is above 100 pixels
  if (scrollTop > 100) {
    header.addClass("fixed"); // Add a CSS class to fix the navbar
  } else if (scrollTop > 75) {
    header.addClass("pre-fixed"); // Add a CSS class to fix the navbar
  }
  else {
    header.removeClass("fixed"); // Remove the CSS class to unfix the navbar
    header.removeClass("pre-fixed"); // Remove the CSS class to unfix the navbar
  }
});

AOS.init();