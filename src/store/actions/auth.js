import { toastr } from 'react-redux-toastr';
import { initiateRegistration, 
		initiateSession, 
		resendConfirmationEmail,
		resendForgotPasswordEmail,
		UpdatePassword
	} from "../../api/auth";

export function StartLoadingState() {
	return {
		type: 'START_LOADING_STATE'
	}
};

export function RegistrationFail() {
	return {
		type: 'REGISTRATION_FAIL'
	}
};

export function SessionFail() {
	return { 
		type: 'SESSION_FAIL' 
	}
}

export const ResendConfirmEmailDone = (payload) => {
	return {
		type: "RESEND_CONFIRMATION_EMAIL_DONE",
		payload
	}
}

export const ResendConfirmPasswordDone = (payload) => {
	return {
		type: "RESEND_CONFIRMATION_PASSWORD_DONE",
		payload
	}
}

export const ResendConfirmEmailFail = () => {
	return {
		type: "RESEND_CONFIRMATION_EMAIL_FAIL"
	}
}

export const ResendConfirmPasswordFail = () => {
	return {
		type: "RESEND_CONFIRMATION_PASSWORD_FAIL"
	}
}

export const UpdateAccountPasswordFail = () => {
	return {
		type: "ACCOUNT_PASSWORD_FAIL"
	}
}

export function RegisterationDone(payload) {
	return {
		type: 'REGISTRATION_DONE',
		payload,
	}
};

export const SessionDone = (payload) => {
	return {
		type: "SESSION_DONE",
		payload
	}
}

export const PasswordUpdated = (payload) => {
	return {
		type: "PASSWORD_UPDATED",
		payload
	}
}

export function ConfirmAccount() {
	return {
		type: 'CONFIRM_ACCOUNT'
	}
};

export const StartRegistration = (data) => async dispatch => {
	try {
		dispatch(StartLoadingState());
		const response = await initiateRegistration(data);
		if (Object.keys(response).length && response?.status == 200) {
			dispatch(RegisterationDone(response?.data));
			toastr.success("Thanks for registration", "Please confirm your email to enjoy membership.");
		} else {
			dispatch(RegistrationFail());
		}
	} catch (e) {
		return [];
	}
};

export const StartSession = (data) => async dispatch => {
	try {
		dispatch(StartLoadingState());
		const response = await initiateSession(data);
		if (Object.keys(response).length && response?.status == 200) {
			dispatch(SessionDone(response));

			window.location.href = "/";
			toastr.success("Congratulations!", "You have successfully loggedIn, You can see your info in redux store.");
		} else {
			dispatch(RegistrationFail());
		}
	} catch (e) {
		return [];
	}
};

export const ResendConfirmAccount = (data) => async (dispatch) => {
	try {
		dispatch(StartLoadingState());
		const response = await resendConfirmationEmail(data);
		if (Object.keys(response).length && response?.status == 200) {
			dispatch(ResendConfirmEmailDone());
			toastr.success("Thanks You", response.data?.message);
		} else {
			dispatch(ResendConfirmEmailFail());
		}
	} catch (e) {
		return [];
	}
}

export const ResetAccount = (data) => async (dispatch) => {
	try {
		dispatch(StartLoadingState());
		const response = await resendForgotPasswordEmail(data);
		if (Object.keys(response).length && response?.status == 200) {
			dispatch(ResendConfirmPasswordDone());
			toastr.success("Thanks You", response.data?.message);
		} else {
			dispatch(ResendConfirmPasswordFail());
		}
	} catch (e) {
		return [];
	}
}

export const UpdateAccountPassword = (data) => async (dispatch) => {
	try {
		dispatch(StartLoadingState());
		const response = await UpdatePassword(data);
		if (Object.keys(response).length && response?.status == 200) {
			dispatch(PasswordUpdated(response));
			toastr.success("Thanks You", response.data?.message);
			window.location.href = "/users/sign_in";
		} else {
			dispatch(UpdateAccountPasswordFail());
		}
	} catch (e) {
		return [];
	}
}
