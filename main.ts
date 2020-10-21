input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello" + "There.")
    basic.showString("Are you " + "paying attention?")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
basic.clearScreen()
basic.forever(function () {
	
})
