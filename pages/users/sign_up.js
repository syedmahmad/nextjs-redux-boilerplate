// By default it provides SSR...
import AuthLayout from '../../src/hoc/authLayout';
import SignUpContent from '../../src/components/auth/sign_up';

import { withUserAgent } from 'next-useragent';

function SignUpPage(props) {

	const meta = {
		title: `SIGN_UP`,
		description: ``,
		image_url: ``,
		keywords: `sing_up, Register`,
		route: "/sign_up",
	}
	return (
		<>
			<AuthLayout meta={meta}>
				<SignUpContent />
			</AuthLayout>
		</>
	);
}

export default withUserAgent(SignUpPage);
