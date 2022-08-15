//first-one
      const toggleButtonOn = document.getElementsByClassName("close-button")[0];
      const pillsTabContentOn = document.getElementsByClassName("second-closed")[0];

      toggleButtonOn.addEventListener("click", () => {
        pillsTabContentOn.classList.add("active-four");
        toggleButtonOn.classList.toggle("toggle");
      });

      //second-one
    const toggleButtonOne = document.getElementsByClassName("no-button")[0];
    const pillsTabContentOne = document.getElementsByClassName("remove-me")[0];

      toggleButtonOne.addEventListener("click", () => {
        pillsTabContentOne.classList.add("active-four");
        toggleButtonOne.classList.toggle("toggle");
      });

      //third-one
    const toggleButtonTwo = document.getElementsByClassName("no-display")[0];
    const pillsTabContentTwo = document.getElementsByClassName("delete-me")[0];

      toggleButtonTwo.addEventListener("click", () => {
        pillsTabContentTwo.classList.add("active-four");
        toggleButtonTwo.classList.toggle("toggle");
      });