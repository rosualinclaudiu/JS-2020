class Color {
    red
    green
    blue

    constructor(red, green, blue) {
        this.red = red
        this.green = green
        this.blue = blue
    }

    // creaza o noua culoare aleatorie
    // (constructor static)
    static random() {
        return new Color(random(255), random(255), random(255))
    }
}

class Disk {
    size
    color
    constructor(size, color) {
        this.size = size
        this.color = color
    }
    isBiggerThan(disk) {
        return this.size > disk.size
    }
}