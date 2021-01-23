import React, { useState, useEffect, useRef } from "react";
import Facebook from '../common/facebook';
import Apple from '../common/apple';
import AuthLinks from "../common/authLinks";
import { useForm } from 'react-hook-form';
import Recaptcha from "react-recaptcha";
import useSSR from 'use-ssr';
import { StartRegistration } from "../..//store/actions/auth";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function SignUpContent(params) {
	const dispatch = useDispatch();
	const { isBrowser, isServer, isNative } = useSSR();
	const { register, handleSubmit, errors, watch, setValue } = useForm(); 
	const password = useRef({});
	password.current = watch("password");

	const { isSubmitting } = useSelector((state) => ({
		isSubmitting: state.authReducer.loading
	}), shallowEqual);

	// useEffect(() => {
	// 	register({ name: 'captchaToken' }, { required: true });
	// });

	const onSubmit = (values) => {
		let data = { ...values, "confirm_success_url": `${process.env.API_ORIGIN}/confirm`}
		dispatch(StartRegistration(data));
	};

	const onVerifyCaptcha = (token) => {
		setValue('captchaToken', token);
	}

	const onloadCallback = () => {
		console.log("recaptcha loaded");
	}

	return (
		<>
			<div className="container-fluid">
				<div className='row'>
					<div className='auth-form-container'>

						<div className='auth-form register-form'>
							<div className='heading-container'>
								<div className='heading'>SIGN UP</div>
							</div>
							<section>
								<form onSubmit={e => e.preventDefault()}>
									<div id='social-login'>
									</div>

									<div className="field">
										<label>Name</label>
										<input name="name" className='form-control' ref={register({
											required: "This is a required", 
											minLength: {
												value: 2,
												message: "Minimum is 2 characters"
											} })} />
											{errors.name && <span className="text-danger">{errors.name.message}</span>}
									</div>

									<div className="field">
										<label>Email</label>
										<input type="email" name="email" className='form-control' ref={register({
											required: "This is required",
											pattern: {
												value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
												message: "Invalid email address"
											} })} />
										{errors.email && <span className="text-danger">{errors.email.message}</span>}
									</div>

									<div className="field">
										<label>Password</label>
										<input type="password" name="password" className='form-control' ref={register({
											required: "This is required",
											minLength: {
												value: 6,
												message: "Minimum is 6 characters"
											} })} />
										{errors.password && <span className="text-danger">{errors.password.message}</span>}
									</div>

									<div className="field">
										<label>Password confirmation</label>
										<input type="password" name="password_confirmation" className='form-control' ref={register({
											validate: {
												validate: value =>
													value === password.current || "The passwords do not match"
											}
										})} />
										{errors.password_confirmation && <span className="text-danger">{errors.password_confirmation.message}</span>}
									</div>
									{/* { isBrowser && 
										<div>
											<Recaptcha
												sitekey={process.env.RECAPTCHA_KEY}
												render="explicit"
												verifyCallback={onVerifyCaptcha}
												onloadCallback={onloadCallback}
												theme="light"
											/>
										</div>
									} */}
									<div className="actions">
										<input type="submit" onClick={handleSubmit(onSubmit)} />
										{isSubmitting && <span className="loading-state"><img src={`/images/loader.gif`} height="25" alt="loading..."/></span>}
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

export default SignUpContent;
