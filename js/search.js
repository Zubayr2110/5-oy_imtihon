const srch = document.getElementById('srchinp');
const srchbtn = document.getElementById('srchbtn');


srch.addEventListener("keyup", (e) => {
    e.preventDefault()
    console.log(getlocalstorage());
})
