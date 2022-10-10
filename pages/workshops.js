import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetRegForm,
  WidgetRoleButtons,
  Markdown,
  WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  WidgetJurors,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetVerticalTimeline,
  TwoColsLayout as Section,
  MyTypography
} from 'eventjuicer-site-components';


import {
  NoteAdd, 
  Settings,
  Public,
  Mic,
  Assessment,
  FaSearch,
  FaPoll,
  FaTrophy
} from '../components/icons'


import settings from '../settings';


const PageSpeaking = () => (

  <div>
       <Wrapper first label="workshops.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '5rem'}}>

          <MyTypography template="h4" label="workshops.hello.submit" />
         
          <MyTypography template="subtitle1" label="workshops.hello.needs" />
  
          <Markdown label="workshops.hello.details" />


       


  
          </div> }
        right={ 
       
            <WidgetRegForm
            wrapperProps={{label: null}}
            setting="speakers.workshops"
            options={{
              "categories": [
                'conversion',
                'marketing',
                'logistics',
                'payments',
                'it',
                'trends',
              ]
             }}
            />
      
            
        }

      leftCentered={true}

      />


      </Wrapper>


  <WidgetPhotostream setting="photostream_workshops" />

   



        <WidgetFaq setting="speakers.cfpfaq" />

        <WidgetIconGrid setting="workshops.benefits" icons={{
            FaSearch: FaSearch, 
            FaPoll: FaPoll, 
            FaTrophy: FaTrophy
        }} />


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
