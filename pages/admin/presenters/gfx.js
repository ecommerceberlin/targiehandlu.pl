
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
  Box
} from 'eventjuicer-site-components'


import settings from '../../../settings'


const PageAdminSpeakersGfx = () => {

const presenters = useDatasource({resource: "presenters"}) 

return (  <Wrapper first label="">{
  
  presenters.map(presenter => {

    const name = getSpeakerName(presenter);
    const job = `${_get(presenter, 'position')} ${_get(presenter,'cname2')}`;
    const bio = `${_get(presenter, 'bio')}`;
    const title = `${_get(presenter, 'presentation_title')}`;
    const description = `${_get(presenter,'presentation_description')}`;

    const ogImage = getPresenterOgImage(presenter, "tehonline_template_speaker2"); 
    const fbImage = getPresenterFbAd(presenter, "tehonline_template_speaker_square3");
    const fbImage2 = getPresenterFbAd(presenter, "tehonline_template_speaker_square4");
    const fbImageV = getComplexImage(presenter, "tehonline_template_speaker_vertical", {
      avatar: {size: 700},
      logotype: {width: 700, height: 400, top: 400}
    });

    const linkParams = {
      href: `/speakers/${presenter.id}`
    }

  return (
    <div key={presenter.id}>
      <TwoColsLayout
        leftSize={3}
        left={
          <div style={{ marginTop: 10 }}>
            <div style={{ marginBottom: 10 }}>
              <Typography template="presenter1">{name}</Typography>
              <Typography template="presenter2">{job}</Typography>
              <Typography template="presenterText">{bio}</Typography>
            </div>

            <Divider />

            <Box mt={3}>
              <Typography template="presenter2">{title}</Typography>
              <Typography template="presenterText">
                {description}
              </Typography>
              <Link {...linkParams} label="common.details" />
            </Box>
          </div>
        }
        leftCentered={false}
        right={
          
          <Box>
          <Box mt={3}><img
            src={ogImage}
            alt=""
            style={{ maxHeight: 200 }}
          /></Box>

           <Box mt={3}><img
            src={fbImage}
            alt=""
            style={{ marginTop: 10, maxHeight: 200 }}
          /></Box>

           <Box mt={3}><img
            src={fbImage2}
            alt=""
            style={{ marginTop: 10, maxHeight: 200 }}
          /></Box>


             <Box mt={3}><img
            src={fbImageV}
            alt=""
            style={{ marginTop: 10, maxHeight: 200 }}
          /></Box>

          </Box>
         
        }
      />

      <Divider />
    </div>
  );
})}
</Wrapper>)
}


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
  return await configure(store, {
    settings : settings,
    preload : ['presenters'],
    cache: 5
  })

})

export default connect()(PageAdminSpeakersGfx);
