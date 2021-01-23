// starting redux stuff ...
import store from '../../store';
import { createWrapper } from 'next-redux-wrapper';
// ending redux stuff ...

import HeadContent from '../../components/common/headContent';

function StaticLayout(props) {
	
	const { title, description, image_url, keywords, route} = props?.meta;
	
	return (
		<>
			<HeadContent
				title={title}
				description={description}
				image_url={image_url}
				keywords={keywords}
				route={route}
			/>
			{props.children}
		</>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

// export default StaticLayout;
export default wrapper.withRedux(StaticLayout);
