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



    {/* <WidgetVideoWithEventInfo setting="heroExpo" />

    <WidgetRegForm setting="visitor.register" /> 

    <WidgetSchedule /> 

    <WidgetSalesMap />

    <WidgetRegForm setting="visitor.waitinglist" /> 

    <WidgetFeaturedCompanies />

    <WidgetRegForm setting="visitor.register" /> 

    <WidgetSalesMap />

    <WidgetFeaturedCompanies />

    <WidgetRegForm setting="visitor.register" /> 

    <WidgetAllOrCurrentExhibitorsColumnList threshold={70} />

   */}


  </>
  
  )
  
  // export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
  //   return await configure(props, {
  //     settings : settings,
  //     // preload : ['bookingmap', "companies", "allexhibitors", "purchases", "exhibitors2"],
  //     // preload : ['exhibitors', 'allexhibitors']
  //     // preload : ['presenters'],
  //     cache: 3600
  //   })
  
  // })


  export async function getServerSideProps(context) {
    return {
      redirect: {
        destination: 'https://ecommercewarsaw.com',
        permanent: false, // 302 redirect
      }
    }
  }
  
  export default connect()(PageIndex);
