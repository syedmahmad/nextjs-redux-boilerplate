import AuthLayout from '../../../src/hoc/authLayout';
import PasswordContent from '../../../src/components/auth/forgot_password';
import { withUserAgent } from 'next-useragent';

function PasswordNewPage(props) {

	const meta = {
		title: `Forgot Password`,
		description: ``,
		image_url: ``,
		keywords: `passsword, new, forgot-password`,
		route: "/users/password/new",
	}
	return (
		<>
			<AuthLayout meta={meta}>
				<PasswordContent />
			</AuthLayout>
		</>
	);
}

export default withUserAgent(PasswordNewPage);
