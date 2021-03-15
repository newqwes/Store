export const saveToLocalStorage = state => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) return;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
