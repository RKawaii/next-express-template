import Head from 'next/head';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Layout.css';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Next-Express-Template</title>
      </Head>
      <Container id="body">{props.children}</Container>
    </div>
  );
};

export default Layout;
