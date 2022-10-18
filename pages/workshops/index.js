import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetRoleButtons,
  Markdown,
  // WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  TwoColsLayout as Section,
  MyTypography,
  WidgetSchedule,
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
    <WidgetSchedule setting="workshops.schedule" />

       {/* 
       <Wrapper first label="workshops.hello.title">
       <Section   
        left={
          <div style={{marginTop: '5rem'}}>
          <MyTypography template="h4" label="workshops.hello.submit" />
          <Markdown label="workshops.hello.details" />
          </div>
        }
        right={      
          <Box mt={2} p={2} style={{border: "2px solid red"}}><Markdown label="workshops.form.closed" /></Box>
        }
      />
      </Wrapper> */}
{/*

    
 <WidgetRegForm
            wrapperProps={{label: null}}
            setting="workshops.registration"
            />
            
*/}


{/* 
      <WidgetIconGrid setting="workshops.benefits" icons={{
            FaSearch: FaSearch, 
            FaPoll: FaPoll, 
            FaTrophy: FaTrophy
        }} /> */}


  <WidgetPhotostream setting="workshops.photostream" />

   






        {/* <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        /> */}



        <WidgetVideoWithEventInfo
          setting="heroExpo"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />


  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {},
    revalidate: 1
  }

})

export default connect()(PageSpeaking);
