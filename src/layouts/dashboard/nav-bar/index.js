import { useState, useEffect } from 'preact/hooks'
import { Link, useLocation } from 'react-router-dom'

// Assets
import AvatarImage from 'src/assets/images/avatars/avatar_3.png'

// Material-UI
import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography,
	makeStyles,
} from '@material-ui/core'

// React-Feather
import {
	BarChart as BarChartIcon,
	ShoppingBag as ShoppingBagIcon,
	PieChart as PieChartIcon,
} from 'react-feather'

// Components
import NavItem from './nav-item'

const user = {
	avatar: AvatarImage,
	jobTitle: 'Developer',
	name: 'Philippe Schommers',
}

const items = [
	{
		href: '/',
		icon: BarChartIcon,
		title: 'Dashboard',
	},
	{
		href: '/drag-and-drop',
		icon: ShoppingBagIcon,
		title: 'Drag and drop',
	},
	{
		href: '/charts',
		icon: PieChartIcon,
		title: 'Charts',
	},
]

const useStyles = makeStyles(() => ({
	mobileDrawer: {
		width: 256,
	},
	desktopDrawer: {
		width: 256,
		top: 64,
		height: 'calc(100% - 64px)',
	},
	avatar: {
		cursor: 'pointer',
		width: 64,
		height: 64,
	},
}))

const NavBar = ({ onMobileClose, openMobile }) => {
	const classes = useStyles()
	const location = useLocation()

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname])

	const content = (
		<Box height="100%" display="flex" flexDirection="column">
			<Box alignItems="center" display="flex" flexDirection="column" p={2}>
				<Avatar
					className={classes.avatar}
					component={Link}
					src={user.avatar}
					to="/"
				/>
				<Typography className={classes.name} color="textPrimary" variant="h5">
					{user.name}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box p={2}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box flexGrow={1} />
			<Box p={2} m={2} bgcolor="background.dark">
				<Typography align="center" gutterBottom variant="h4">
					Have some feedback?
				</Typography>
				<Typography align="center" variant="body2">
					Contact us below.
				</Typography>
				<Box display="flex" justifyContent="center" mt={2}>
					<Button color="primary" component="a" href="/" variant="contained">
						Contact
					</Button>
				</Box>
			</Box>
		</Box>
	)

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					classes={{ paper: classes.mobileDrawer }}
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden mdDown>
				<Drawer
					anchor="left"
					classes={{ paper: classes.desktopDrawer }}
					open
					variant="persistent"
				>
					{content}
				</Drawer>
			</Hidden>
		</>
	)
}

export default NavBar
