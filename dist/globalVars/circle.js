"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var x, y, radius, strokeWidth, rgba, sprites, imageRadius, imageStrokeWidth;
    return {
        setters: [],
        execute: function () {
            _export("x", x = 0);

            _export("y", y = 0);

            _export("radius", radius = 1);

            _export("strokeWidth", strokeWidth = 1.5);

            _export("rgba", rgba = []);

            _export("sprites", sprites = {
                circles: [],
                credits: [],
                spritesCounter: 0
            });

            _export("imageRadius", imageRadius = 1.5);

            _export("imageStrokeWidth", imageStrokeWidth = 3);

            _export("x", x);

            _export("y", y);

            _export("radius", radius);

            _export("strokeWidth", strokeWidth);

            _export("rgba", rgba);

            _export("sprites", sprites);

            _export("imageStrokeWidth", imageStrokeWidth);

            _export("imageRadius", imageRadius);
        }
    };
});