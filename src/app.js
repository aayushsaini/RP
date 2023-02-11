import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import './app.css';
import Error from './Pages/Error/Error';
import Contact from './Pages/Contact/Contact';
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage';

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/restaurant/:id',
				element: <RestaurantPage />,
			},
		],
	},
]);

export default appRouter;
