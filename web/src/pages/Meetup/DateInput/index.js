import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', pt);

export default function DatePicker({ name }) {
	const ref = useRef(null);
	const { fieldName, registerField, defaultValue, error } = useField(name);
	const [selected, setSelected] = useState(defaultValue);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: ref.current,
			path: 'props.selected',
			clearValue: pickerRef => {
				pickerRef.clear();
			},
		});
	}, [ref.current, fieldName]); // eslint-disable-line

	return (
		<>
			<ReactDatePicker
				autocomplete="off"
				name={fieldName}
				placeholderText="Data do meetup"
				selected={selected}
				onChange={date => setSelected(date)}
				ref={ref}
				locale="pt-BR"
				showTimeSelect
				timeFormat="p"
				timeCaption="Hora"
				dateFormat="dd/MM/yyyy HH:mm"
				timeIntervals={60}
			/>
			{error && <span>{error}</span>}
		</>
	);
}
