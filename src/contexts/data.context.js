import { createContext, useState, useEffect } from 'react';

export const ScoreContext = createContext({
	currentScore: null,
	setCurrentScore: () => null,
});

export const ScoreProvider = ({children}) => {
	const [ currentScore, setCurrentScore ] = useState(0);

	const value = { currentScore, setCurrentScore };

	useEffect(() => {

	}, []);


	return (
		<ScoreContext.Provider value={value} >
			{children}
		</ScoreContext.Provider>
	);
};