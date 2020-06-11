import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;