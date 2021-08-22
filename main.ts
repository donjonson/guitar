music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
basic.forever(function on_forever() {
    while (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . # . . #
                        . # # # #
                        . # . # .
        `)
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function on_forever2() {
    while (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
                        . # # . .
                        . # . . .
                        . # # # #
                        . # . # #
        `)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function on_forever3() {
    while (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . . . .
                        . # # . .
                        . # . . .
                        . # # # .
                        . # . . #
        `)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
