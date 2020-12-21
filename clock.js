var hour = new Date().getHours()

if (hour<12) {
    document.write("Buna dimineata!")
} else if (hour > 12 && hour < 18) {
    document.write("Buna ziua!")
} else if (hour > 18 && hour < 24) {
    document.write("Buna seara!")
} else {
    document.write("Somn usor!")
}
