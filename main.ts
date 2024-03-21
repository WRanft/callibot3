calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 48)
calliBot2.setRgbLed(C2RgbLed.All, 16, 0, 0)
basic.pause(5000)
motors.motorCommand(MotorCommand.Coast)
basic.forever(function () {
    music.playMelody("- - - B - - - - ", 120)
})
