import GridLayout from 'react-grid-layout'

// Material-UI
import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core'

// Icons
import StarIcon from '@material-ui/icons/Star'
import GetAppIcon from '@material-ui/icons/GetApp'

// React-grid-layout
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

// Data
const layout = [
	{
		w: 10,
		h: 6,
		x: 0,
		y: 0,
		i: '0',
		minW: 4,
		minH: 6,
		moved: false,
		static: false,
	},
	{
		w: 4,
		h: 6,
		x: 6,
		y: 6,
		i: '1',
		minW: 4,
		minH: 6,
		moved: false,
		static: false,
	},
	{
		w: 6,
		h: 6,
		x: 0,
		y: 6,
		i: '2',
		minW: 4,
		minH: 6,
		moved: false,
		static: false,
	},
	{
		w: 5,
		h: 6,
		x: 5,
		y: 12,
		i: '3',
		minW: 4,
		minH: 6,
		moved: false,
		static: false,
	},
	{
		w: 5,
		h: 6,
		x: 0,
		y: 12,
		i: '4',
		minW: 4,
		minH: 6,
		moved: false,
		static: false,
	},
]

const elements = [
	{
		title: 'Dropbox',
		description:
			'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
		downloads: 123,
		stars: 12,
	},
	{
		title: 'Medium Corporation',
		description:
			'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
		downloads: 234,
		stars: 34,
	},
	{
		title: 'Slack',
		description:
			'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
		downloads: 456,
		stars: 45,
	},
	{
		title: 'Lyft',
		description:
			'Lyft is an on-demand transportation company based in San Francisco, California.',
		downloads: 567,
		stars: 56,
	},
	{
		title: 'GitHub',
		description:
			'GitHub is a web-based hosting service for version control of code using Git.',
		downloads: 678,
		stars: 67,
	},
]

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	statsItem: {
		alignItems: 'center',
		display: 'flex',
	},
	statsIcon: {
		marginRight: theme.spacing(1),
	},
}))

const Dashboard = () => {
	const classes = useStyles()

	return (
		<div class={classes.root}>
			<GridLayout
				className="layout"
				layout={layout}
				cols={12}
				rowHeight={30}
				width={1200}
				onLayoutChange={console.log}
			>
				{elements.map(({ title, description, downloads, stars }, index) => (
					<Card key={String(index)} className={classes.root}>
						<CardContent>
							<Typography
								align="center"
								color="textPrimary"
								gutterBottom
								variant="h4"
							>
								{title}
							</Typography>
							<Typography align="center" color="textPrimary" variant="body1">
								{description}
							</Typography>
						</CardContent>
						<Box flexGrow={1} />
						<Divider />
						<Box p={2}>
							<Grid container justify="space-between" spacing={2}>
								<Grid className={classes.statsItem} item>
									<StarIcon className={classes.statsIcon} color="action" />
									<Typography
										color="textSecondary"
										display="inline"
										variant="body2"
									>
										{stars} Stars
									</Typography>
								</Grid>
								<Grid className={classes.statsItem} item>
									<GetAppIcon className={classes.statsIcon} color="action" />
									<Typography
										color="textSecondary"
										display="inline"
										variant="body2"
									>
										{downloads} Downloads
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Card>
				))}
			</GridLayout>
		</div>
	)
}

export default Dashboard
