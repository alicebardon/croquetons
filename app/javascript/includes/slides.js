  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var activeSlide = document.querySelector('#slides .slide:first-child');
  console.log(activeSlide);

  // activeSlide.classList.add("red");

    activeSlide.classList.add("showing");


  const dislike = document.getElementById("dislike");
  console.log(dislike);

  dislike.addEventListener("click", (event) => {
    goToSlide('dislike');
  });

  const like = document.getElementById("like");
  like.addEventListener("click", (event) => {
    goToSlide('like');
  });


function goToSlide(action) {
  activeSlide.classList.remove("showing");
  console.log(activeSlide);
  activeSlide = activeSlide.nextElementSibling(".slide");

  if (action == "like") {
  } else {

  }

  activeSlide.classList.add("showing");
  // slides[currentSlide].className = 'slide';
  // currentSlide = (currentSlide+1)%slides.length;
  // slides[currentSlide].className = 'slide showing';
}
