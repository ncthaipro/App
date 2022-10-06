import { all, spawn, call } from 'redux-saga/effects';

export default function* rootSaga() {
    const sagas = [];

    yield all(sagas.map(saga => spawn(function*() {
        while (true) {
            try {
                yield call(saga);
                break;
            } catch (e) {
                console.log('saga error:', e);
            }
        }
    })));
}

import { combineReducers } from 'redux-immutable';
import { reducer as toastrReducer } from 'react-redux-toastr'

export default function rootReducer(asyncReducers) {
    return combineReducers({
        toastr: toastrReducer,
        ...asyncReducers
    });
};