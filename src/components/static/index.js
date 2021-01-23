
import Link from 'next/link';

const HomePage = (props) => {
	return (
		<div className="student-rs">
			<div className="container">
				<h1 className="text-center headingF headingF-sm">Next Redux Starter Boilerplate</h1>
				<div className="row">
					<div className="col-50">
						<div>
							<h2>Login Buttons</h2>
							<Link href='/users/sign_in'>
								<a className='log-in'>LOG IN</a>
							</Link>
							<Link href='/users/sign_up'>
								<a className='sign-up'>SIGN UP</a>
							</Link>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default HomePage;
