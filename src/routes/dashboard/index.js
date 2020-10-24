// Material-UI
import { Container, Grid, makeStyles } from '@material-ui/core'

// Components
import Budget from './budget'
import LatestOrders from './last-orders'
import LatestProducts from './latest-products'
import MathExample from './math-example'
import Sales from './sales'
import TasksProgress from './tasks-progress'
import TotalCustomers from './total-customers'
import TotalProfit from './total-profit'
import TrafficByDevice from './traffic-by-device'

// React-grid-layout
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}))

const Dashboard = () => {
	const classes = useStyles()

	return (
		<div class={classes.root}>
			<Container maxWidth={false}>
				<Grid container spacing={3}>
					<Grid item lg={12} sm={12} xl={12} xs={12}>
						<MathExample />
					</Grid>

					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<Budget />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalCustomers />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TasksProgress />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalProfit />
					</Grid>
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<Sales />
					</Grid>
					<Grid item lg={4} md={6} xl={3} xs={12}>
						<TrafficByDevice />
					</Grid>
					<Grid item lg={4} md={6} xl={3} xs={12}>
						<LatestProducts />
					</Grid>
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<LatestOrders />
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Dashboard
