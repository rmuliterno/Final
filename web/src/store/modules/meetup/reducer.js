import produce from 'immer';

const INITIAL_STATE = {
	meetup: null,
	banner: null,
};

export default function meetup(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@meetup/CREATE_MEETUP_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@meetup/CREATE_MEETUP_SUCCESS': {
				draft.meetup = action.payload.meetup;
				draft.banner = action.payload.meetup.banner;
				draft.loading = false;
				break;
			}
			case '@meetup/CREATE_MEETUP_FAILURE': {
				draft.meetup = null;
				draft.banner = null;
				draft.loading = false;
				break;
			}
			case '@meetup/UPDATE_MEETUP_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@meetup/UPDATE_MEETUP_SUCCESS': {
				draft.meetup = action.payload.meetup;
				draft.banner = action.payload.meetup.banner;
				draft.loading = false;
				break;
			}
			case '@meetup/UPDATE_MEETUP_FAILURE': {
				draft.meetup = null;
				draft.banner = null;
				draft.loading = false;
				break;
			}
			default:
		}
	});
}
