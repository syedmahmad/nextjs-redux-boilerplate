import ServiceCalls from '../services/serviceCalls';
import { toastr } from 'react-redux-toastr';

export const initiateRegistration = async (data) => {
	try {
		let result = await ServiceCalls.post('/api/v1/auth', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "User Registration Fail";
			toastr.error("Registration", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 200) {
			return result;
		} else {
			return {}
		}
	} catch(err) {
		return {};
	}
}

export const initiateSession = async (data) => {
	try {
		let result = await ServiceCalls.post('/api/v1/auth/sign_in', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "User Registration Fail";
			toastr.error("Login", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 401) {
			const errorMsg = result?.data?.errors?.length ? result?.data?.errors[0] : "Not able to login.";
			toastr.error("Login", errorMsg);
			return {};
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 200) {
			return result;
		} else {
			return {}
		}
	} catch (err) {
		return {};
	}
}

export const setConfirmationCode = async (data) => {
	try {
		let result = await ServiceCalls.get(`/api/v1/auth/confirmation?confirmation_token=${data.confirmation_token}`, null, false);
		if (result.status == "success") {
			return result;
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else {
			throw new Error("Something went wrong.");
		}
	} catch (err) {
		return {};
	}
}

export const resendConfirmationEmail = async (data) => {
	try {
		let result = await ServiceCalls.post('/api/v1/auth/confirmation', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "Unable to send email.";
			toastr.error("Sorry", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 200) {
			return result;
		} else {
			return {}
		}
	} catch (err) {
		return {};
	}
}

export const resendForgotPasswordEmail = async (data) => {
	try {
		let result = await ServiceCalls.post('/api/v1/auth/password', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "Unable to send email.";
			toastr.error("Sorry", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 200) {
			return result;
		} else {
			return {}
		}
	} catch (err) {
		return {};
	}
}

export const UpdatePassword = async (data) => {
	try {
		let result = await ServiceCalls.update('/api/v1/auth/password', data, false);
		if (result?.status == 422 || result?.status == "error" || result?.data?.status == "error") {
			const errorMsg = (result?.data?.errors && Object.keys(result?.data?.errors).length) ? Object.values(result?.data?.errors)[0][0] : "Unable to send email.";
			toastr.error("Sorry", errorMsg);
			throw new Error(result?.data?.errors);
		} else if (result?.status == 500) {
			toastr.error("Sorry", result?.statusText);
		} else if (result?.status == 200) {
			return result;
		} else {
			return {}
		}
	} catch (err) {
		return {};
	}
}
