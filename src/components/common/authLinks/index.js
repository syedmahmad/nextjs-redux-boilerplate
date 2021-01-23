
import { useRouter } from 'next/router';
import Link from 'next/link';

function AuthLinks(props) {
	const router = useRouter();
	return (
		<>
			{router.pathname != '/users/sign_in' ? <><Link href="/users/sign_in"><a>Already a member? LOG IN</a></Link> <br /> </> : null}
			{router.pathname != '/users/sign_up' ? <><Link href="/users/sign_up"><a>Don't have an account? SIGN UP</a></Link> <br/> </> : null}
			{router.pathname != '/users/password/new' && router.pathname != '/users/sign_up' ? <><Link href="/users/password/new"><a>Forgot your password?</a></Link><br /> </> : null}
			{router.pathname != '/users/confirmation' ? <><Link href="/users/confirmation"><a>Resend confirmation email</a></Link> <br /> </> : null }
		</>
	);
}

export default AuthLinks;
