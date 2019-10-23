export function createMeetupRequest(
	provider_id,
	banner_id,
	title,
	description,
	date,
	location
) {
	return {
		type: '@meetup/CREATE_MEETUP_REQUEST',
		payload: { provider_id, title, description, banner_id, date, location },
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
	id,
	provider_id,
	title,
	description,
	banner_id,
	date,
	location
) {
	return {
		type: '@meetup/UPDATE_MEETUP_REQUEST',
		payload: {
			id,
			provider_id,
			title,
			description,
			banner_id,
			date,
			location,
		},
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
