//when dispatch an action need to catch it in the middle

import { takeEvery, put, delay } from 'redux-saga/effects';

//generator function that render yields in sequence
function* ageUpAsync() {
    //delay for 2 secs
    yield delay(2000);
    //must different type to prevent infinite loop
    //once catch the action, don't dispatch the same action in reducer
    yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp() {
    //observe the action that is dispatched with every
    yield takeEvery('AGE_UP', ageUpAsync);
}