import {
    connect,
    Wrapper,
    MyTypography as Text,
    TwoColsLayout,
    Exhibitor,
    reduxWrapper,
    configure,
    useDatasource
  } from 'eventjuicer-site-components';
  
  import {useRouter} from 'next/router'  
  
  const settings = require('../../settings').default;


  const PageAdminReport = () => {
  
    const data = useDatasource({resource: "report", filters: {
      sort: "profile.booth"
    }})
    
    const {query, asPath} = useRouter();
    
    console.log(query, asPath)
    
    //parse params!
    
  //   const { query } = props;
  //   const { range, sort, service } = query;
  
  //   const sorting = sort === 'booth' ? 'profile.booth' : 'company.name';
  
  //   let _filter =
  //     range && range.length > 0
  //       ? function(item) {
  //           return (
  //             'booth' in item.profile &&
  //             item.profile.booth &&
  //             range.split(',').includes(item.profile.booth.trim().charAt(0))
  //           );
  //         }
  //       : function() {
  //           return true;
  //         };
  
  //   const filterByService = function(item) {
  //     return (
  //       'purchases' in item &&
  //       Array.isArray(item.purchases) &&
  //       item.purchases.filter(p => p.role === 'service_' + service).length
  //     );
  //   };
  

  
   return (<Wrapper>{data.map(exhibitor => (<Exhibitor key={exhibitor.id} {...exhibitor} />))}</Wrapper>)
  
  }
  

  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["report"]
    })
  })
  
  export default connect()(PageAdminReport);
  