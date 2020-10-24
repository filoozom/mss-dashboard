import { useState } from 'preact/hooks'
import { Link } from 'preact-router'
import clsx from 'clsx'

// Material-UI
import {
	AppBar,
	Badge,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

// Components
import Logo from 'components/Logo'

const useStyles = makeStyles(() => ({
	root: {},
	avatar: {
		width: 60,
		height: 60,
	},
}))

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
	const classes = useStyles()
	const [notifications] = useState([])

	return (
		<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar>
				<Link href="/">
					<Logo />
				</Link>
				<Box flexGrow={1} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton color="inherit">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onMobileNavOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

export default TopBar
