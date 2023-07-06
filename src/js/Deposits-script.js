function toggleDropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function selectOption2(option) {
    document.getElementById("dropbtn-text").innerHTML = option;
  }
  ////////////////////////////////////////////////////////////
const userId = '123SASAS789';

const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: userId,
  width: 182,
  height: 182
});
function myFunction() {
    let copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Coby Text is Done :" + copyText.value);
  }