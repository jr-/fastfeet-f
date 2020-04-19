import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Couriers from '~/pages/Couriers';
import Recipients from '~/pages/Recipients';
import DeliveryProblems from '~/pages/DeliveryProblems';

import CourierInput from '~/pages/CourierInput';
import RecipientInput from '~/pages/RecipientInput';
import DeliveryInput from '~/pages/DeliveryInput';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact isPublic component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} />
      <Route path="/couriers" exact component={Couriers} />
      <Route path="/recipients" exact component={Recipients} />
      <Route path="/problems" exact component={DeliveryProblems} />
      <Route path="/couriers/edit" exact component={CourierInput} />
      <Route path="/recipients/edit" exact component={RecipientInput} />
      <Route path="/delivery/edit" exact component={DeliveryInput} />
      <Route path="/delivery/add" exact component={DeliveryInput} />
      <Route path="/couriers/add" exact component={CourierInput} />
      <Route path="/recipients/add" exact component={RecipientInput} />
    </Switch>
  );
}
