import { useEffect, useState, useCallback } from 'preact/hooks'
import { useMeasure } from 'react-use'

// Material-UI
import { makeStyles } from '@material-ui/core'

// Charting
import functionPlot from 'function-plot'

const useStyles = makeStyles(() => ({
	plot: {
		width: '100%',
	},
}))

const Plot = ({ options }) => {
	const classes = useStyles()

	const [ref, setRef] = useState()
	const [setMeasureRef, { width }] = useMeasure()
	const initRef = useCallback(
		(ref) => {
			setRef(ref)
			setMeasureRef(ref)
		},
		[setRef, setMeasureRef]
	)

	useEffect(() => {
		if (!ref || !width) {
			return
		}

		// Clear all the HTML of the container in order to avoid issues
		ref.innerHTML = ''
		functionPlot({
			target: ref,
			width,
			height: width,
			...options,
		})
	}, [ref, width, options])

	return <div class={classes.plot} ref={initRef} />
}

export default Plot
