import axios from 'axios'
import {API_HOST} from '../config/api'
import authService from './auth'


export default class examsService {
    constructor() {
        this.auth = new authService()
        this.getHistories = this.getHistories.bind(this)
        this.deleteHistory = this.deleteHistory.bind(this)
        this.getAvailableExams = this.getAvailableExams.bind(this)
        this.startExam = this.startExam.bind(this)
        this.endExam = this.endExam.bind(this)
    }

    getHistories() {
        return axios.get(`${API_HOST}/onlexam/histories/`, {
            headers: this.auth.addHeader(),
        });
    }

    deleteHistory(historyId) {
        return axios.delete(
            `${API_HOST}/onlexam/histories/${historyId}/`,
            {
                headers: this.auth.addHeader(),
            }
        );
    }

    getAvailableExams() {
        return axios.get(`${API_HOST}/onlexam/available-exams/`, {
            headers: this.auth.addHeader(),
        });
    }

    startExam(availableExamId) {
        return axios.post(`${API_HOST}/onlexam/start/`,
            {
                availableExamId: availableExamId,
            },{
                headers: this.auth.addHeader(),
            }
        );
    }

    endExam(answersData) {
        return axios.post(`${API_HOST}/onlexam/end/`, answersData, {
            headers: this.auth.addHeader(),
        });
    }
}


