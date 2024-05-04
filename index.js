const $input = document.getElementById('photo')
//const $note = document.querySelector('.card')
const $bullet = document.querySelector('.notebook-front')
const $dark = document.querySelector('.dark')

$input.type = "file";
$input.addEventListener("cancel", () => {
  console.log("Cancelled.");
});
$input.addEventListener("change", (e) => {
  if ($input.files.length == 1) {
    //$note.style.backgroundImage = `url(${URL.createObjectURL($input.files[0])})`
    $bullet.style.backgroundImage = `url(${URL.createObjectURL($input.files[0])})`
    $dark.style.backgroundImage = `url(${URL.createObjectURL($input.files[0])})`
  }
});
$input.click();