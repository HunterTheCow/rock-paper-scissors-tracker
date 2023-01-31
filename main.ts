function Player_1_score_1 () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
    OLED.clear()
    P1 += 1
    rounds += 1
    Update_Scoreboard()
}
function Update_Scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player 1 score" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + rounds)
}
input.onButtonPressed(Button.A, function () {
    Player_1_score_1()
})
input.onButtonPressed(Button.B, function () {
    Player_2_score_1()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function Player_2_score_1 () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . #
        . # # # .
        `)
    basic.clearScreen()
    OLED.clear()
    P2 += 1
    rounds += 1
    Update_Scoreboard()
}
function reset () {
    OLED.init(128, 64)
    rounds = 0
    P1 = 0
    P2 = 0
    Ties = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
}
let Ties = 0
let P2 = 0
let rounds = 0
let P1 = 0
reset()
