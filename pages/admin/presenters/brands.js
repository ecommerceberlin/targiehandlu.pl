
import React from 'react'
import { 
  MyTypography as Typography,
  connect,
  reduxWrapper, 
  configure,
  Wrapper,
  useDatasource,
  getPresenterOgImage,
  getPresenterFbAd,
  getComplexImage,
  getSpeakerName,
  get as _get,
  Divider,
  TwoColsLayout,
  MyLink as Link,
  Box,
  Grid,
  resizeCloudinaryImage,
  Avatar,
  makeStyles
} from 'eventjuicer-site-components'


import settings from '../../../settings'


const useStyles = makeStyles(theme => ({

      avatarContainerFluid: {
        height: "80%",
        width: "80%",
        padding: "5%"
      },
    
      avatarImg: {
        objectFit: "contain",
        maxHeight: "90%",
        maxWidth: "90%",
      },

}))

const PageAdminSpeakersGfx = () => {

const classes = useStyles();

const presenters = useDatasource({resource: "presenters"}) 

return (  <Wrapper first label=""><Grid container spacing={0}>{
  
  presenters.map(presenter => {

    const name = getSpeakerName(presenter);
    const job = `${_get(presenter, 'position')} ${_get(presenter,'cname2')}`;
    const bio = `${_get(presenter, 'bio')}`;
    const title = `${_get(presenter, 'presentation_title')}`;
    const description = `${_get(presenter,'presentation_description')}`;    
    const logotype = `${_get(presenter,'logotype_cdn')}`;


  return (

   <Grid key={presenter.id} item xl={3} lg={3} md={3}>
   
   <Avatar variant="square" src={ resizeCloudinaryImage(logotype, 600, 300) } classes={{
           root: classes.avatarContainerFluid,
           img: classes.avatarImg
         }}/>
    </Grid>
    
  );
})}
 </Grid></Wrapper>)
}


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  return await configure(store, {
    settings : settings,
    preload : ['presenters'],
    cache: 5
  })

})

export default connect()(PageAdminSpeakersGfx);
