import { useState } from 'preact/hooks'
import clsx from 'clsx'
import Latex from 'react-latex'

// Material-UI
import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
	makeStyles,
	TextField,
} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import GetAppIcon from '@material-ui/icons/GetApp'

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

const MathExample = () => {
	const classes = useStyles()
	const [latex, setLatex] = useState('$(3\\times 4) \\div (5-3)$')

	return (
		<Card className={clsx(classes.root)}>
			<CardContent>
				<Typography
					align="center"
					color="textPrimary"
					gutterBottom
					variant="h4"
				>
					Math generator
				</Typography>
				<Latex displayMode={true}>{latex}</Latex>
			</CardContent>
			<Box flexGrow={1} />
			<Divider />
			<CardContent>
				<TextField
					label="Math formula"
					multiline
					fullWidth
					rows={4}
					variant="outlined"
					onChange={(event) => setLatex(event.target.value)}
					defaultValue={latex}
				/>
			</CardContent>
			<Box flexGrow={1} />
			<Divider />
			<Box p={2}>
				<Grid container justify="space-between" spacing={2}>
					<Grid className={classes.statsItem} item>
						<AccessTimeIcon className={classes.statsIcon} color="action" />
						<Typography color="textSecondary" display="inline" variant="body2">
							Updated 2hr ago
						</Typography>
					</Grid>
					<Grid className={classes.statsItem} item>
						<GetAppIcon className={classes.statsIcon} color="action" />
						<Typography color="textSecondary" display="inline" variant="body2">
							1254 Downloads
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Card>
	)
}

export default MathExample
