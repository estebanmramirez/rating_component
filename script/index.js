function myFunction (element, color, color1) {
    const currentColor = element.style.backgroundColor;
    if (currentColor === color) {
        element.style.backgroundColor = color1;
    } else {
        element.style.backgroundColor = color;
    }
}


function sentInput () {
    alert('la encuesta fue enviada');
} 
