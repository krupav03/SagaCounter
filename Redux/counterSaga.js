import {takeEvery, put, delay} from 'redux-saga/effects'
import { incrementByAmount } from './counterSlice'

function* incrementByAmountSaga (action) {
    console.log('action--->')
    yield delay(1000);
    yield put (incrementByAmount(action.payload))
}

function* mySaga () {
    yield takeEvery ('counters/incrementByAmount',incrementByAmountSaga);
}

export default mySaga;