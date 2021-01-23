import Head from 'next/head';
import { withUserAgent } from 'next-useragent';

function HeadContent({
	description,
	title,
	image_url,
	keywords,
	route
}) {
	const url = process.env.SITE_NAME;

	const imageUrl = (image_url != undefined && image_url != null) ? image_url : `/images/public-3x.png`;

	return (
		<Head>
			{/* Meta tags for browser link preview (SEO) */}
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=no" />
			<meta name="type" content="website" />
			<meta name="url" rel="canonical" content={url + route} />
			<meta name="image" content={imageUrl} />
			<link href={imageUrl} rel="shortcut icon"></link>
			<meta name="theme-color" content="rgb(40, 40, 40)" />
			<meta httpEquiv="Expires" content="3" />

			{/* Facebook sharing (Open Graph Markup)  */}
			<meta property="og:url" content={url} />
			<meta property="fb:app_id" content="xxxxxxxxxxxxxx" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			{/* Meta tags for twitter link preview  */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />

			{/* Lighthouse Details  */}
			<link rel="manifest" href="/manifest.json"/>

			{/* JavaScript for Bootstrap  */}
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>

			{/* Recaptcha  */}
			<script src="https://www.google.com/recaptcha/api.js" async defer></script>

			{/* fonts  */}
    	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Share+Tech|Teko:300,400,500" rel="stylesheet"/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"/>
			
			{process.env.NODE_ENV !== 'production' && (
				<link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
			)}
		</Head>
	);
}

export default withUserAgent(HeadContent);
