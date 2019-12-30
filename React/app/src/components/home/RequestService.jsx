import React, {Component} from 'react';
import axios from 'axios';
import '../../App.css';

export default class RequestService extends Component {

    retrieveAllRequests() {
        console.log('Executing Service - Retrieve All Requests');
        return axios.get(`/Requests`);
    }
    retrieveRequest(name, id) {
        console.log('Executing Service - Retrieve Request #' + id);
        return axios.get(`/Requests/${id}`);
    }
    deleteRequest(name, id) {
        console.log('Executing Service - Deleting Request #' + id);
        return axios.delete(`/Requests/${id}`);
    }
    updateRequest(name, id, req) {
        console.log('Executing Service - Updating Request #' + id);
        return axios.put(`/Requests/${id}`, req);
    }
    createRequest(name, req) {
        console.log('Executing Service - Create Request');
        return axios.post(`/Requests`, req);
    }

}
