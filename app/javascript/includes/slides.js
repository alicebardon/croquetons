  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var activeSlide = document.querySelector('#slides .slide:first-child');

  // Showing first slide
  activeSlide.classList.add("showing");

  // When button is clicked go to next slide
  const dislike = document.getElementById("dislike");
  dislike.addEventListener("click", (event) => {
    goToSlide('dislike');
  });

  const like = document.getElementById("like");
  like.addEventListener("click", (event) => {
    goToSlide('like');
  });

  function goToSlide(action) {

    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';

    // if (action == "like") {
    //   console.log(action);
    // } else {
    //   console.log(action);

    // }

}
