import dynamic from 'next/dynamic';
import { MyLink as Link } from '../next';
import { connect } from 'react-redux';

import {
//  MyTypography as Typography,
  Wrapper,
//  ColumnList,
  Avatarlist
} from '../components';

import {
  VideoWithEventInfo,
  Visitor, 
  Company, 
  AllExhibitorsColumnList, 
//  SalesMap,
  RoleButtons,
  Presenters,
  Schedule
} from '../compositions'
import Layout from '../layouts/main';

class PageCompany extends React.Component {

  static async getInitialProps({
    query,
    asPath,
    isServer,
    store
  }) {
    const company = `companies/${query.id}`;

    return {
      asPath: asPath,
      preload : [company, "exhibitors", "bookingmap"],
      company_id : query.id
    };
  }

  render() {

    const { company_id, exhibitors, asPath } = this.props;

    return (

      <Layout>

        <Company id={company_id} asPath={asPath} />

        <VideoWithEventInfo />

        <Visitor />

        {/* <Schedule />

        <Visitor />

        <RoleButtons />

        <AllExhibitorsColumnList /> */}
    
      </Layout>
    );
  }
}

export default connect()(PageCompany);
