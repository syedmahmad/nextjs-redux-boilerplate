const initialState = {
	loading: false,
	userID: null,
	name: null,
	email: null,
	admin: false,
	avatar: null,
	is_confirm: false,
	// avatar: {
	// 	url: null,
	// 	square: {
	// 		url: null
	// 	}
	// },
	token: null,
	latitude: null,
	longitude: null,
	points: 0,
	provider: null,
	uid: null,
	user_type: null,
	allow_password_change: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_LOADING_STATE":
			return { ...state, loading: true };
		case "SESSION_FAIL":
		case "ACCOUNT_PASSWORD_FAIL":
		case "RESEND_CONFIRMATION_EMAIL_FAIL":
		case "RESEND_CONFIRMATION_PASSWORD_FAIL":
		case "REGISTRATION_FAIL":
			return { ...state, loading: false };
		case "CONFIRM_ACCOUNT":
			return { ...state, is_confirm: true };
		case "SESSION_DONE": {
			const { data, headers } = action.payload;
			return {
				...state,
				loading: false,
				userID: data?.data?.id,
				name: data?.data?.name,
				email: data?.data?.email,
				uid: data?.data?.uid,
				user_type: data?.data?.user_type,
				avatar: data?.data?.avatar?.url,
				token: headers["access-token"]
			};
		}
		case "PASSWORD_UPDATED": {
			const { data, headers } = action.payload;
			return {
				...state,
				loading: false,
			}
		}
		case "REGISTRATION_DONE": {
			const { id, name, email, uid, user_type, avatar} = action.payload.data;
			return { ...state, 
				loading: false,
				userID: id, 
				name: name, 
				email: email,  
				uid: uid,
				user_type: user_type,
				avatar: avatar?.url };
		}
		case "RESEND_CONFIRMATION_PASSWORD_DONE":
		case "RESEND_CONFIRMATION_EMAIL_DONE": {
			return {
				...state,
				loading: false,
			};
		}
		default:
			return state;
	}
};

export default authReducer;
