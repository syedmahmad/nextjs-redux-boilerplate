import React, { useState, useEffect, useRef } from "react";
import { UpdateAccountPassword } from "../../store/actions/auth";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { toastr } from 'react-redux-toastr';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AuthLinks from "../common/authLinks";

function UpdatePasswordContent(props) {
	const dispatch = useDispatch();
	// const code = props.router.query[0];
	const router = useRouter();
	const { register, handleSubmit, errors, watch, setValue } = useForm(); 
	const password = useRef({});
	password.current = watch("password");

	const { isSubmitting } = useSelector((state) => ({
		isSubmitting: state.authReducer.loading
	}), shallowEqual);

	const onSubmit = (values) => {
		if (Object.keys(router.query).length) {
			const key = Object.keys(router.query)[0];
			const value = Object.values(router.query)[0];
			let data = { ...values, [key]: value};
			dispatch(UpdateAccountPassword(data));
		} else {
			toastr.info("Invalid Operation", "Please try to proceed from your email link, we have send you an instructions.");
		}
	};

	return (
		<>
			<div className="container-fluid">
				<div className='row'>
					<div className='auth-form-container'>

						<div className='auth-form'>
							<div className='heading-container'>
								<div className='heading'>CHANGE PASSWORD</div>
							</div>

							<section>
								<form onSubmit={e => e.preventDefault()}>

									<div className="field">
										<div className="field">
											<label>New password</label>
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
											<label>Confirm new password</label>
											<input type="password" name="password_confirmation" className='form-control' ref={register({
												validate: {
													validate: value =>
														value === password.current || "The passwords do not match"
												}
											})} />
											{errors.password_confirmation && <span className="text-danger">{errors.password_confirmation.message}</span>}
										</div>
									</div>

									<div className="actions">
										<input type="submit" onClick={handleSubmit(onSubmit)} />
										{isSubmitting && <span className="loading-state"><img src={`/images/loader.gif`} height="25" alt="loading..." /></span>}
									</div>
								</form>
								<hr />
								<div className='links'>
									<AuthLinks/>
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

export default UpdatePasswordContent;
