
import FacebookLogin from 'react-facebook-login';
import { toastr } from 'react-redux-toastr';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';


function Facebook(props) {
	const dispatch = useDispatch();
	const router = useRouter();

	const facebookClick = (event) => {

	}

	const handleFacebookCallback = (response) => {
	}

	return (
			<div id='facebook-login'>

				<div id='centered'>
					<a id='facebook-login-btn'>
					<FacebookLogin
						appId={process.env.Facebook_APP_ID}
						autoLoad={false}
						fields="name,email,picture"
						cssClass="facebook-login-btn"
						icon="fa-facebook"
						textButton="Continue with Facebook"
						size="small"
						callback={handleFacebookCallback}
						onClick={facebookClick}
					/>
						{/* <div className="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width="" style={{ pointerEvents: 'none' }}></div> */}
					</a>
				</div>

			</div>
	);
};

export default Facebook;
