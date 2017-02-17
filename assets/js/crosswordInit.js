/**
 * Crossword init file.
 * 
 * It caontains configuration data that can also be fetched from server.
 */

/* global Crossword */
var crosswordConfig = {
    "sizeX": 9, // Number of horizontal cells in the crossword
    "sizeY": 9, // Number of vertical cells in the crossword
    "across": [ // Array containing 'across' questions
        {
            "number": 1,
            /*
            Question Number.
            Same number is shown at the top left of the cell 
            For ex: 
            "1" shown in the first row first column in the image above
            */
            "x": 1,
            /*
            Horizontal position of the crossword answer on the board.
            For the question number 1 in the ACROSS section of the image above, x value will be "1"
            */
            "y": 1,
            /*
            Vertical position of the crossword answer on the board.
            For the question number 1 in the ACROSS section of the image above, x value will be "1"
            */
            "desc": "Clip, stroke, nut",
            "length": 9
        },
        {
            "number": 5,
            "x": 1,
            "y": 3,
            "desc": "Drive, brake, hard",
            "length": 4
        },
        {
            "number": 7,
            "x": 6,
            "y": 3,
            "desc": "Right, line, step",
            "length": 4
        },
        {
            "number": 8,
            "x": 3,
            "y": 5,
            "desc": "District, tennis, room",
            "length": 5
        },
        {
            "number": 11,
            "x": 1,
            "y": 7,
            "desc": "Crop, flow, ready",
            "length": 4
        },
        {
            "number": 12,
            "x": 6,
            "y": 7,
            "desc": "Break, number, money",
            "length": 4
        },
        {
            "number": 13,
            "x": 1,
            "y": 9,
            "desc": "Odd, seeker, buming",
            "length": 9
        },
    ],
    "down": [ // Array containing 'down' questions
        {
            "number": 2,
            "x": 2,
            "y": 1,
            "desc": "Price, home, trust",
            "length": 4
        },
        {
            "number": 3,
            "x": 6,
            "y": 1,
            "desc": "Bank, judgement, public",
            "length": 7
        },
        {
            "number": 4,
            "x": 8,
            "y": 1,
            "desc": "Killer, pink, like",
            "length": 4
        },
        {
            "number": 6,
            "x": 4,
            "y": 3,
            "desc": "Horse, evening, line",
            "length": 7
        },
        {
            "number": 9,
            "x": 2,
            "y": 6,
            "desc": "Wing, shoe, curtain",
            "length": 4
        },
        {
            "number": 10,
            "x": 8,
            "y": 6,
            "desc": "In, tolerance, hour",
            "length": 4
        }
    ]
};

// Initialize crossword.
Crossword.init(crosswordConfig);
