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

    <WidgetPresenters setting="virtual_speakers" link={(item) => `/speakers/${item.id}` } />
  
    <WidgetVideoWithEventInfo setting="heroStreaming" />
  
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
  