import http from '../http-common';

class ReviewDataService {
    createReview(data) {
        return http.post('/CRUD',data);
    }
    
}

export default new ReviewDataService();