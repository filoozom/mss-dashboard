import { useState } from 'preact/hooks'
import clsx from 'clsx'
import { subHours, formatDistanceToNow } from 'date-fns'

// Product images
import ProductImage1 from 'src/assets/images/products/product_1.png'
import ProductImage2 from 'src/assets/images/products/product_2.png'
import ProductImage3 from 'src/assets/images/products/product_3.png'
import ProductImage4 from 'src/assets/images/products/product_4.png'
import ProductImage5 from 'src/assets/images/products/product_5.png'

// Material-UI
import {
	Box,
	Button,
	Card,
	CardHeader,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	makeStyles,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const data = [
	{
		name: 'Dropbox',
		imageUrl: ProductImage1,
		updatedAt: subHours(new Date(), 2),
	},
	{
		name: 'Medium Corporation',
		imageUrl: ProductImage2,
		updatedAt: subHours(new Date(), 2),
	},
	{
		name: 'Slack',
		imageUrl: ProductImage3,
		updatedAt: subHours(new Date(), 3),
	},
	{
		name: 'Lyft',
		imageUrl: ProductImage4,
		updatedAt: subHours(new Date(), 5),
	},
	{
		name: 'GitHub',
		imageUrl: ProductImage5,
		updatedAt: subHours(new Date(), 9),
	},
]

const useStyles = makeStyles({
	root: {
		height: '100%',
	},
	image: {
		height: 48,
		width: 48,
	},
})

const LatestProducts = ({ className, ...rest }) => {
	const classes = useStyles()
	const [products] = useState(data)

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader
				subtitle={`${products.length} in total`}
				title="Latest Products"
			/>
			<Divider />
			<List>
				{products.map((product, i) => (
					<ListItem divider={i < products.length - 1} key={product.id}>
						<ListItemAvatar>
							<img
								alt="Product"
								className={classes.image}
								src={product.imageUrl}
							/>
						</ListItemAvatar>
						<ListItemText
							primary={product.name}
							secondary={`Updated ${formatDistanceToNow(
								product.updatedAt
							)} ago`}
						/>
						<IconButton edge="end" size="small">
							<MoreVertIcon />
						</IconButton>
					</ListItem>
				))}
			</List>
			<Divider />
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

export default LatestProducts
