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
    WidgetFaq
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageExhibit = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSalesMap
      label="exhibitors.map.title"
      secondaryLabel="exhibitors.map.opensales"
    />

    <WidgetFeaturedCompanies />

    <WidgetIconGrid setting="exhibitors.benefits" />
  
    <WidgetFaq setting="exhibitors.faq" /> 

    {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
  
    <WidgetAllExhibitorsColumnList />
  
  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ['exhibitors', 'allexhibitors']
    })
  
  })
  
  export default connect()(PageExhibit);
