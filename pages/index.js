import React from 'react'

import {
    connect,
    WidgetVideoWithEventInfo,
    // WidgetFeaturedCompanies,
    // WidgetAllExhibitorsColumnList,
    WidgetRoleButtons,
    WidgetRegForm,
    reduxWrapper,
    configure,
    WidgetPresenters,
    WidgetSchedule,
    MyHead,
    WidgetStage
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  
  import settings from '../settings'
  
  
  const PageIndex = (props) => (
  
     
    <React.Fragment>
  
    <MyHead 
      image="https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg" 
      titleLabel="virtual.opengraph.name" 
      descriptionLabel="virtual.opengraph.description"
    >{(data)=><Head>{data}</Head>}</MyHead>

    <WidgetStage stage="A" />

 <WidgetSchedule 
      wrapperProps={{
        label: "virtual.schedule.title", 
        secondaryLabel: "virtual.schedule.description"
      }}
    />

     <WidgetPresenters 
      setting="virtual_featured_presenters" 
      link={(item) => `/speakers/${item.id}` }
    />

    <WidgetVideoWithEventInfo setting="heroStreaming" />


   <WidgetRegForm
      setting="streaming_registration"
      wrapperProps={{ 
        label:"virtual.register.title",
        secondaryLabel: null
      }}
      legend="streaming.how_to_register"
    />
  
   

   
  
    <WidgetRoleButtons 
      setting="rolebuttonsVirtual" 
    />

    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['allexhibitors', 'companies', 'presenters']
    })
    
  })
  
  export default connect()(PageIndex);
  