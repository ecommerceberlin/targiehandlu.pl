import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetRoleButtons,
  // WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetSchedule,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  Box
} from 'eventjuicer-site-components';


// import {
//   NoteAdd, 
//   Settings,
//   Public,
//   Mic,
//   Assessment,
//   FaSearch,
//   FaPoll,
//   FaTrophy
// } from '../components/icons'


import settings from '../../settings';


const PageSpeaking = () => (

  <div>
    
    
<WidgetFaq setting="workshops.faq_participant" />     
{/* <WidgetSchedule setting="workshops.schedule" /> */}

{/* <WidgetRegForm setting="visitor.register" /> */}
{/* <WidgetSchedule /> */}
<WidgetPhotostream setting="workshops.photostream" />

<WidgetVideoWithEventInfo
setting="heroExpo"
title="presenters.claim.title"
subtitle="presenters.claim.description"
/>


  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {
    props: {},
    revalidate: 10
  }

})

export default connect()(PageSpeaking);
