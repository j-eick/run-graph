import styled from 'styled-components';

import useStore from '../../hooks/useStore';
import CollapsibleRow from '../CollapsibleRow';

/**
 * ##################### STYLING #####################
 */
const StyledTableContainer = styled.table`
	width: 90vw;
	margin: 50px auto;
	padding: 10px;
	overflow: hidden;
	border-collapse: collapse;
	border-radius: 20px;
`;
const StyledTRHead = styled.tr`
	background-color: #cce1f5;
`;
const StyledTH = styled.th`
	padding: 10px 0;
	border-bottom: 1px solid white;
	font-size: var(--font_size_tableHead);
`;

/**
 * ##################### COMPONENT #####################
 */
export default function DataTable() {
	const runData = useStore(state => state.runData);

	return (
		<>
			<StyledTableContainer>
				<thead>
					<StyledTRHead>
						<StyledTH>Distance</StyledTH>
						<StyledTH>Time</StyledTH>
						<StyledTH>Pace</StyledTH>
						<StyledTH>Borg</StyledTH>
						<StyledTH>Pain</StyledTH>
					</StyledTRHead>
				</thead>
				<tbody>
					{runData.map(entry => (
						<CollapsibleRow key={entry.id} cellData={entry} />
					))}
				</tbody>
			</StyledTableContainer>
		</>
	);
}
