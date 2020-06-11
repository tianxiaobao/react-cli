import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;