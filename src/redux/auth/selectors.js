export const selectUser = state => state.auth.user;
export const selectIsLogged = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing