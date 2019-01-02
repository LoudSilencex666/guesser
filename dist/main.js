'use strict';

System.register(['./globalVars/gameMode.js', './states/update.js', './states/menuSizing.js', './states/menu.js', './states/gameSizing.js', './states/gameWord.js', './states/canvasSizing.js', './states/gameDoubleWord.js', './states/gameSentence.js', './states/gameImage.js', './states/getImage.js', './states/gameCreditsSetup.js', './states/gameCredits.js', './states/clearingScene.js', './states/wordShuffle.js', './states/checkingAnswer.js', './states/postGameStats.js', './globalVars/canvas.js', './globalVars/font.js', './UI/menu-events.js', './utills/randomixes.js'], function (_export, _context) {
    "use strict";

    var gameMode, update, menuSizing, menu, gameSizing, gameWord, canvasSizing, gameDoubleWord, gameSentence, gameImage, getImage, gameCreditsSetup, gameCredits, clearingScene, wordShuffle, checkingAnswer, postGameStats, canvas, font, UI, randomixImage, init;
    return {
        setters: [function (_globalVarsGameModeJs) {
            gameMode = _globalVarsGameModeJs.gameMode;
        }, function (_statesUpdateJs) {
            update = _statesUpdateJs.update;
        }, function (_statesMenuSizingJs) {
            menuSizing = _statesMenuSizingJs.menuSizing;
        }, function (_statesMenuJs) {
            menu = _statesMenuJs.menu;
        }, function (_statesGameSizingJs) {
            gameSizing = _statesGameSizingJs.gameSizing;
        }, function (_statesGameWordJs) {
            gameWord = _statesGameWordJs.gameWord;
        }, function (_statesCanvasSizingJs) {
            canvasSizing = _statesCanvasSizingJs.canvasSizing;
        }, function (_statesGameDoubleWordJs) {
            gameDoubleWord = _statesGameDoubleWordJs.gameDoubleWord;
        }, function (_statesGameSentenceJs) {
            gameSentence = _statesGameSentenceJs.gameSentence;
        }, function (_statesGameImageJs) {
            gameImage = _statesGameImageJs.gameImage;
        }, function (_statesGetImageJs) {
            getImage = _statesGetImageJs.getImage;
        }, function (_statesGameCreditsSetupJs) {
            gameCreditsSetup = _statesGameCreditsSetupJs.gameCreditsSetup;
        }, function (_statesGameCreditsJs) {
            gameCredits = _statesGameCreditsJs.gameCredits;
        }, function (_statesClearingSceneJs) {
            clearingScene = _statesClearingSceneJs.clearingScene;
        }, function (_statesWordShuffleJs) {
            wordShuffle = _statesWordShuffleJs.wordShuffle;
        }, function (_statesCheckingAnswerJs) {
            checkingAnswer = _statesCheckingAnswerJs.checkingAnswer;
        }, function (_statesPostGameStatsJs) {
            postGameStats = _statesPostGameStatsJs.postGameStats;
        }, function (_globalVarsCanvasJs) {
            canvas = _globalVarsCanvasJs.canvas;
        }, function (_globalVarsFontJs) {
            font = _globalVarsFontJs;
        }, function (_UIMenuEventsJs) {
            UI = _UIMenuEventsJs;
        }, function (_utillsRandomixesJs) {
            randomixImage = _utillsRandomixesJs.randomixImage;
        }],
        execute: function () {
            init = function init() {
                gameMode.addState('menuSizing', menuSizing);
                gameMode.addState('menu', menu);
                gameMode.addState('gameSizing', gameSizing);
                gameMode.addState('gameWord', gameWord);
                gameMode.addState('gameDoubleWord', gameDoubleWord);
                gameMode.addState('gameSentence', gameSentence);
                gameMode.addState('gameImage', gameImage);
                gameMode.addState('getImage', getImage);
                gameMode.addState('gameCreditsSetup', gameCreditsSetup);
                gameMode.addState('gameCredits', gameCredits);
                gameMode.addState('clearingScene', clearingScene);
                gameMode.addState('wordShuffle', wordShuffle);
                gameMode.addState('checkingAnswer', checkingAnswer);
                gameMode.addState('postGameStats', postGameStats);

                gameMode.changeState('menuSizing');

                update();
            };

            init();
        }
    };
});