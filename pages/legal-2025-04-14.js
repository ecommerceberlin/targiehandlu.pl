import React from 'react'

import {
  Wrapper, 
  Markdown, 
  connect, 
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../settings'
import contents from './_markdown/legal-2025-04-14.md'

const PageLegal = () => (

  <Wrapper label="exhibitors.agreement.title">
     
  <Markdown>{contents}</Markdown>
</Wrapper>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  await configure(store, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageLegal);
