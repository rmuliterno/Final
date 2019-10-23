import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
	const tron = Reactotron.configure({ name: 'MeetApp' })
		.useReactNative()
		.use(reactotronRedux())
		.use(reactotronSaga())
		.connect({ enabled: true, host: '192.168.99.100', port: '9090' });

	tron.clear();

	console.tron = tron;
}
