import AuthLayout from '../../../src/hoc/authLayout';
import UpdatePasswordContent from '../../../src/components/auth/update_password';
import { withUserAgent } from 'next-useragent';

function PasswordEditPage(props) {

	const meta = {
		title: `Update Password `,
		description: `update your password`,
		image_url: ``,
		keywords: `password, update, edit`,
		route: "/users/password/edit",
	}
	return (
		<>
			<AuthLayout meta={meta}>
				<UpdatePasswordContent />
			</AuthLayout>
		</>
	);
}

export default withUserAgent(PasswordEditPage);
