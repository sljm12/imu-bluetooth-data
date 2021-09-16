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
    bluetooth.uartWriteString("Test")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serial.writeLine("")
})
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.magneticForce(Dimension.X))
    bluetooth.uartWriteString(" ")
    bluetooth.uartWriteNumber(input.magneticForce(Dimension.Y))
    bluetooth.uartWriteString(" ")
    bluetooth.uartWriteNumber(input.magneticForce(Dimension.Z))
    bluetooth.uartWriteLine("")
    basic.pause(100)
})
