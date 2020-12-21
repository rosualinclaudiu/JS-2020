var hour = new Date().getHours()
hour = 10  //doar ca sa putem modifica ora sistemului

// varianta 1

// if (hour < 12 && hour > 1) {
//     document.write("Buna dimineata!")
// } else if (hour >= 12 && hour < 18) {
//     document.write("Buna ziua!")
// } else if (hour >= 18 && hour <= 23) {
//     document.write("Buna seara!")
// } else {
//     document.write("Somn usor!")
// }

if (hour < 2) {
    document.write("Somn usor!")
} else if (hour < 12) {
    document.write("Buna dimineata!")
} else if (hour < 18) {
    document.write("Buna ziua!")
} else {
    document.write("Buna seara!")
}

year = document.getElementById('year').value // pentru exercitiu cu generatii pe ani

if (hour = 19) {
    document.write("Bine ai venit la curs!")
}

