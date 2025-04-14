
import React, {useEffect} from 'react'

import { Markdown, Wrapper, connect, configure, reduxWrapper, WidgetTransaction } from 'eventjuicer-site-components';
import settings from '../settings'
import contents from './_markdown/legal-2025-04-14.md'

const PageTransaction = () => <div>
  <WidgetTransaction setting="exhibitor_registration" />
  <Wrapper label="exhibitors.agreement.title">
     <Markdown>{contents}</Markdown>
   </Wrapper>
</div>

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: []
    })
    
  })


export default connect()(PageTransaction);
