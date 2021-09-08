import {
    connect,
    MyHead as Head,
    WidgetContestantCategories,
   // WidgetSalesMap,
    WidgetVoteStatus,
    WidgetRoleButtons,
    LayoutMain as Layout,
    MyTypography as Typography,
    Markdown,
    reduxWrapper,
    configure,
    Centered
  } from 'eventjuicer-site-components';
  
import TrendingUp from '@material-ui/icons/TrendingUp';
import EmojiTransportation from '@material-ui/icons/EmojiTransportation';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Power from '@material-ui/icons/Power';




const settings = require('../../settings').default;
  
  const PageVote  = () => (
  
      <div>
  
    <WidgetContestantCategories
      intro={
      
        <Centered>
            <div style={{ width: '40%', marginBottom: 50}}>
        <WidgetVoteStatus max_votes={6} />
          <Typography template="benefitsText">
            <Markdown label="callforpapers.voting.general-rules.description" />
          </Typography>
          </div>
          </Centered>
       
      }
      limit={350}
      filter={item => item
      //  item => "presentation_description" in item 
        //&& item.presentation_description.length > 10 
        //&& "avatar" in item 
        //&& item.avatar.indexOf('http') > -1 
        //&& "logotype" in item 
        //&& item.logotype.indexOf('http') > -1
      }
      keyword_source="presentation_category"
      label='callforpapers.categories.title'
      show_votes={false}
      first={true}
      icons={{
        conversion: TrendingUp,
        logistics: EmojiTransportation,
        payments: EuroSymbol,
        trends: EmojiObjects,
        marketing: VolumeUp,
        it: Power
      }}
    />
  
   
  
    {/* <WidgetRoleButtons /> */}
   
    </div>
    
  ) 
  
   
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ( props ) => {
  
    await configure(props, {
      settings : settings,
      preload : ["callforpapers"]
    })
  
    return {
      props : {},
      revalidate: 10
    }
  
  })
  
  export default connect()(PageVote);
  