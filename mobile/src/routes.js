import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Meetups from './pages/Meetups';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';

export default (isSigned = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator(
					{
						Meetups,
						Subscriptions,
						Profile,
					},
					{
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#fff',
							inactiveTintColor: 'rgba(255,255,255,0.6)',
							style: {
								backgroundColor: '#2B1A2F',
							},
						},
					},
				),
			},
			{
				initialRouteName: isSigned ? 'App' : 'Sign',
			},
		),
	);
