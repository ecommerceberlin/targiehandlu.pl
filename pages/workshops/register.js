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
  WidgetVerticalTimeline,
  Box
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
} from '../../components/icons'


import settings from '../../settings';


const PageRegister = () => (

  <div>
       <Wrapper first label="workshops.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '5rem'}}>
        <MyTypography template="h4" label="workshops.hello.submit" />
        <Markdown label="workshops.hello.details" />

  
  </div> }
        right={ 
          <WidgetVerticalTimeline 
          setting="workshopstimeline" 
          icons={{
            NoteAdd,
            Settings,
            Public,
            Mic,
            Assessment
          }} />
        }

      leftCentered={true}

      />

        <WidgetRegForm
          wrapperProps={{label: null}}
         setting="workshops.registration"
      />

      </Wrapper>

      <WidgetFaq setting="workshops.faq" />    

      <WidgetPhotostream setting="workshops.photostream" />

      <WidgetVideoWithEventInfo
          setting="heroExpo"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />

  </div>
)
    


      { <WidgetIconGrid setting="workshops.benefits" icons={{
             FaSearch: FaSearch, 
             FaPoll: FaPoll, 
             FaTrophy: FaTrophy
        }} /> }



   
  {/* <WidgetRegForm setting="visitor.register" /> */}
{/* <WidgetSchedule /> */}






        {/* <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        /> */}



       


  // </div>






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

export default connect()(PageRegister);
