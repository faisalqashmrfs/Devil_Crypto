// this code for 
    window.onload = function() {
    showSection(1);
  };
    function showSection(sectionNumber) {
    var buttons = document.getElementsByClassName("fq-button");
    var sections = document.getElementsByClassName("fq-section");
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("fq-active");
    }
    
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    
    buttons[sectionNumber - 1].classList.add("fq-active");
    sections[sectionNumber - 1].style.display = "block";
  }