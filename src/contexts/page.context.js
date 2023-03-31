import { createContext, useState, useEffect } from 'react';

export const PageContext = createContext({
	currentPage: null,
	setCurrentPage: () => null,
});

export const PageProvider = ({children}) => {
	const [ currentPage, setCurrentPage ] = useState(null);

	const value = { currentPage, setCurrentPage };

	useEffect(() => {

	}, []);


	return (
		<PageContext.Provider value={value} >
			{children}
		</PageContext.Provider>
	);
};