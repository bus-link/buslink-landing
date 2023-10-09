'use client';
import {useReducer} from 'react';

import Header from '../text/header';
import FormTextInput from '../input/form-input';
import {Button} from '../ui/button';

type FormData = {
	email: string;
};

type FormAction = {
	type: 'UPDATE_FORMDATA' | 'UPDATE';
	payload: Partial<FormData>;
};

const initialState: FormData = {
	email: '',
};

const formReducer = (state: FormData, action: FormAction) => {
	switch (action.type) {
		case 'UPDATE_FORMDATA':
			return {...state, ...action.payload};
		default:
			return state;
	}
};

const SubscribeSection = () => {
	const [formData, updateFormData] = useReducer(formReducer, initialState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateFormData({
			type: 'UPDATE_FORMDATA',
			payload: {[event.target.name]: event.target.value},
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log('[SUBSCRIBE-PAYLOAD] :: ', formData);
	};

	return (
		<section className='w-full py-5 pb-20 pt-20 md:py-20 px-8 md:px-32 bg-subscribe bg-green-100'>
			<div className='bg-white h-full rounded-lg w-full flex flex-wrap items-center justify-between py-20 md:px-10 px-5'>
				<div className='space-y-3'>
					<Header
						classNames='text-2xl text-cente'
						text='Like our service? Subscribe us'
					/>
					<p className='text-sm text-cente'>
						We have more than thousand of creative entrepreneurs and
						stat joining our business
					</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-3 mt-5 md:mt-0'>
					<div className='flex flex-col md:flex-row items-center md:space-x-3'>
						<FormTextInput
							name='email'
							padding='py-4 px-4'
							value={formData.email}
							handleChange={handleChange}
							placeHolder='Enter Email address'
							classes='w-full text-sm placeholder:text-sm border focus:border-slate-500 bg-slate-200 rounded-lg'
						/>
						<Button
							type='submit'
							className='bg-green-600 hover:bg-green-700 h-12 text-white hover:text-white w-full md:w-fit mt-5 md:mt-0'
						>
							Subscribe
						</Button>
					</div>

					<div className='space-x-3 flex items-center'>
						<input type='checkbox' name='' id='' />
						<p className='text-xs text-slate-400'>
							Don't provide any promotional message.
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SubscribeSection;
