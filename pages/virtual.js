import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetVideoWithEventInfo,
    WidgetRegForm,
    MyHead
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

    <WidgetRegForm
      setting="streaming_registration"
      wrapperProps={{ 
        label:"virtual.register.title",
        secondaryLabel: null
      }}
      legend="streaming.how_to_register"
    />
  
    <WidgetVideoWithEventInfo setting="heroStreaming" />


    </React.Fragment>
   
  ) 
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: ['presenters']
    })
    
  })
  
  export default connect()(PageIndex);
  