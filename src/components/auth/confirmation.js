import AuthLinks from "../common/authLinks";
import { ResendConfirmAccount } from "../../store/actions/auth";
import { useForm } from 'react-hook-form';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function ConfirmationContent(props) {
	const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm();

	const { isSubmitting } = useSelector((state) => ({
		isSubmitting: state.authReducer.loading
	}), shallowEqual);

	const onSubmit = (values) => {
		dispatch(ResendConfirmAccount(values));
	};

	return (
		<>
			<div className="container-fluid">
				<div className='row'>
					<div className='auth-form-container'>

						<div className='auth-form'>
							<div className='heading-container'>
								<div className='heading'>RESEND EMAIL</div>
							</div>

							<section>
								<form onSubmit={e => e.preventDefault()}>

									<div className="field">
										<label>Email</label>
										<input type="email" name="email" className='form-control' ref={register({
											required: "This is required",
											pattern: {
												value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
												message: "Invalid email address"
											}
										})} />
										{errors.email && <span className="text-danger">{errors.email.message}</span>}
									</div>

									<div className="actions">
										<input type="submit" onClick={handleSubmit(onSubmit)} />
										{isSubmitting && <span className="loading-state"><img src={`/images/loader.gif`} height="25" alt="loading..." /></span>}
									</div>
								</form>
								<hr />
								<div className='links'>
									<AuthLinks />
								</div>
								<div id='privacy-policy'>
									By using this service you agree to our
              		<a target="_blank" href=''> privacy policy</a>
								</div>
							</section>

						</div>
					</div>
				</div>
			</div>


		</>
	);
}

export default ConfirmationContent;
