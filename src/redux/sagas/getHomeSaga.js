import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//getting homepage
function* getHomePage() {
    try{
        const getResponse = yield axios.get(`/api/resume/home`);
        yield put({type: 'SET_HOME', payload: getResponse.data})
    }
    catch (error){
        console.log(error); 
    }
}

function* getHomePageSaga() {
    yield takeLatest('GET_HOME', getHomePage);
}

export default getHomePageSaga;