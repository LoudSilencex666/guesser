'use strict';

System.register(['../engine/stateMachine.js'], function (_export, _context) {
  "use strict";

  var StateMachine, gameMode;
  return {
    setters: [function (_engineStateMachineJs) {
      StateMachine = _engineStateMachineJs.StateMachine;
    }],
    execute: function () {
      _export('gameMode', gameMode = new StateMachine());

      _export('gameMode', gameMode);
    }
  };
});