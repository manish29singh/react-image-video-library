import { fork } from "redux-saga/effects";
import watchSearchMedia from "./watchers";

export default function* rootSaga() {
  yield fork(watchSearchMedia);
}
