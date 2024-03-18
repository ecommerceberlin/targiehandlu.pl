import React from 'react'

import {
connect,
reduxWrapper,
configure,
WidgetVideoWithEventInfo,
WidgetRegForm,
WidgetIconGrid,
WidgetFeaturedCompanies,
WidgetPresenters,
WidgetSchedule,
WidgetSalesMap
} from 'eventjuicer-site-components';

//import FeaturedPresenters from '../src/FeaturedPresenters';

import settings from '../settings'

const PageVisit = () => (

<div>

{/* <WidgetRegForm setting="vips.register" /> */}
<WidgetVideoWithEventInfo setting="heroExpo" />
<WidgetSchedule />
{/* <WidgetSalesMap /> */}
<WidgetFeaturedCompanies />
{/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} /> */}
{/* <WidgetFeaturedPresenters /> */}
{/* <WidgetVips limit={12} mobile={4} /> */}
{/* <WidgetPresenters /> */}

{/* <WidgetRegForm setting="vips.register" /> */}
=

</div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

return await configure(props, {
settings : settings,
preload : ["exhibitors", 'presenters']
})

})


export default connect()(PageVisit);


