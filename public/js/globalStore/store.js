const globalState = {};

    // authReducer.js
    const authReducer = (state = { isAuthenticated: false, user: null }, action) => {
      switch (action.type) {
        case 'LOGIN':
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
          };
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            user: null,
          };
        default:
          return state;
      }
    };

    // actions.js
    const login = (user) => ({
      type: 'LOGIN',
      payload: user,
    });

    const logout = () => ({
      type: 'LOGOUT',
    });

    // store.js
    const createStore = (reducer) => {
      let state = globalState;
      let listeners = [];

      const getState = () => state;

      const dispatch = (action) => {
        state = reducer(state, action);
        localStorage.setItem('state', JSON.stringify(state));
        listeners.forEach((listener) => listener());
      };

      const subscribe = (listener) => {
        listeners.push(listener);
      };

      // Load state from local storage if it exists
      const storedState = localStorage.getItem('state');
      if (storedState) {
        state = JSON.parse(storedState);
      }

      return {
        getState,
        dispatch,
        subscribe,
      };
    };

    const rootReducer = (state, action) => ({
      auth: authReducer(state.auth, action),
      // Add other reducers here
    });

    const store = createStore(rootReducer);

    window.store = store;