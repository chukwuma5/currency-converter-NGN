      function search_animal() {
        let input = document.getElementById("searchBar").value;
        input = input.toLowerCase();
        let x = document.getElementsByClassName("animal");

        for (i = 0; i < x.length; i++) {
          if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
          } else {
            x[i].style.display = "block";
          }
        }
      }