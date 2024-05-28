var isChecked = false;
function onClickEyeIcon() {
  var Eye = document.getElementById("Eye");
  var Password = document.getElementById("Password");
  isChecked = !isChecked;
  Eye.style.backgroundImage = isChecked
    ? "url('Assests/preview-open.svg')"
    : "url('Assests/preview-close-one.svg')";
  Password.setAttribute("type", isChecked ? "text" : "password");
}
