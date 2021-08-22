music.start_melody(music.built_in_melody(Melodies.NYAN), MelodyOptions.ONCE)

def on_forever():
    while input.pin_is_pressed(TouchPin.P0):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # . . #
                        . # # # #
                        . # . # .
        """)
        music.play_tone(349, music.beat(BeatFraction.WHOLE))
basic.forever(on_forever)

def on_forever2():
    while input.pin_is_pressed(TouchPin.P1):
        basic.show_leds("""
            . . . . .
                        . # # . .
                        . # . . .
                        . # # # #
                        . # . # #
        """)
        music.play_tone(440, music.beat(BeatFraction.WHOLE))
basic.forever(on_forever2)

def on_forever3():
    while input.pin_is_pressed(TouchPin.P2):
        basic.show_leds("""
            . . . . .
                        . # # . .
                        . # . . .
                        . # # # .
                        . # . . #
        """)
        music.play_tone(523, music.beat(BeatFraction.WHOLE))
basic.forever(on_forever3)
