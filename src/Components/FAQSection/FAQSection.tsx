import { FAQHeader } from '../FAQHeader/FAQHeader'

const FAQSection = () => {
	return (
		<div className='flex items-center bg-white rounded-2xl w-5/6 h-4/6 relative'>
			<div className='w-1/2 '></div>
			<img
				src='public\images\thinking-men.png'
				alt='men who thinking'
				className='w-1/2 object-contain object-center absolute -left-16'
			/>
			<FAQHeader />
		</div>
	)
}

export { FAQSection }
