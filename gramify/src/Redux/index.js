import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import storageSession from 'redux-persist/lib/storage/session'
import Reducers from "./Reducers";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "RX_SIGN_IN",
  ], // which reducer want to store
  transforms: [
    encryptTransform({
      secretKey:
        "J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const persist = persistReducer(persistConfig, Reducers);

const middleware = [thunk];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
const store = createStore(persist, enhancer);
const persistor = persistStore(store);

export { persistor, store };
