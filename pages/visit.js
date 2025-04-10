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
    WidgetAllOrCurrentExhibitorsColumnList
  } from 'eventjuicer-site-components';
  
  //import FeaturedPresenters from '../src/FeaturedPresenters';
  
  import settings from '../settings'
  
  const PageVisit = () => (
  
<div>

{/* <WidgetRegForm setting="visitor.register" /> */}
<WidgetSchedule /> 

{/* <WidgetVideoWithEventInfo setting="heroExpo" /> */}
<WidgetFeaturedCompanies />
{/* <WidgetRegForm setting="visitor.register" /> */}
{/* <WidgetFeaturedPresenters /> */}
{/* <WidgetVips limit={12} mobile={4} /> */}
{/* <WidgetPresenters /> */}
<WidgetIconGrid setting="visitor.benefits" />
{/* <WidgetRegForm setting="visitor.register" /> */}
{/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
{/* <WidgetVisitor label="visitors.register" first /> */}

<WidgetAllOrCurrentExhibitorsColumnList threshold={70} />
<WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} />
<WidgetVideoWithEventInfo setting="heroExpo" />
</div>

  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["exhibitors", 'presenters'],
      cache: 300
    })
  
  })
  
   
  export default connect()(PageVisit);
  