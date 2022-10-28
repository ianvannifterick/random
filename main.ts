input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
basic.showLeds(`
    . . . . .
    # . . . #
    # # . # #
    . # # # .
    # . # . #
    `)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.showString("hoi!")
let hoeHardIsHetGeluid = 255
for (let index = 0; index < 51; index++) {
    basic.pause(100)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    1,
    hoeHardIsHetGeluid,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), SoundExpressionPlayMode.InBackground)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    hoeHardIsHetGeluid += 0 - 5
    basic.clearScreen()
}
basic.forever(function () {
	
})
