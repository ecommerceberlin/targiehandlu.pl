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
    WidgetFaq,
    WidgetPresenters
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageExhibit = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSalesMap />

    <WidgetFeaturedCompanies />

    <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} />

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
