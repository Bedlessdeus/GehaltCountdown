import { json } from '@sveltejs/kit';
import { getNextPaymentDate } from '$lib/utils/payment';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const nextPaymentDate = getNextPaymentDate();
		
		return json({
			success: true,
			data: {
				date: nextPaymentDate.toISOString(),
				formatted: nextPaymentDate.toLocaleDateString('de-DE', { 
					day: '2-digit', 
					month: 'long', 
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				}),
				timestamp: nextPaymentDate.getTime()
			}
		});
	} catch (error) {
		return json({
			success: false,
			error: 'Failed to get next payment date'
		}, { status: 500 });
	}
};
