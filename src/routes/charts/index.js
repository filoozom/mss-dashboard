import { useState, useMemo } from 'preact/hooks'

// Material-UI
import {
	Container,
	Grid,
	Card,
	CardContent,
	Divider,
	TextField,
	makeStyles,
} from '@material-ui/core'

// Components
import Plot from './plot'
import Recharts from './recharts'

// Data
const plots = {
	'x^2': {
		xAxis: { domain: [-5, 5] },
		yAxis: { domain: [-1, 9] },
		grid: true,
		data: [
			{
				fn: 'x^2',
				derivative: {
					fn: '2 * x',
					updateOnMouseMove: true,
				},
			},
		],
	},
	circle: {
		xAxis: { domain: [-2, 2] },
		yAxis: { domain: [-2, 2] },
		grid: true,
		data: [
			{
				fn: 'x * x + y * y - 1',
				fnType: 'implicit',
			},
		],
	},
	flower: {
		xAxis: { domain: [-2, 2] },
		yAxis: { domain: [-2, 2] },
		grid: true,
		data: [
			{
				r: '2 * sin(4 theta)',
				fnType: 'polar',
				graphType: 'polyline',
			},
		],
	},
	geometry: {
		grid: true,
		xAxis: { domain: [-1, 9] },
		yAxis: { domain: [0, 10] },
	},
}

const rectangle = {
	coords: [1, 5],
	offset: [2, -2],
}

const vector = {
	vector: [5, 2],
	coords: rectanglePoints(rectangle)[0],
}

// Geometry functions
function rectanglePoints({ coords: [x, y], offset: [width, height] }) {
	return [
		[x, y],
		[x + width, y],
		[x + width, y + height],
		[x, y + height],
		[x, y],
	]
}

function translate(points, { vector: [offsetX, offsetY] }) {
	return points.map(([x, y]) => [x + offsetX, y + offsetY])
}

// Calculate a bit of simple geometry
plots.geometry.data = [
	// Print rectangle points
	{
		points: rectanglePoints(rectangle),
		fnType: 'points',
		graphType: 'scatter',
		color: 'blue',
	},

	// Print rectangle border
	{
		points: rectanglePoints(rectangle),
		fnType: 'points',
		graphType: 'polyline',
		color: 'blue',
	},

	// Print vector
	{
		vector: vector.vector,
		offset: vector.coords,
		graphType: 'polyline',
		fnType: 'vector',
		color: 'red',
	},

	// Print translated rectangle points
	{
		points: translate(rectanglePoints(rectangle), vector),
		fnType: 'points',
		graphType: 'scatter',
		color: 'green',
	},

	// Print translated rectangle border
	{
		points: translate(rectanglePoints(rectangle), vector),
		fnType: 'points',
		graphType: 'polyline',
		color: 'green',
	},
]

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}))

const Charts = () => {
	const classes = useStyles()

	const [input, setInput] = useState('x')
	const [formula, setFormula] = useState(input)
	const plot = useMemo(
		() => ({
			xAxis: { domain: [-2, 2] },
			yAxis: { domain: [-2, 2] },
			grid: true,
			data: [
				{
					fn: formula,
				},
			],
		}),
		[formula]
	)

	const onKeyDown = ({ key }) => {
		if (key === 'Enter') {
			setInput('')
			setFormula(input)
		}
	}

	return (
		<div class={classes.root}>
			<Container maxWidth={false}>
				<Grid container spacing={3}>
					<Grid item lg={4} sm={6} xl={4} xs={12}>
						<Card>
							<CardContent>
								<Plot options={plot} />
							</CardContent>
							<Divider />
							<CardContent>
								<TextField
									label="Math formula"
									fullWidth
									variant="outlined"
									onChange={(event) => setInput(event.target.value)}
									defaultValue={input}
									value={input}
									onKeyDown={onKeyDown}
								/>
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={8} sm={12} xl={8} xs={12}>
						<Card>
							<CardContent>
								<Recharts />
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={4} sm={6} xl={4} xs={12}>
						<Card>
							<CardContent>
								<Plot options={plots['x^2']} />
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={4} sm={6} xl={4} xs={12}>
						<Card>
							<CardContent>
								<Plot options={plots['circle']} />
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={4} sm={6} xl={4} xs={12}>
						<Card>
							<CardContent>
								<Plot options={plots['flower']} />
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={4} sm={6} xl={4} xs={12}>
						<Card>
							<CardContent>
								<Plot options={plots['geometry']} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Charts
