'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = { ...state };
  const statesHistory = [];

  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(currentState, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const keyToRemove of key.keysToRemove) {
        delete currentState[keyToRemove];
      }
    } else if (key.type === 'clear') {
      currentState = {};
    }
    statesHistory.push({ ...currentState });
  }

  return statesHistory;
}

module.exports = transformStateWithClones;
