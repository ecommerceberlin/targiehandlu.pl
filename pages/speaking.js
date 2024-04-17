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
  MyTypography,
  RecentSubmissions
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
       <Wrapper first label="cfp.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '1rem'}}>

          {/* <MyTypography template="h4" label="cfp.hello.submit" />
         
          <MyTypography template="subtitle1" label="cfp.hello.needs" />
  
          <Markdown label="cfp.hello.details" /> */}

        
        {/* <WidgetRegForm
      wrapperProps={{label: null}}
      setting="speakers.callforpapers"
      options={{
        "categories": [
          'conversion',
          'marketing',
          'logistics',
          'payments',
          'it',
          'trends',
          'ai',
        ]
       }}
      /> */}



  
          </div> }
        right={ 

          <>
          {/* <RecentSubmissions /> */}

{/* 
          <WidgetVerticalTimeline 
          setting="cfptimeline" 
          icons={{
            NoteAdd,
            Settings,
            Public,
            Mic,
            Assessment
          }} /> */}

          </> 
        }

      leftCentered={true}

      />


      </Wrapper>


  <WidgetPhotostream setting="cfpphotostream" />

  <Wrapper label="presenters.competition.rules.title">
  <Markdown label="presenters.competition.rules.content" />
  </Wrapper>

  
        {/* <WidgetJurors minToShow={4} /> */}


        <WidgetFaq setting="speakers.cfpfaq" />

        <WidgetIconGrid setting="speakers.benefits" icons={{
            FaSearch: FaSearch, 
            FaPoll: FaPoll, 
            FaTrophy: FaTrophy
        }} />


        <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        />

  {/* <WidgetRegForm
      setting="speakers.callforpapers"
      options={{
        "categories": [
          'conversion',
          'marketing',
          'logistics',
          'payments',
          'it',
          'trends',
          'ai',
        ]
       }}
      /> */}

        <WidgetVideoWithEventInfo
          setting="heroExpo"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />

        <WidgetRoleButtons first={false} />

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
