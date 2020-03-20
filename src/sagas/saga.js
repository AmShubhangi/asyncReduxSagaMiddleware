import { delay, takeLatest, put, takeEvery } from 'redux-saga/effects';

function* ageUpAsync() {
    yield put({ type: "LOADING_ASYNC" })
    yield delay(3000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 })
}

export function* watchAgeUp() {
    yield takeLatest('AGE_UP', ageUpAsync);
}