import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPublic,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && !isPublic) {
    return <Redirect to="/" />;
  }

  if (signed && isPublic) {
    return <Redirect to="/deliveries" />;
  }

  const Layout = signed ? DefaultLayout : null;
  if (signed) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            {' '}
            <Component {...props} />{' '}
          </Layout>
        )}
      />
    );
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPublic: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPublic: false,
};
