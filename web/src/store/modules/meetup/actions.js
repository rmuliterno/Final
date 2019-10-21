export function createMeetupRequest(
	title,
	description,
	banner_id,
	date,
	location,
	provider_id
) {
	return {
		type: '@meetup/CREATE_MEETUP_REQUEST',
		payload: { title, description, banner_id, date, location, provider_id },
	};
}

export function createMeetupSuccess(meetup) {
	return {
		type: '@meetup/CREATE_MEETUP_SUCCESS',
		payload: { meetup },
	};
}

export function createMeetupFailure() {
	return {
		type: '@meetup/CREATE_MEETUP_FAILURE',
	};
}

export function updateMeetupRequest(
	title,
	description,
	banner_id,
	date,
	location,
	provider_id
) {
	return {
		type: '@meetup/UPDATE_MEETUP_REQUEST',
		payload: { title, description, banner_id, date, location, provider_id },
	};
}

export function updateMeetupSuccess(meetup) {
	return {
		type: '@meetup/UPDATE_MEETUP_SUCCESS',
		payload: { meetup },
	};
}

export function updateMeetupFailure() {
	return {
		type: '@meetup/UPDATE_MEETUP_FAILURE',
	};
}
