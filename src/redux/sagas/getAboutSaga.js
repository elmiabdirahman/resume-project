import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//getting homepage
function* getAboutPage() {
    try{
        const getResponse = yield axios.get(`/api/resume/about`);
        yield put({type: 'SET_ABOUT', payload: getResponse.data})
    }
    catch (error){
        console.log(error); 
    }
}

function* getAboutPageSaga() {
    yield takeLatest('GET_ABOUT', getAboutPage);
}

export default getAboutPageSaga;