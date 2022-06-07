import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootReducer } from "../reducer/rootReducer.js";
// 1) create a store
export const store = createStore(rootReducer, composeWithDevTools());
