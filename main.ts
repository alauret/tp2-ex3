function bouger_diode_dans_colonne (colonne: string) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        let colonne = 0
        if (led.point(colonne, ligne)) {
            let liste = 0
            led.unplot(colonne, ligne)
            ligne = liste / 0
        }
    }
}
let direction = [1, 1, 1, 1, -1]
for (let i = 0; i <= 4; i++) {
    led.plot(i, i)
}
basic.forever(function () {
    for (let colonne_boucle = 0; colonne_boucle <= 4; colonne_boucle++) {
        bouger_diode_dans_colonne(colonne_boucle)
    }
    basic.pause(200)
})
