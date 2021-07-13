
import React from 'react'
import { 
  WidgetStage, 
  connect,
  reduxWrapper, 
  configure
} from 'eventjuicer-site-components'

import settings from '../../../settings'

const AdminStagesStage = ({stage}) =>  <WidgetStage stage={stage} first={true} enlarge={true} />


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true //do not throw 404 when not cached....
  };
}

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
  return await configure(props, {
    settings : settings,
    preload : ['presenters']
  })

})

export default connect()(AdminStagesStage);
