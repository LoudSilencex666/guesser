"use strict";

System.register([], function (_export, _context) {
    "use strict";

    function pixelCutter(arr, amount, position) {

        console.log(arr, amount, position, arr[position]);
        for (var i = 0; i < amount; i++) {
            arr[position + i].active = false;
        }
    }

    _export("pixelCutter", pixelCutter);

    return {
        setters: [],
        execute: function () {}
    };
});