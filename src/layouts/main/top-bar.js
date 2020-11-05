import { Link } from 'react-router-dom'
import clsx from 'clsx'

// Material-UI
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'

// Components
import Logo from 'components/Logo'

const useStyles = makeStyles({
	root: {},
	toolbar: {
		height: 64,
	},
})

const TopBar = ({ className, ...rest }) => {
	const classes = useStyles()

	return (
		<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar className={classes.toolbar}>
				<Link to="/">
					<Logo />
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
