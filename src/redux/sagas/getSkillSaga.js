import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//getting homepage
function* getSkillPage() {
    try{
        const getResponse = yield axios.get(`/api/resume/skills`);
        yield put({type: 'SET_SKILL', payload: getResponse.data})
    }
    catch (error){
        console.log(error); 
    }
}

function* getSkillPageSaga() {
    yield takeLatest('GET_SKILL', getSkillPage);
}

export default getSkillPageSaga;