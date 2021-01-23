import Store from '../store';
import axios from "axios"; 

class ServiceCalls {
	static headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

	static get(path, data = null, additionalOptions=false) {
		const url = process.env.API_ORIGIN + path;

		return axios({
			method: 'get',
			url: url,
			headers: {
				...ServiceCalls.headers,
				'Authorization': additionalOptions ? `Bearer ${Store.getState().authReducer.token}` : '',
			},
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			return err.response;
		});
	}

	static post(path, data, additionalOptions = false) {
		let url = process.env.API_ORIGIN + path;
		return axios({
			method: 'post',
			url: url,
			headers:
			{
				...ServiceCalls.headers,
				'Authorization': additionalOptions ? `Bearer ${Store.getState().authReducer.token}` : '',
			},
			data: data,
		})
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			})
	}

	static update(path, data, additionalOptions = false) {
		let url = process.env.API_ORIGIN + path;
		return axios({
			method: 'put',
			url: url,
			headers:
			{
				...ServiceCalls.headers,
				'Authorization': additionalOptions ? `Bearer ${Store.getState().authReducer.token}` : '',
			},
			data: data,
		})
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err.response;
			})
	}
}

export default ServiceCalls;
