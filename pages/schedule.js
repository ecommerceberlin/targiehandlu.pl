import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,

    WidgetRegForm,
    // WidgetFeaturedExhibitors,
    WidgetSchedule,
    WidgetVideoWithEventInfo,
    // WidgetRoleButtons,
    MyHead, 
    WidgetAllOrCurrentExhibitorsColumnList
  } from 'eventjuicer-site-components';

  import Head from 'next/head'

  const settings = require('../settings').default;

  const PageSchedule = () => (

    <>

      {/* <MyHead 
      image="https://res.cloudinary.com/eventjuicer/image/upload/f_auto/v1615494821/tehonline.jpg" 
      titleLabel="virtual.opengraph.name" 
      descriptionLabel="virtual.opengraph.description"
    >{(data)=><Head>{data}</Head>}</MyHead> */}


      <WidgetSchedule />

      <WidgetRegForm setting="visitor.register" />

      <WidgetVideoWithEventInfo setting="heroExpo" />

      <WidgetAllOrCurrentExhibitorsColumnList threshold={70} /> 


  </>
  )


  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {


    return await configure(props, {
      settings : settings,
      preload : ["presenters"],
      cache: 10
    })

  })
  
  
export default connect()(PageSchedule);
  