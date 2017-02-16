/**
 * Crossword configuration file.
 * 
 * This configuration data can be fetched from server using API call.
 */
var crosswordConfig = {
    "sizeX": 9, // Number of horizontal cells in the crossword
    "sizeY": 9, // Number of vertical cells in the crossword
    "across": [ // Array containing ‘across’ questions
        {
            "number": 1,
            /*
            Question Number.
            Same number is shown at the top left of the cell 
            For ex: 
            “1” shown in the first row first column in the image above
            */
            "x": 1,
            /*
            Horizontal position of the crossword answer on the board.
            For the question number 1 in the ACROSS section of the image above, x value will be “1”
            */
            "y": 1,
            /*
            Vertical position of the crossword answer on the board.
            For the question number 1 in the ACROSS section of the image above, x value will be “1”
            */
            "desc": "Clip, stroke, nut",
            "length": 9
        }
    ],
    "down": [ // Array containing ‘down’ questions
        {
            "number": 2,
            "x": 2,
            "y": 1,
            "desc": "Price, home, trust",
            "length": 4
        }
    ]
};
