import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    LinkedInLogin,
    Wrapper
} from 'eventjuicer-site-components';


import settings from '../settings'

const PagePlanner = () => (

    <div>

    <Wrapper>

    <LinkedInLogin />

    </Wrapper>

   

    </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

return await configure(props, {
    settings : settings,
    preload : []
})

})


export default connect()(PagePlanner);
