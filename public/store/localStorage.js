export function loadState() {
  try {
    const serializeState = localStorage.getItem('state');
    if(serializeState === null) {
      return undefined;
    } else {
      return JSON.parse(serializeState);
    }
  } catch(err) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch(err) {
    console.err(err);
  }
}
