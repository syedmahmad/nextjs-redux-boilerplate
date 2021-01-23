import AuthLayout from '../../src/hoc/authLayout';
import SignInContent from '../../src/components/auth/sign_in';
import ConfirmationContent from '../../src/components/auth/confirmation';
import { setConfirmationCode } from "../../src/api/auth";

import { withUserAgent } from 'next-useragent';

function ConfirmationPage(props) {

	const meta = {
		title: `Confirmation Email`,
		description: ``,
		image_url: `comfirm your email.`,
		keywords: `confirm, email`,
		route: "/sign_up",
	}
	return (
		<>
			<AuthLayout meta={meta}>
				{ (props.result?.constructor == Object) ?
						<SignInContent result={props.result} /> :
						<ConfirmationContent />
				}
			</AuthLayout>
		</>
	);
}

export async function getServerSideProps(context) {
	// You can use any data fetching library
	if (Object.keys(context?.query).length) {
		await setConfirmationCode(context.query);
		return {
			props: {
				result: {}
			}
		}
	} else {
		return {
			props: {
				result: null
			}
		}
	}
	
}

export default withUserAgent(ConfirmationPage);
