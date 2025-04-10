import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,

    WidgetSalesMap,
    WidgetIconGrid,
    WidgetVideoWithEventInfo,
    //WidgetAllExhibitorsAvatarlist,
    WidgetFeaturedCompanies,
    WidgetAllExhibitorsColumnList,
    Wrapper,
    WidgetFaq
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageExhibit = () => (
  
   <>

    <WidgetSalesMap />

    <WidgetIconGrid setting="exhibitors.benefits" />

    <WidgetFeaturedCompanies />
  
   <WidgetFaq setting="exhibitors.faq" /> 
  
    {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
  
    {/* <WidgetAllExhibitorsColumnList /> */}

    <WidgetVideoWithEventInfo setting="heroExpo" />

  
  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ['bookingmap'],
      cache: 300
    })
  
  })
  
  export default connect()(PageExhibit);
