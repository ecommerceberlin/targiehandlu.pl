import { 
    connect, 
    reduxWrapper,
    configure,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    WidgetRegForm
  } from 'eventjuicer-site-components';
  

  
  
  const settings = require('../../settings').default;
  
  
  
  const PagePresenters = () => (
    <>
    <WidgetPresenters setting="presenters" link={(item) => `/speakers/${item.id}` } />
  
    <WidgetVideoWithEventInfo />
  
    <WidgetRegForm setting="streaming_registration" />
  
  
    </>
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })
  
  })
  
  export default connect()(PagePresenters);
  