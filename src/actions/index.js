import axios from 'axios';
import { FETCH_POSTS } from './action_types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'y2k-shubham';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts/?key=${API_KEY}`);
	return ({
		type: FETCH_POSTS,
		payload: request 
	});
}