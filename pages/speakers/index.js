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

    <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } />
  
    {/* <WidgetRegForm setting="visitor.register" /> */}

    <WidgetVideoWithEventInfo setting="heroExpo" />
  
  
    </>
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["presenters"],
      cache: 300
    })
  
  })
  
  export default connect()(PagePresenters);
  