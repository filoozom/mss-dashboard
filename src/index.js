import { Router } from 'preact-router'

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

const App = () => {
	// TODO: Make this a global state and toggle it on login
	// const [loggedIn, setLoggedIn] = useState(false)

	// Add style
	useStyles()

	return (
		<ThemeProvider theme={theme}>
			<DashboardLayout>
				<Router>
					<Dashboard path="/" />
					<DragAndDrop path="/drag-and-drop" />
					<Charts path="/charts" />
				</Router>
			</DashboardLayout>
		</ThemeProvider>
	)
}

export default App
