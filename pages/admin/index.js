
import React from 'react'
import { 
  WidgetStage, 
  connect,
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../../settings'

const Admin = () =>  <div></div>



export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
  return await configure(props, {
    settings : settings,
    preload : ['presenters']
  })

})

export default connect()(Admin);
