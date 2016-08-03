/*
    Structure du keymap
    v1.0

keymap          [
Key                 [code,which,elem,
KeyArrayDown            [
KeyAction                   [actionRef,conditionRef],...
                        ],
KeyArrayPress           [
KeyAction                   [actionRef,conditionRef],...
                        ],
KeyArrayUp              [
KeyAction                   [actionRef,conditionRef],...
                        ]
                    ],...
                ]
 */

var keymap = [
    ["KeyQ", 81, "q",
        [   ["Add_q","Write_None"],
            ["Add_Q","Write_Shift"]
        ],[],[]],
    ["KeyW", 87, "w",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyE", 69, "e",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyR", 82, "r",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyT", 84, "t",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyY", 90, "z",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyU", 85, "u",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyI", 73, "i",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyO", 79, "o",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyP", 80, "p",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyA", 65, "a",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyS", 83, "s",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyD", 68, "d",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyF", 70, "f",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyG", 71, "g",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyH", 72, "h",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyJ", 74, "j",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyK", 75, "k",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyL", 76, "l",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyZ", 89, "y",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyX", 88, "x",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyC", 67, "c",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyV", 86, "v",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyB", 66, "b",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyN", 78, "n",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["KeyM", 77, "m",
        [   ["Add_w","Write_None"],
            ["Add_W","Write_Shift"]
        ],[],[]],
    ["Space", 32, " ",
        [   ["Add_Space","Write"]
        ],[],[]],
    ["Period", 190, "."],
    ["Comma", 188, ","],
    ["Slash", 173, "-"],
    ["ArrowUp", 38, "ArrowUp"],
    ["ArrowDown", 40, "ArrowDown"],
    ["ArrowLeft", 37, "ArrowLeft"],
    ["ArrowRight", 39, "ArrowRight"],
    ["ShiftLeft", 16, "Shift"],
    ["ShiftRight", 16, "Shift"],
    ["ControlLeft", 17, "Control"],
    ["ControlRight", 17, "Control"],
    ["AltLeft", 18, "Alt"],
    ["Backspace", 8, "Backspace"],
    ["Enter", 13, "Enter"],
    ["Delete", 46, "Delete"],
    ["Insert", 45, "Insert"],
    ["Home", 36, "Home"],
    ["End", 35, "End"],
    ["PageUp", 33, "PageUp"],
    ["PageDown", 34, "PageDown"],
    ["Digit1", 49, "1"],
    ["Digit2", 50, "2"],
    ["Digit3", 51, "3"],
    ["Digit4", 52, "4"],
    ["Digit5", 53, "5"],
    ["Digit6", 54, "6"],
    ["Digit7", 55, "7"],
    ["Digit8", 56, "8"],
    ["Digit9", 57, "9"],
    ["Digit0", 48, "0"],
    ["Minus", 222, "'"]
]
