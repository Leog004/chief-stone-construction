// What we build
export const projectsListHover = () => {
  const allProjectsItems = document.querySelectorAll(".wwb-ul li");

  allProjectsItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      allProjectsItems.forEach((element) => {
        element.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
};

// Estimated Form
export const estimatedFormSteps = () => {
  const buttonContinue = document.querySelector("#estFormContinue");
  const buttonBack = document.querySelector("#estFormBack");
  const buttonSubmit = document.querySelector("#estFormSubmit");
  const formStep1 = document.querySelector('.est-form-step-1');
  const formStep2 = document.querySelector('.est-form-step-2');

  buttonContinue.addEventListener("click", (e) => {
    e.preventDefault();
    formStep1.style.display = "none";
    formStep2.style.display = "block";

    buttonContinue.style.display = "none";
    buttonBack.style.display = "block";
    buttonSubmit.style.display = "block";
  });

  buttonBack.addEventListener("click", (e) => {
    e.preventDefault();
    formStep2.style.display = "none";
    formStep1.style.display = "block";
    
    buttonContinue.style.display = "block";
    buttonBack.style.display = "none";
    buttonSubmit.style.display = "none";
  });
};

// Contact Us Navigation
export const contactUsNavigation = () => {
  const allContactItems = document.querySelectorAll('.contact-us .c-data ul li');
  const allContactCards = document.querySelectorAll('.c-cards .card');

  allContactItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      allContactItems.forEach((element) => {
        element.getElementsByTagName('a')[0].classList.remove("active");
      });
      item.getElementsByTagName('a')[0].classList.add("active");

      const index = Array.from(item.parentNode.children).indexOf((item))
      
      if ( index == 0) {
          allContactCards.forEach((element) => {
            element.classList.remove("active");
          });
          allContactCards[0].classList.add("active");
      };
      if ( index == 1) {
          allContactCards.forEach((element) => {
            element.classList.remove("active");
          });
          allContactCards[1].classList.add("active");
      };
      if ( index == 2) {
          allContactCards.forEach((element) => {
            element.classList.remove("active");
          });
          allContactCards[2].classList.add("active");
      };
      if ( index == 3) {
          allContactCards.forEach((element) => {
            element.classList.remove("active");
          });
          allContactCards[3].classList.add("active");
      };
      if ( index == 4) {
          allContactCards.forEach((element) => {
            element.classList.remove("active");
          });
          allContactCards[4].classList.add("active");
      };
    });
  });
}