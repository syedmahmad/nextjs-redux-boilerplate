import Facebook from '../common/facebook';
import Apple from '../common/apple';
import AuthLinks from "../common/authLinks";
import React, { useState, useEffect, useRef } from "react";
import { ConfirmAccount, StartSession } from "../../store/actions/auth";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function SignInContent(props) {

	const result = props?.result ? props?.result : null;
	const dispatch = useDispatch();
	const router = useRouter();
	const { register, handleSubmit, errors } = useForm();

	const { isSubmitting } = useSelector((state) => ({
		isSubmitting: state.authReducer.loading
	}), shallowEqual);

	useEffect(() => {
		if (result?.constructor == Object) {
			dispatch(ConfirmAccount());
			router.push('/users/sign_in', `/users/sign_in`, { shallow: true });
		}
	}, []);

	const onSubmit = (values) => {
		dispatch(StartSession(values));
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='auth-form-container'>

						<div className='auth-form login-form'>
							<div className='heading-container'>
								<div className='heading'>LOG IN</div>
							</div>

							<section>
								<div id='option-or'>
								</div>
								<form onSubmit={e => e.preventDefault()}>
									<div className='errors'>
									</div>
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

									<div className="field">
										<label>Password</label>
										<input type="password" name="password" className='form-control' ref={register({
											required: "This is required",
											minLength: {
												value: 6,
												message: "Minimum is 6 characters"
											}
										})} />
										{errors.password && <span className="text-danger">{errors.password.message}</span>}
									</div>
									<div className="field">
										<input type="checkbox" defaultChecked name="remember_me" ref={register()} />
										<label>Remember me</label>
									</div>
									<div className="actions">
										<input type="submit" onClick={handleSubmit(onSubmit)} />
										{isSubmitting && <span className="loading-state"><img src={`/images/loader.gif`} height="25" alt="loading..." /></span>}
									</div>
									<hr />
								</form>
								<div className='links'>
									{/* <%= render "devise/shared/links" %> */}
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

export default SignInContent;
