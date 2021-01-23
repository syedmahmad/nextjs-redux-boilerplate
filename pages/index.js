// By default it provides SSR...
import Layout from '../src/hoc/staticLayout'; 
import HomePageContent from '../src/components/static/index'; 

import { withUserAgent } from 'next-useragent';

function LandingPage(props) {
  
  const meta = {
    title: `nextjs boilerplate with redux`,
    description: `description of your site`,
    image_url:   ``,
    keywords: `next, boilerplate, redux, store-presistent`,
    route: "/",
  }
  return (
    <>
      <Layout meta={meta}>
        <HomePageContent />
      </Layout>
    </>
  );
}

export default withUserAgent(LandingPage);
