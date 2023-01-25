import React from 'react'
import {
    connect,
    WidgetVisitor,
    WidgetExhibitorsAvatarlist,
    WidgetSalesMap,
    WidgetRoleButtons,
    reduxWrapper,
    configure,
    WidgetAllOrCurrentExhibitorsColumnList
  } from 'eventjuicer-site-components';
  
  import settings from '../../settings';
  
  const PageExhibitors = () => (
  
    <>
  
    <WidgetAllOrCurrentExhibitorsColumnList threshold={70} first />


    {/* <WidgetVisitor label="visitors.are_you_visitor"  /> */}
  
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
  