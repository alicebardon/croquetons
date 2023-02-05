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

    if (action == "like") {
      userToMatchId = slides[currentSlide].dataset.id;
      currentUserId = slides[currentSlide].dataset.currentUserId;

      fetch(`/matches/update_or_create?current_user_id=${currentUserId}&user_to_match_id=${userToMatchId}`,
        { method: 'POST'})
    } else {
      console.log(action);

    }

    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';

}
