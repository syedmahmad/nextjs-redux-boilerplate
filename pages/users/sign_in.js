// By default it provides SSR...
import AuthLayout from '../../src/hoc/authLayout';
import SignInContent from '../../src/components/auth/sign_in';

import { withUserAgent } from 'next-useragent';

function SignInPage(props) {

	const meta = {
		title: `SIGN_IN`,
		description: ``,
		image_url: ``,
		keywords: `Sign_in, Login`,
		route: "/sign_in",
	}
	return (
		<>
			<AuthLayout meta={meta}>
				<SignInContent />
			</AuthLayout>
		</>
	);
}

export default withUserAgent(SignInPage);
