import React from 'react'
import {
    connect,
    WidgetVideoWithEventInfo,
    WidgetCompany,
    WidgetAllExhibitorsColumnList,
    WidgetRoleButtons,
    configure,
    reduxWrapper,
    // MeetupButton,
    HeadCompany,
    WidgetRegForm,
    WidgetFeaturedCompanies,
    WidgetPresenters,
    WidgetCompanyMeetup,
    WidgetCompanyVip,
    WidgetSchedule,
    WidgetSalesMap,
    Promoninja
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'

  import settings from '../../settings';

  const PageCompany = ({slug, dispatch}) => {
    
  return (
    <div>

     
      <HeadCompany slug={slug}>{(data) => <Head>{data}</Head>}</HeadCompany> 
 
      {/* <WidgetCompanyMeetup /> */}
      {/* <WidgetCompanyVip /> */}
      <WidgetCompany slug={slug} />



      {/* <WidgetRegForm setting="visitor.register" /> */}

      {/* <WidgetSchedule /> */}

    
        
      <WidgetVideoWithEventInfo setting="heroExpo" />


      {/* <WidgetFeaturedCompanies /> */}

      {/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} /> */}

      {/* <WidgetRegForm setting="visitor.register" /> */}


       <WidgetSalesMap
        label="exhibitors.map.title2"
        secondaryLabel="exhibitors.map.opensales"
      /> 
      
      <WidgetFeaturedCompanies />

      {/* <WidgetRoleButtons /> */}
      
      {/* <WidgetVisitor secondaryLabel="event.parties" /> */}
  
      {/* <WidgetPresenters /> */}
  
      {/* <Promoninja id={slug} /> */}

    </div>
  );
  
  }
  
  PageCompany.defaultProps = {
    company: {}
  }
  

  export async function getStaticPaths() {
  
    // const request = await fetch(`${settings.system.api}/company-slugs`)
    // const slugs = await request.json();

    // if(!"data" in slugs){
    //   return
    // }

    // //precache only featured?
    // const filtered = slugs.data.filter(item => item.featured)

    return {
      // paths: filtered.map(row => ({ 
      //     params: {
      //       slug : row.slug
      //     }
      //   })),
      paths: [],
      fallback: "blocking" //do not throw 404 when not cached....
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {
  
    const {slug} = params;

    const resource = `companies/${slug}`;

    await configure(store, {
      settings : settings,
      preload : [resource, "bookingmap"]
    })

    return {
        props : {
            slug :slug
        },
        revalidate : 10
    }
  
  })
  



  
  export default connect()(PageCompany);
  