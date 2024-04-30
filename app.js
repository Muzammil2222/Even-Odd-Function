var even_number = document.getElementById('even');
var odd_number = document.getElementById('odd');
var result = document.getElementById('checkResult');
function check(number) {
    var random = Math.ceil(Math.random() * 100);
    if (random % 2 == 0) {
        even.innerText = random;
        result.innerText = 'This is Even number.';
    } else {
        odd.innerHTML = random;
        result.innerText = 'This is Odd number.';
    }
}