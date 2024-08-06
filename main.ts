basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.play(music.stringPlayable("G B G B F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.showIcon(IconNames.Ghost)
    music.play(music.tonePlayable(466, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . # #
        . . # . .
        # # # # #
        . . # . .
        # # . # #
        `)
})
