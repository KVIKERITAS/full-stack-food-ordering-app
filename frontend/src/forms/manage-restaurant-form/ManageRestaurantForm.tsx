import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import CuisinesSection from './CuisinesSection'
import DetailsSection from './DetailsSection'

const formSchema = z.object({
	restaurantName: z.string({ required_error: 'Restaurant name is required' }),
	city: z.string({ required_error: 'City is required' }),
	country: z.string({ required_error: 'Country name is required' }),
	deliveryPrice: z.coerce.number({
		required_error: 'Delivery price is required',
		invalid_type_error: 'Must be a valid number',
	}),
	estimatedDeliveryTime: z.coerce.number({
		required_error: 'Estimated delivery time is required',
		invalid_type_error: 'Must be a valid number',
	}),
	cuisines: z
		.array(z.string())
		.nonempty({ message: 'Please select at least one item' }),
	menuItems: z.array(
		z.object({
			name: z.string().min(1, 'Name is required'),
			price: z.coerce.number().min(1, 'Price is required'),
		}),
	),
	imageFile: z.instanceof(File, { message: 'Image is required' }),
})

type RestaurantFormData = z.infer<typeof formSchema>

type Props = {
	onSave: (restaurantFormData: FormData) => void
	isLoading: boolean
}

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
	const form = useForm<RestaurantFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			cuisines: [],
			menuItems: [{ name: '', price: 0 }],
		},
	})

	const onSubmit = (formDataJson: RestaurantFormData) => {}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 bg-red-50 p-10 rounded-lg'
			>
				<DetailsSection />
				<Separator />
				<CuisinesSection />
			</form>
		</Form>
	)
}

export default ManageRestaurantForm