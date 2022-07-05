import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalContextProvider } from './context/GlobalContext';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();

root.render(
	<QueryClientProvider client={client}>
		{/* <ReactQueryDevtools /> */}
		<BrowserRouter>
			<AuthContextProvider>
				<GlobalContextProvider>
					<App />
				</GlobalContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</QueryClientProvider>
);
