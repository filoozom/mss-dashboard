import { useState } from 'preact/hooks'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { format } from 'date-fns'

// Material-UI
import {
	Box,
	Button,
	Card,
	CardHeader,
	Chip,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
	makeStyles,
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const data = [
	{
		ref: 'CDD1049',
		amount: 30.5,
		customer: {
			name: 'Ekaterina Tankova',
		},
		createdAt: 1555016400000,
		status: 'pending',
	},
	{
		ref: 'CDD1048',
		amount: 25.1,
		customer: {
			name: 'Cao Yu',
		},
		createdAt: 1555016400000,
		status: 'delivered',
	},
	{
		ref: 'CDD1047',
		amount: 10.99,
		customer: {
			name: 'Alexa Richardson',
		},
		createdAt: 1554930000000,
		status: 'refunded',
	},
	{
		ref: 'CDD1046',
		amount: 96.43,
		customer: {
			name: 'Anje Keizer',
		},
		createdAt: 1554757200000,
		status: 'pending',
	},
	{
		ref: 'CDD1045',
		amount: 32.54,
		customer: {
			name: 'Clarke Gillebert',
		},
		createdAt: 1554670800000,
		status: 'delivered',
	},
	{
		ref: 'CDD1044',
		amount: 16.76,
		customer: {
			name: 'Adam Denisov',
		},
		createdAt: 1554670800000,
		status: 'delivered',
	},
]

const useStyles = makeStyles(() => ({
	root: {},
	actions: {
		justifyContent: 'flex-end',
	},
}))

const LatestOrders = ({ className, ...rest }) => {
	const classes = useStyles()
	const [orders] = useState(data)

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader title="Latest Orders" />
			<Divider />
			<PerfectScrollbar>
				<Box minWidth={800}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Order Ref</TableCell>
								<TableCell>Customer</TableCell>
								<TableCell sortDirection="desc">
									<Tooltip enterDelay={300} title="Sort">
										<TableSortLabel active direction="desc">
											Date
										</TableSortLabel>
									</Tooltip>
								</TableCell>
								<TableCell>Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((order) => (
								<TableRow hover>
									<TableCell>{order.ref}</TableCell>
									<TableCell>{order.customer.name}</TableCell>
									<TableCell>{format(order.createdAt, 'dd/MM/yyyy')}</TableCell>
									<TableCell>
										<Chip color="primary" label={order.status} size="small" />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<Box display="flex" justifyContent="flex-end" p={2}>
				<Button
					color="primary"
					endIcon={<ArrowRightIcon />}
					size="small"
					variant="text"
				>
					View all
				</Button>
			</Box>
		</Card>
	)
}

export default LatestOrders
