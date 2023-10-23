import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    LinkedInLogin,
    Wrapper,
    WidgetPlanner
} from 'eventjuicer-site-components';


import settings from '../../settings'

const PagePlanner = ({email}) => (

    <div>

    <Wrapper>
    
    <WidgetPlanner email={email} />

    </Wrapper>

   

    </div>

)


export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {


await configure(props, {
    settings : settings,
    preload : []
})

return {props: props.query}

})


export default connect()(PagePlanner);
