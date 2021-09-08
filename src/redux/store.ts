import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const store: Store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;
