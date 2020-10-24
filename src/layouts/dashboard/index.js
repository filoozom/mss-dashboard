import { useState } from 'preact/hooks'

// Material-UI
import { makeStyles } from '@material-ui/core'

// Components
import NavBar from './nav-bar'
import TopBar from './top-bar'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		width: '100%',
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		paddingTop: 64,
		[theme.breakpoints.up('lg')]: {
			paddingLeft: 256,
		},
	},
	contentContainer: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	content: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto',
	},
}))

const DashboardLayout = ({ children }) => {
	const classes = useStyles()
	const [isMobileNavOpen, setMobileNavOpen] = useState(false)

	return (
		<div className={classes.root}>
			<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardLayout