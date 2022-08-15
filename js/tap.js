      const toggleButton = document.getElementsByClassName("toggle-button")[0];
      const pillsTabContent = document.getElementsByClassName("pills-group")[0];
      const pillsTabContect = document.getElementsByClassName("pil-group")[0];
      const pillsTabContents = document.getElementsByClassName("disappear")[0];
      const pillsTabContentso = document.getElementsByClassName("header-down-arrow")[0];

       toggleButton.addEventListener("click", () => {
        pillsTabContent.classList.add("active-one");
        pillsTabContents.classList.add("active-two");
        pillsTabContect.classList.add("active-three");
        pillsTabContentso.classList.add("active-four");
        toggleButton.classList.toggle("toggle");
      });