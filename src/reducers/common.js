const defaultState = {
  appName: "Cool Town",
  atricles: null,
  token: null
};

export default (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "APP_LOAD":
      return {
        ...state,
        token: action.token || null,
        currentUser: action.payload ? action.payload.user : null,
        appLoaded: true
      };
    case "REDIRECT":
      return { ...state, redirectTo: null };
    case "LOGOUT":
      return {
        ...state,
        redirectTo: "/",
        token: null,
        currentUser: null
      };
    case "LOGIN":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.srror ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case "REGISTER":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case "SETTINGS_SAVED":
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        currentUser: action.error ? null : action.payload.user
      };
    default:
      return state;
  }
};
