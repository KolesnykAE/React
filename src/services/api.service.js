import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options)

const getUsers = () => {
    return axiosInstance.get('/users');
};

const getUser = (id) => {
    return axiosInstance.get('/users' + id);
};

const getComments = () => {
    return axiosInstance.get('/comments');
};

const getComment = (id) => {
    return axiosInstance.get('/comments' + id);
};

export {
    getUsers, getUser, getComment, getComments, axiosInstance
}
