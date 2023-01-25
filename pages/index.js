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
    // WidgetSchedule,
    WidgetAllOrCurrentExhibitorsColumnList
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSalesMap />

    {/* <WidgetRegForm setting="visitor.register" />  */}

    {/* <WidgetSchedule />  */}

    {/* <WidgetRegForm setting="visitor.register" />  */}

    <WidgetFeaturedCompanies />

    <WidgetAllOrCurrentExhibitorsColumnList />

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
