import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalContextProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();

root.render(
	<QueryClientProvider client={client}>
		{/* <ReactQueryDevtools /> */}
		<BrowserRouter>
			<GlobalContextProvider>
				<App />
			</GlobalContextProvider>
		</BrowserRouter>
	</QueryClientProvider>
);
