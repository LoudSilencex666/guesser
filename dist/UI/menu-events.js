"use strict";

System.register(["../globalVars/gameMode.js", "../globalVars/words.js", "../globalVars/score.js"], function (_export, _context) {
    "use strict";

    var gameMode, answer, results, menu, inGameMenu, stage, score, postGameStats, easyDiff, mediumDiff, hardDiff, image, imageContainer, credits, backButton, input, inputButton, continueButton;
    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_globalVarsWordsJs) {
            answer = _globalVarsWordsJs.answer;
        }, function (_globalVarsScoreJs) {
            results = _globalVarsScoreJs.results;
        }],
        execute: function () {
            menu = document.querySelector('.menu-container');
            inGameMenu = document.querySelector('.ui-container');
            stage = document.querySelector('.stage');
            score = document.querySelector('.score');
            postGameStats = document.querySelector('.post-game-stats');
            easyDiff = document.querySelector('.easy');

            easyDiff.addEventListener('click', function () {

                menu.style.display = 'none';
                inGameMenu.style.display = 'flex';
                stage.style.display = 'flex';
                score.style.display = 'flex';

                var option = 'gameWord';
                gameMode.changeState('gameSizing', option);
            });

            mediumDiff = document.querySelector('.medium');

            mediumDiff.addEventListener('click', function () {

                menu.style.display = 'none';
                inGameMenu.style.display = 'flex';
                stage.style.display = 'flex';
                score.style.display = 'flex';

                var option = 'gameDoubleWord';
                gameMode.changeState('gameSizing', option);
            });

            hardDiff = document.querySelector('.hard');

            hardDiff.addEventListener('click', function () {

                menu.style.display = 'none';
                inGameMenu.style.display = 'flex';
                stage.style.display = 'flex';
                score.style.display = 'flex';

                var option = 'gameSentence';
                gameMode.changeState('gameSizing', option);
            });

            image = document.querySelector('.image');
            imageContainer = document.querySelector('.image-container');

            image.addEventListener('click', function () {

                menu.style.display = 'none';
                imageContainer.style.display = 'block';

                var option = 'getImage';
                gameMode.changeState('gameSizing', option);
            });

            credits = document.querySelector('.credits');

            credits.addEventListener('click', function () {

                menu.style.display = 'none';

                var option = 'gameCreditsSetup';
                gameMode.changeState('gameSizing', option);
            });

            backButton = document.querySelector('.fa-gear');

            backButton.addEventListener('click', function () {
                menu.style.display = 'flex';
                inGameMenu.style.display = 'none';
                stage.style.display = 'none';
                score.style.display = 'none';

                var option = 'menuSizing';
                gameMode.changeState('clearingScene', option);
            });

            input = document.querySelector('#answer');
            inputButton = document.querySelector('.button');

            inputButton.addEventListener('click', function (evt) {
                evt.preventDefault();
                answer[0] = input.value.toUpperCase();
                input.value = '';

                var option = gameMode.currentState;
                gameMode.changeState('checkingAnswer', option);
            });

            continueButton = document.querySelector('.continue-button');

            continueButton.addEventListener('click', function (evt) {
                menu.style.display = 'flex';
                postGameStats.style.display = 'none';
                results.postGameStats = true;

                var option = 'menuSizing';
                gameMode.changeState('clearingScene', option);
            });
        }
    };
});