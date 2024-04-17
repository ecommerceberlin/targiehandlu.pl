import { 
    connect, 
    reduxWrapper,
    configure,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    WidgetRegForm,
    MyHead
  } from 'eventjuicer-site-components';
  

  import Head from 'next/head'
  
  const settings = require('../../settings').default;
  
  
  
  const PagePresenters = () => (
    <>

     <MyHead>{(data)=><Head>{data}</Head>}</MyHead>

    {/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } /> */}
  
    <WidgetVideoWithEventInfo setting="heroExpo" />
  
    {/* <WidgetRegForm setting="visitor.register" /> */}
  
  
    </>
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["presenters"]
    })
  
  })
  
  export default connect()(PagePresenters);
  