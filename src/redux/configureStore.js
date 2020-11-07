import { createStore, combineReducers, applyMiddleware } from "redux";
import { Campsites } from "./campsites";
import { Comments } from "./comments";
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import { InitialFeedback } from "./forms";

import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk)
  );

  return store;
};
