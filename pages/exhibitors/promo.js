import React from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    PartnerPerformance,
    Wrapper
  } from 'eventjuicer-site-components';
  
  import settings from '../../settings';
  
 
  const PagePromo = () => (
  
    <>
    
    <Wrapper>
    <PartnerPerformance />
    </Wrapper>

   
    </>
  
  )
  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
      settings : settings,
      preload : ['ranking','prizes']
    })
  
    return {props: {}, 
        revalidate: 30
    }

  })
  
  
  export default connect()(PagePromo);
  