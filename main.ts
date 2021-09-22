bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # # # #
        # . . . .
        # . . . .
        # . . . .
        . # # # #
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
	
})
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.acceleration(Dimension.X))
    bluetooth.uartWriteString(" ")
    bluetooth.uartWriteNumber(input.acceleration(Dimension.Y))
    bluetooth.uartWriteString(" ")
    bluetooth.uartWriteNumber(input.acceleration(Dimension.Z))
    bluetooth.uartWriteString(" ")
    bluetooth.uartWriteNumber(input.acceleration(Dimension.Strength))
    bluetooth.uartWriteLine("")
    basic.pause(100)
})
