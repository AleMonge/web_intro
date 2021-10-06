function myFunction() {
    var name = prompt('Enter a new name');

    var myButton = document.querySelector('button');
    myButton.textContent = 'Jugador 1: ' + name;
}