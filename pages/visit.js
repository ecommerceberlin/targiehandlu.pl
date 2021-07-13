import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetVideoWithEventInfo,
    WidgetVisitor,
    WidgetIconGrid
  } from 'eventjuicer-site-components';
  
  //import FeaturedPresenters from '../src/FeaturedPresenters';
  
  import settings from '../settings'
  
  const PageVisit = () => (
  
          <div>
        
         <WidgetVideoWithEventInfo setting="heroExpo" />

          <WidgetVisitor setting="visitor.register" />
  
          {/* <WidgetSchedule /> */}
  
          {/* <WidgetFeaturedPresenters /> */}
  
          {/* <WidgetVips limit={12} mobile={4} /> */}

  
          {/* <WidgetPresenters /> */}
  
          <WidgetIconGrid setting="visitor.benefits" />
  
          <WidgetVisitor setting="visitor.register" />
  
          {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}
  
          {/* <WidgetVisitor label="visitors.register" first /> */}

    
          </div>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["exhibitors", 'presenters']
    })
  
  })
  
   
  export default connect()(PageVisit);
  