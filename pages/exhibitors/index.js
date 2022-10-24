import React from 'react'
import {
    connect,
    WidgetVisitor,
    WidgetExhibitorsAvatarlist,
    WidgetSalesMap,
    WidgetRoleButtons,
    reduxWrapper,
    configure,
    WidgetExhibitorsWithSearch
  } from 'eventjuicer-site-components';
  
  import settings from '../../settings';
  
  const PageExhibitors = () => (
  
    <>
  
    <WidgetExhibitorsWithSearch first />

    <WidgetExhibitorsAvatarlist />

    <WidgetVisitor label="visitors.are_you_visitor"  />
  
    <WidgetRoleButtons />
    
    </>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ['exhibitors', 'exhibitors2', 'bookingmap']
    })



  })
  
  
  export default connect()(PageExhibitors);
  