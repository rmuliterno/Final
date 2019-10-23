import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
	const tron = Reactotron.configure({ name: 'MeetApp' })
		.setAsyncStorageHandler(AsyncStorage)
		.useReactNative()
		.use(reactotronRedux())
		.use(reactotronSaga())
		.connect({ enabled: true, host: '192.168.0.10', port: '9090' });

	tron.clear();

	console.tron = tron;
}
