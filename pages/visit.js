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
    WidgetSchedule
  } from 'eventjuicer-site-components';
  
  //import FeaturedPresenters from '../src/FeaturedPresenters';
  
  import settings from '../settings'
  
  const PageVisit = () => (
  
<div>

<WidgetRegForm setting="visitor.register" />
<WidgetVideoWithEventInfo setting="heroExpo" />
<WidgetSchedule />
<WidgetFeaturedCompanies />
{/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} /> */}
{/* <WidgetFeaturedPresenters /> */}
{/* <WidgetVips limit={12} mobile={4} /> */}
{/* <WidgetPresenters /> */}
<WidgetIconGrid setting="visitor.benefits" />
<WidgetRegForm setting="visitor.register" />
{/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
{/* <WidgetVisitor label="visitors.register" first /> */}

</div>

  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["exhibitors", 'presenters']
    })
  
  })
  
   
  export default connect()(PageVisit);
  