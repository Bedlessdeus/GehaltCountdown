import { json } from '@sveltejs/kit';
import { getTimeUntilNextPayment } from '$lib/utils/payment';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const countdown = getTimeUntilNextPayment();
		
		return json({
			success: true,
			data: countdown
		});
	} catch (error) {
		return json({
			success: false,
			error: 'Failed to calculate countdown'
		}, { status: 500 });
	}
};
