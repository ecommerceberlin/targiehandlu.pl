import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetFeaturedCompanies,
    WidgetRegForm,
     WidgetSalesMap,
    WidgetVideoWithEventInfo,
    //WidgetAllExhibitorsAvatarlist,
    // WidgetAllExhibitorsColumnList,
    // WidgetPresenters,
    WidgetSchedule,
    WidgetExhibitorsWithSearch
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSalesMap />
    {/* <WidgetRegForm setting="visitor.register" /> 

    <WidgetSchedule />  */}

    {/* <WidgetExhibitorsWithSearch /> */}

    {/* <WidgetRegForm setting="visitor.register" />  */}

    <WidgetFeaturedCompanies />

  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      // preload : ['exhibitors', 'allexhibitors']
      preload : ['exhibitors']
    })
  
  })
  
  export default connect()(PageIndex);
