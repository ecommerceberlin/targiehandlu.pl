import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetFeaturedCompanies,
    WidgetRegForm,
    WidgetSalesMap,
    WidgetVideoWithEventInfo,
    // WidgetPresenters,
    WidgetSchedule,
    WidgetAllOrCurrentExhibitorsColumnList
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = () => (
  
   <>

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetRegForm setting="visitor.register" /> 

    <WidgetSchedule /> 

    {/* <WidgetRegForm setting="visitor.register" />  */}

    <WidgetFeaturedCompanies />

    <WidgetAllOrCurrentExhibitorsColumnList threshold={70} />

    <WidgetSalesMap />


  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      // preload : ['exhibitors', 'allexhibitors']
      preload : ['presenters']
    })
  
  })
  
  export default connect()(PageIndex);
