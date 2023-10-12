import React from 'react'
import {
    connect,
    WidgetSalesMap,
    WidgetRoleButtons,
    reduxWrapper,
    configure,
    WidgetAllOrCurrentExhibitorsColumnList,
    WidgetSchedule,
    WidgetVideoWithEventInfo,
    WidgetRegForm
  } from 'eventjuicer-site-components';
  
  import settings from '../../settings';
  
  const PageExhibitors = () => (
  
    <>
  
    <WidgetAllOrCurrentExhibitorsColumnList threshold={70} first />

    <WidgetRegForm setting="visitor.register" /> 

    <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetSchedule />

  
    {/* <WidgetRoleButtons /> */}
    
    </>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : []
    })



  })
  
  
  export default connect()(PageExhibitors);
  