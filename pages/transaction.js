
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

import { connect, configure, reduxWrapper, WidgetTransaction } from 'eventjuicer-site-components';
import settings from '../settings'


const PageTransaction = () => <WidgetTransaction setting="exhibitor_registration" />


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings: settings,
      preload: []
    })
    
  })


export default connect()(PageTransaction);
