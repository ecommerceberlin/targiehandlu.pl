import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetVideoWithEventInfo,
  WidgetOrganizerVip,
  WidgetSchedule,
  WidgetAllOrCurrentExhibitorsColumnList,
  WidgetRegForm
} from 'eventjuicer-site-components';

const settings  = require('../../settings').default;


const PageVip = ({code}) => (

  <>
  
  <WidgetOrganizerVip code={code} setting="vips.register" />

  <WidgetSchedule />

  <WidgetVideoWithEventInfo  setting="heroExpo" />

  <WidgetAllOrCurrentExhibitorsColumnList />

  <WidgetOrganizerVip code={code} setting="vips.register" />
  
  </>

) 

export async function getStaticPaths() {
  
  return {
    paths: [],
    fallback: "blocking" //do not throw 404 when not cached....
  };
   
}

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : []
  })

})

export default connect()(PageVip);