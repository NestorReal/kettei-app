import {call, put, takeLatest} from 'redux-saga/effects';
import request from '../utils/request';
import * as constants from '../constants/actionTypes';


function* calculateSaga() {
    try {
      const requestURL = `hola`;
      const response = yield call(request, requestURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        yield put({
            type: constants.CALCULATE_SUCCESS,
            response,
        });
      }
    } catch (error) {
      yield put({
        type: constants.CALCULATE_FAILED,
      });
    }
  }

const calculationsSagas = [
    takeLatest(constants.CALCULATE_INIT, calculateSaga),
  ];
  
  export default calculationsSagas;