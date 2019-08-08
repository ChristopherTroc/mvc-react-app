export const clearStore = 'CLEAR-STORE'; //This types have to be unique name
export const loaderUpdate = 'UPDATE-LOADER-BAR';
export const startSession = 'START-SESSION';
export const closeSession = 'CLOSE-SESSION';
export const updateHeaders = 'UPDATE-HEADERS';
export const resetHeaders = 'RESET-HEADERS';

export const removeAllStore = () => {
  return {
    type: clearStore,
    payload: true,
  };
};

export const updateLoader = (show) => {
  return {
    type: loaderUpdate,
    payload: show,
  };
};

//Session Actions
export const saveSession = (objData) => {
  return {
    type: startSession,
    payload: objData,
  };
};

export const deleteSession = () => {
  return {
    type: closeSession,
    payload: '',
  };
};

export const updateHeadersToken = (token) => {
  return {
    type: updateHeaders,
    payload: token,
  };
};

export const resetHeadersToken = () => {
  return {
    type: resetHeaders,
    payload: '',
  };
};

export default removeAllStore;
