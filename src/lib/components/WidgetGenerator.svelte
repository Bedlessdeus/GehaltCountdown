<script>
	import { page } from '$app/stores';

	let theme = $state('light');
	let compact = $state(false);
	let showLabels = $state(true);
	let backgroundColor = $state('#f8fafc');
	let width = $state(600);
	let height = $state(200);

	const baseUrl = $derived($page.url.origin);
	const embedUrl = $derived(
		`${baseUrl}/embed?theme=${theme}&compact=${compact}&labels=${showLabels}&bg=${encodeURIComponent(backgroundColor)}`
	);
	const iframeCode = $derived(`<iframe 
	src="${embedUrl}" 
	width="${width}" 
	height="${height}" 
	frameborder="0" 
	scrolling="no"
	style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
</iframe>`);

	function copyToClipboard() {
		navigator.clipboard.writeText(iframeCode).then(() => {
			alert('Iframe code copied to clipboard!');
		});
	}

	$effect(() => {
		if (theme === 'dark') {
			backgroundColor = '#1f2937';
		} else {
			backgroundColor = '#f8fafc';
		}
	});

	$effect(() => {
		if (compact) {
			height = showLabels ? 120 : 100;
		} else {
			height = showLabels ? 200 : 160;
		}
	});
</script>

<div class="mb-8 rounded-lg bg-gray-800 p-6 shadow-lg">
	<h2 class="mb-6 text-2xl font-bold text-white">🔧 Widget Generator</h2>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="space-y-4">
			<h3 class="mb-4 text-lg font-semibold text-gray-300">Configuration</h3>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-300" for="theme-select">
					Theme
				</label>
				<select
					bind:value={theme}
					class="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
					id="theme-select"
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</div>

			<div class="flex items-center">
				<input type="checkbox" id="compact" bind:checked={compact} class="mr-2" />
				<label for="compact" class="text-sm font-medium text-gray-300">
					Compact mode (without title)
				</label>
			</div>

			<div class="flex items-center">
				<input type="checkbox" id="labels" bind:checked={showLabels} class="mr-2" />
				<label for="labels" class="text-sm font-medium text-gray-300">
					Show labels
				</label>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-300"> Background Color </label>
				<div class="flex gap-2">
					<input
						type="color"
						bind:value={backgroundColor}
						class="h-10 w-12 rounded border border-gray-600"
					/>
					<input
						type="text"
						bind:value={backgroundColor}
						class="flex-1 rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
						placeholder="#f8fafc"
					/>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="mb-2 block text-sm font-medium text-gray-300"> Width (px) </label>
					<input
						type="number"
						bind:value={width}
						min="300"
						max="1200"
						class="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
					/>
				</div>
				<div>
					<label class="mb-2 block text-sm font-medium text-gray-300"> Height (px) </label>
					<input
						type="number"
						bind:value={height}
						min="80"
						max="400"
						class="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
					/>
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="mb-4 text-lg font-semibold text-gray-300">Preview</h3>

			<div class="overflow-hidden rounded-lg border border-gray-600">
				<iframe
					src={embedUrl}
					width={Math.min(width, 400)}
					height={Math.min(height, 200)}
					frameborder="0"
					scrolling="no"
					style="display: block; margin: 0 auto; border-radius: 4px;"
					title="Countdown Widget Preview"
				></iframe>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-300"> Iframe Code </label>
				<div class="relative">
					<textarea
						readonly
						value={iframeCode}
						class="w-full rounded-md border border-gray-600 bg-gray-900 p-3 font-mono text-sm text-white"
						rows="6"
					></textarea>
					<button
						on:click={copyToClipboard}
						class="absolute top-2 right-2 rounded bg-blue-500 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-600"
					>
						Copy
					</button>
				</div>
			</div>

			<div>
				<label class="mb-2 block text-sm font-medium text-gray-300"> Direct Link </label>
				<div class="flex">
					<input
						readonly
						value={embedUrl}
						class="flex-1 rounded-l-md border border-gray-600 bg-gray-900 p-2 text-sm text-white"
					/>
					<button
						on:click={() => window.open(embedUrl, '_blank')}
						class="rounded-r-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-600"
					>
						Open
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 rounded-lg bg-gray-700 p-4">
		<h4 class="mb-2 font-semibold text-white">💡 Usage</h4>
		<ul class="space-y-1 text-sm text-gray-300">
			<li>• Copy the iframe code and paste it into your website</li>
			<li>• The widget will automatically update every second</li>
			<li>• Responsive design adapts automatically</li>
			<li>
				• URL parameters: <code class="rounded bg-gray-600 px-1">theme</code>,
				<code class="rounded bg-gray-600 px-1">compact</code>,
				<code class="rounded bg-gray-600 px-1">labels</code>,
				<code class="rounded bg-gray-600 px-1">bg</code>
			</li>
		</ul>
	</div>
</div>
