<script>
	import { page } from '$app/stores';
	import WidgetGenerator from '$lib/components/WidgetGenerator.svelte';
	
	const baseUrl = $derived($page.url.origin);
	
	const examples = $derived([
		{
			title: 'Standard Widget',
			description: 'Default light theme with all features',
			url: `${baseUrl}/embed`,
			iframe: `<iframe src="${baseUrl}/embed" width="600" height="200" frameborder="0" scrolling="no"></iframe>`,
			params: {}
		},
		{
			title: 'Dark Theme',
			description: 'Dark theme with matching background',
			url: `${baseUrl}/embed?theme=dark&bg=%231f2937`,
			iframe: `<iframe src="${baseUrl}/embed?theme=dark&bg=%231f2937" width="600" height="200" frameborder="0" scrolling="no"></iframe>`,
			params: { theme: 'dark', bg: '#1f2937' }
		},
		{
			title: 'Compact Mode',
			description: 'Compact version without title',
			url: `${baseUrl}/embed?compact=true`,
			iframe: `<iframe src="${baseUrl}/embed?compact=true" width="600" height="120" frameborder="0" scrolling="no"></iframe>`,
			params: { compact: 'true' }
		},
		{
			title: 'Without Labels',
			description: 'Numbers only, no time unit labels',
			url: `${baseUrl}/embed?labels=false`,
			iframe: `<iframe src="${baseUrl}/embed?labels=false" width="600" height="160" frameborder="0" scrolling="no"></iframe>`,
			params: { labels: 'false' }
		}
	]);
</script>

<svelte:head>
	<title>Embed Documentation - Gehalt Countdown</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				📋 Embed Documentation
			</h1>
			<p class="text-xl text-gray-300">
				Integrieren Sie den Gehalt Countdown in Ihre Website
			</p>
		</div>
		
		<!-- Quick Start -->
		<div class="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
			<h2 class="text-2xl font-bold text-white mb-4">
				🚀 Quick Start
			</h2>
			<p class="text-gray-300 mb-4">
				Kopieren Sie diesen Code und fügen Sie ihn in Ihre Website ein:
			</p>
			<div class="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
				<code class="text-gray-100">&lt;iframe src="{baseUrl}/embed" width="600" height="200" frameborder="0" scrolling="no"&gt;&lt;/iframe&gt;</code>
			</div>
		</div>
		
		<!-- Widget Generator -->
		<WidgetGenerator />
		
		<!-- Parameters -->
		<div class="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
			<h2 class="text-2xl font-bold text-white mb-4">
				⚙️ Parameter
			</h2>
			<div class="overflow-x-auto">
				<table class="w-full text-left">
					<thead>
						<tr class="border-b border-gray-600">
							<th class="pb-3 text-gray-300 font-semibold">Parameter</th>
							<th class="pb-3 text-gray-300 font-semibold">Werte</th>
							<th class="pb-3 text-gray-300 font-semibold">Standard</th>
							<th class="pb-3 text-gray-300 font-semibold">Beschreibung</th>
						</tr>
					</thead>
					<tbody class="text-gray-400">
						<tr class="border-b border-gray-700">
							<td class="py-3 font-mono">theme</td>
							<td class="py-3">light, dark</td>
							<td class="py-3">light</td>
							<td class="py-3">Theme-Auswahl (bestimmt Text- und Box-Farben)</td>
						</tr>
						<tr class="border-b border-gray-700">
							<td class="py-3 font-mono">compact</td>
							<td class="py-3">true, false</td>
							<td class="py-3">false</td>
							<td class="py-3">Kompakt-Modus ohne Titel</td>
						</tr>
						<tr class="border-b border-gray-700">
							<td class="py-3 font-mono">labels</td>
							<td class="py-3">true, false</td>
							<td class="py-3">true</td>
							<td class="py-3">Zeiteinheit-Beschriftungen anzeigen</td>
						</tr>
						<tr>
							<td class="py-3 font-mono">bg</td>
							<td class="py-3">HEX-Farbe (URL-encoded)</td>
							<td class="py-3">#f8fafc (light) / #1f2937 (dark)</td>
							<td class="py-3">Hintergrundfarbe (Boxen verwenden 20% Transparenz)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- Examples -->
		<div class="space-y-8">
			<h2 class="text-2xl font-bold text-white text-center">
				📖 Beispiele
			</h2>
			
			{#each examples as example}
				<div class="bg-gray-800 rounded-lg shadow-lg p-6">
					<h3 class="text-xl font-semibold text-white mb-2">
						{example.title}
					</h3>
					<p class="text-gray-300 mb-4">
						{example.description}
					</p>
					
					<!-- Preview -->
					<div class="mb-4">
						<h4 class="text-sm font-medium text-gray-300 mb-2">Vorschau:</h4>
						<div class="border border-gray-600 rounded-lg p-4 bg-gray-900">
							<iframe 
								src={example.url}
								width="100%"
								height="200"
								frameborder="0"
								scrolling="no"
								style="max-width: 600px; margin: 0 auto; display: block;"
								title={example.title}
							></iframe>
						</div>
					</div>
					
					<!-- Code -->
					<div class="space-y-2">
						<h4 class="text-sm font-medium text-gray-300">HTML Code:</h4>
						<div class="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
							<code class="text-gray-100">{example.iframe}</code>
						</div>
						
						<h4 class="text-sm font-medium text-gray-300">URL:</h4>
						<div class="bg-gray-900 rounded-lg p-3 font-mono text-xs overflow-x-auto">
							<code class="text-gray-100">{example.url}</code>
						</div>
					</div>
				</div>
			{/each}
		</div>
		
		<!-- Additional Info -->
		<div class="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
			<h2 class="text-2xl font-bold text-white mb-4">
				💡 Zusätzliche Informationen
			</h2>
			<ul class="space-y-2 text-gray-300">
				<li>• Das Widget aktualisiert sich automatisch jede Sekunde</li>
				<li>• Responsive Design passt sich automatisch an verschiedene Bildschirmgrößen an</li>
				<li>• Keine externen Abhängigkeiten erforderlich</li>
				<li>• GDPR-konform - keine Cookies oder Tracking</li>
				<li>• Optimiert für Leistung und schnelle Ladezeiten</li>
			</ul>
		</div>
		
		<!-- Navigation -->
		<div class="text-center mt-8">
			<a 
				href="/"
				class="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
			>
				← Zurück zur Hauptseite
			</a>
		</div>
	</div>
</div>
