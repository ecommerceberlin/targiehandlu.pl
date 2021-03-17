
import React from 'react'
import { 
  WidgetStage, 
  connect,
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../../../settings'

const AdminStagesStage = ({stage}) =>  <WidgetStage stage={stage} first={true} enlarge={true} />

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  return await configure(store, {
    settings : settings,
    preload : ['presenters']
  })

})

export default connect()(AdminStagesStage);
