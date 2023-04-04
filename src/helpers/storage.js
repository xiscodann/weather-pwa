const LOCAL_STORAGE_NAME = 'wt';
const TYPE_OF_SAVE = 'localStorage';

export const saveStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    [TYPE_OF_SAVE].setItem(LOCAL_STORAGE_NAME, serializedState);
  } catch (err) {
    console.error(`Error save storage: `, err);
    return false;
  }
};

export const loadStorage = () => {
  try {
    const serializedState = [TYPE_OF_SAVE].getItem(LOCAL_STORAGE_NAME);
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    console.error(`Error load storage: `, err);
    return false;
  }
};
