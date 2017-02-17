# CrosswordJS
A lightweight JavaScript plugin for crossword puzzle game to be used on web. Total file size is just 1KB (minified & gzipped).

## Requirements
Requires jQuery (latest version). You can get latest version of jQuery from https://jquery.com/

## Configuration
Basic format of configuration as shown below:

### Configuration data object:
```javascript
{
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
        }
    ],
    "down": [ // Array containing 'down' questions
        {
            "number": 2,
            "x": 2,
            "y": 1,
            "desc": "Price, home, trust",
            "length": 4
        }
    ]
};
```

### Basic HTML structure
```HTML
<div class="main">
    <div class="crossword"></div>
    <div class="crossword-clues"></div>
</div>
<div class="loader">
    <div class="loader-message">Loading...</div>
</div>
```

### Initialize
```javascript
Crossword.init(CONFIGURATION_DATA_OBJECT);
```

## Support
Supports responsive and works on all latest devices.

## Resources
### Favicon
Open source favicon generated from http://www.favicon.cc/

## Licence
This project is open source under an MIT license.
