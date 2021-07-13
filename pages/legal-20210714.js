import React from 'react'

import {
  Wrapper, 
  Markdown, 
  connect, 
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../settings'

const PageFaq = () => (

  <Wrapper label="exhibitors.agreement.title">
     
  <Markdown>{`


  `}</Markdown>
</Wrapper>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  await configure(store, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageFaq);
