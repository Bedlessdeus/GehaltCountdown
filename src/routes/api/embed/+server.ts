import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const baseUrl = url.origin;
		
		const defaultParams = {
			theme: 'light',
			compact: 'false',
			labels: 'true',
			bg: '%23f8fafc'
		};
		
		const examples = [
			{
				name: 'Standard Widget',
				url: `${baseUrl}/embed`,
				iframe: `<iframe src="${baseUrl}/embed" width="600" height="200" frameborder="0" scrolling="no"></iframe>`
			},
			{
				name: 'Dark Theme',
				url: `${baseUrl}/embed?theme=dark&bg=%231f2937`,
				iframe: `<iframe src="${baseUrl}/embed?theme=dark&bg=%231f2937" width="600" height="200" frameborder="0" scrolling="no"></iframe>`
			},
			{
				name: 'Compact Mode',
				url: `${baseUrl}/embed?compact=true`,
				iframe: `<iframe src="${baseUrl}/embed?compact=true" width="600" height="120" frameborder="0" scrolling="no"></iframe>`
			},
			{
				name: 'No Labels',
				url: `${baseUrl}/embed?labels=false`,
				iframe: `<iframe src="${baseUrl}/embed?labels=false" width="600" height="160" frameborder="0" scrolling="no"></iframe>`
			}
		];
		
		return json({
			success: true,
			data: {
				embedEndpoint: `${baseUrl}/embed`,
				defaultParams,
				availableParams: {
					theme: {
						description: 'Theme selection',
						options: ['light', 'dark'],
						default: 'light'
					},
					compact: {
						description: 'Compact mode (no title)',
						options: ['true', 'false'],
						default: 'false'
					},
					labels: {
						description: 'Show time unit labels',
						options: ['true', 'false'],
						default: 'true'
					},
					bg: {
						description: 'Background color (URL encoded)',
						example: '%23f8fafc',
						default: '%23f8fafc'
					}
				},
				examples
			}
		});
	} catch (error) {
		return json({
			success: false,
			error: 'Failed to generate embed information'
		}, { status: 500 });
	}
};
