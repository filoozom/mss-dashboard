import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from 'redux'

// Material-UI
import { ThemeProvider, createStyles, makeStyles } from '@material-ui/core'

// Theme
import theme from 'src/theme'

// Layouts
import DashboardLayout from 'layouts/dashboard'

// Routes
import Dashboard from 'routes/dashboard'
import DragAndDrop from 'routes/drag-and-drop'
import Charts from 'routes/charts'

const useStyles = makeStyles(() =>
	createStyles({
		'@global': {
			'*': {
				boxSizing: 'border-box',
				margin: 0,
				padding: 0,
			},
			html: {
				'-webkit-font-smoothing': 'antialiased',
				'-moz-osx-font-smoothing': 'grayscale',
				height: '100%',
				width: '100%',
			},
			body: {
				backgroundColor: '#f4f6f8',
				height: '100%',
				width: '100%',
			},
			a: {
				textDecoration: 'none',
			},
			'#root': {
				height: '100%',
				width: '100%',
			},
		},
	})
)

// Routes
const routes = [
	{
		path: '/',
		element: <DashboardLayout />,
		children: [
			{ path: '/', element: <Dashboard /> },
			{ path: '/drag-and-drop', element: <DragAndDrop /> },
			{ path: '/charts', element: <Charts /> },
			{ path: '*', element: <Navigate to="/404" /> },
		],
	},
]

// Redux store
const store = createStore(() => {})

const Routing = () => {
	return useRoutes(routes)
}

const App = () => {
	// TODO: Make this a global state and toggle it on login
	// const [loggedIn, setLoggedIn] = useState(false)

	// Add style
	useStyles()

	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<Routing />
				</ThemeProvider>
			</ReduxProvider>
		</BrowserRouter>
	)
}

export default App
