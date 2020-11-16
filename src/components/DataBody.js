import React from 'react';
import '../styles/DataBody.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DataBody({ users }) {
	//formating the DOB
	function formatDate(date) {
		const dateArray = date.split('-');
		const year = dateArray[0];
		const month = dateArray[1];
		const dayArray = dateArray[2].split('T');
		const day = dayArray[0];
		const formattedDate = [month, day, year].join('-');
		return formattedDate;
	}

	//calculating the age
	function calculateAge(date) {
		const dateArray = date.split('-');
		const year = dateArray[0];
		const month = dateArray[1];
		const dayArray = dateArray[2].split('T');
		const day = dayArray[0];
		const formattedDate = [month, day, year].join('-');
		const age = Math.floor(
			(new Date() - new Date(formattedDate).getTime()) / 3.15576e10
		);
		return age;
	}

	return (
		<tbody>
			{users[0] !== undefined && users[0].name !== undefined ? (
				users.map(({ login, name, picture, phone, email, dob, title }) => {
					return (
						<tr key={login.uuid}>
							<td data-th="Image" className="align-middle">
								<img
									src={picture.medium}
									alt={
										'employee directory image for ' +
										name.first +
										' ' +
										name.last
									}
									className="img-responsive"
								/>
							</td>
							<td data-th="Name" className="name-cell align-middle">
								{name.title}. {name.first} {name.last}
							</td>
							<td data-th="Phone" className="align-middle">
								<a href={'tel:' + phone}>{phone}</a>
							</td>
							<td data-th="Email" className="align-middle">
								<a href={'mailto:' + email} target="__blank">
									{email}
								</a>
							</td>
							<td data-th="DOB" className="align-middle">
								<OverlayTrigger
									overlay={
										<Tooltip id="tooltip-disabled">
											{calculateAge(dob.date)}
										</Tooltip>
									}
								>
									<span className="d-inline-block">{formatDate(dob.date)}</span>
								</OverlayTrigger>
							</td>
						</tr>
					);
				})
			) : (
				<></>
			)}
		</tbody>
	);
}

export default DataBody;
