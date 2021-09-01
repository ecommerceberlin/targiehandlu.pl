import React from 'react';

import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetRegForm,
    Loading,
    MyTypography,
    useUserData,
    SubPageButton,
    TextSection
  } from 'eventjuicer-site-components';
  
import settings from '../settings';
  
const PageAccount = () => {

    const user = useUserData();
    
   if(user){
    return (<Wrapper>
        <WidgetRegForm 
            setting="speakers.callforpapers_update"
            fields={[
                {name: "presentation_title", required: true},
                {name: "presentation_description", required: true, long: true },
                {name: "presenter", required: true},
                {name: "bio", long: true, required: true},
                {name: "logotype"},
                {name: "avatar", long: true},
                {name: "position", long: true},
         ]}
         data={user.fields} 
         token={user.token}
         actionFinishedProps={{
            action : "profile_updated", 
            category : "visitors", 
            // label : "method",
            // value : ""
         }}
         right={null}
         />
         </Wrapper>)
   }

   return (<Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}><Loading /></Wrapper>)
   
}
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
        settings: settings,
        //preload: ['contestant_companies_all']
    })

    return {
        props: {},
        revalidate: 1
    }  
  })
  
  
 export default connect()(PageAccount);
  
  
  
  