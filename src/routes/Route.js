import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

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
