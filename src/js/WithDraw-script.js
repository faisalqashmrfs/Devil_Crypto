function toggleDropdown() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  function selectOption(option) {
    document.getElementById("dropbtn-text2").innerHTML = option;
  }
  ////////////////////////////////////////////////////////////
  function toggle() {
    let button = document.getElementById("toggleButton");
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    
    if (button.innerHTML === "Off") {
      button.innerHTML = "On";
      button.classList.remove("off");
      button.classList.add("on");
      text1.style.color = "rgba(255, 255, 255, 0.5)";
      text2.style.color = "rgba(255, 255, 255, 1)";
    } else {
      button.innerHTML = "Off";
      button.classList.remove("on");
      button.classList.add("off");
      text1.style.color = "rgba(255, 255, 255, 1)";
      text2.style.color = "rgba(255, 255, 255, 0.5)";
    }
  }
  ///////////////////////////////////////////////////////////////
