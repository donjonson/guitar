music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
basic.forever(function () {
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
basic.forever(function () {
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
basic.forever(function () {
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
