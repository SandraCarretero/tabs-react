import { useState } from 'react';
import { v4 } from 'uuid';
import { StyledContainer, StyledTab, StyledTabsContainer } from './tabs.styles';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const info = ['Info 1', 'Info 2', 'Info 3'];

const Tabs = () => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<h1>Tabs</h1>
            <StyledContainer>
                <StyledTabsContainer>
			{tabs.map((tab, index) => (
				<StyledTab key={v4()} $active = {tabActive === index} onClick={() => setTabActive(index)} >{tab}</StyledTab>
			))}

                </StyledTabsContainer>
            <p>{info[tabActive]}</p>
            </StyledContainer>
		</>
	);
};

export default Tabs;
