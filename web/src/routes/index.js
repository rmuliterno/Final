import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Meetup from '../pages/Meetup';
import Profile from '../pages/Profile';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={SignIn} />
			<Route path="/signup" component={SignUp} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/details" component={Details} />
			<Route path="/meetup" component={Meetup} />
			<Route path="/profile" component={Profile} />
		</Switch>
	);
}
