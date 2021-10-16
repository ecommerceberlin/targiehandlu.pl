import {
    connect,
    Wrapper,
    MyTypography as Text,
    Box,
    Exhibitor,
    reduxWrapper,
    configure,
    useDatasource,
    Alert
  } from 'eventjuicer-site-components';
  
  import {useRouter} from 'next/router'  
  
  const settings = require('../../settings').default;

  const reducer = (acc, currentValue) => acc + currentValue.quantity;

  const howManyBooths = (purchases) => purchases.filter(item => item.role=="exhibitor").length
  const howManyCatering = (purchases) => purchases.filter(item => item.id == 1776).reduce(reducer, 0)
  const howManyParking = (purchases) => purchases.filter(item => item.id == 1780).reduce(reducer, 0)
  
  const cateringReal = (purchases, reps) => {
    const booths = howManyBooths(purchases)
    const catering = howManyCatering(purchases)

    if(!reps){
      return 1 + catering
    }

    if(reps > booths * 4){
      return (booths * 4) + catering
    }else{
      return reps + catering
    }
  }
  const parkingReal = (purchases) => howManyBooths(purchases) * 1 + howManyParking(purchases)

  const ExhibitorAlert = ({reps, purchases}) => {
    return <Alert type="info" content={<>Catering: <strong>{cateringReal(purchases, reps)}</strong> {` `}
    Parking: <strong>{parkingReal(purchases)}</strong></>} />
  }

  const PageAdminReport = () => {
  
    const data = useDatasource({resource: "report", filters: {
      sort: "profile.booth"
    }})
    
    const {query} = useRouter();
    
    const countTotals = () => {
      let catering = 0;
      let parking = 0;

      data.map(exhibitor => {
        catering = catering + cateringReal(exhibitor.purchases, exhibitor.reps);
        parking = parking + parkingReal(exhibitor.purchases)
      })

      return {catering, parking}
    }

    const totals = countTotals();

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
  
   

   return (<Wrapper>
     <Alert content={`Total catering: ${totals.catering} Total parking: ${totals.parking}`} />
     
     {data.map(exhibitor => <Exhibitor 
      key={exhibitor.id} 
      {...exhibitor} 
      roles={["presenter","service_internal","service_external"]}
      alert={<ExhibitorAlert key={exhibitor.id}  {...exhibitor} />}
      />)}
  
   </Wrapper>)
  
  }
  

  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ["report"]
    })
  })
  
  export default connect()(PageAdminReport);
  