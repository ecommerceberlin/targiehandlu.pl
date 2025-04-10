import {
    connect,
    WidgetRegForm,
    WidgetPresenterNew,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    // WidgetRoleButtons,
    reduxWrapper,
    configure,
    HeadSpeaker,
    WidgetSchedule,
    WidgetSalesMap
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'
import { cache } from 'react';


  const settings = require('../../settings').default;


  const PageSpeaker = ({id}) => (<>

      <HeadSpeaker setting="speakers" id={id} path="/speakers">{(data)=><Head>{data}</Head> }</HeadSpeaker>
      <WidgetPresenterNew id={id} path="/speakers" />

      {/* <WidgetRegForm setting="visitor.register" /> */}


      {/* <WidgetVideoWithEventInfo setting="heroExpo" /> */}


      {/* <WidgetSalesMap /> */}


      <WidgetSchedule />

      {/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } /> */}

      {/* <WidgetRegForm setting="visitor.register" /> */}

  </>
)

export async function getStaticPaths() {
    
    return {
      paths: [],
      fallback: "blocking"
    }
}

  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    const {params: {id}} = props;

    const resource = `presenters/${id}`;

    return await configure(props, {
      settings : settings,
      preload : [resource, "presenters"],
      cache: 300
    })
  
  })
  
  
  export default connect()(PageSpeaker);
  