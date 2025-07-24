<script>
	import { onMount } from 'svelte';
	import { getTimeUntilNextPayment } from '$lib/utils/payment';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	
	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);
	
	const theme = $derived($page.url.searchParams.get('theme') || 'light');
	const compact = $derived($page.url.searchParams.get('compact') === 'true');
	const showLabels = $derived($page.url.searchParams.get('labels') !== 'false');
	const backgroundColor = $derived($page.url.searchParams.get('bg') || (theme === 'dark' ? '#1f2937' : '#f8fafc'));
	
    const boxBackgroundColor = $derived(() => {
        const color = backgroundColor;
        if (color.startsWith('#')) {
            const hex = color.slice(1);
            const r = Math.max(0, parseInt(hex.slice(0, 2), 16) - 15);
            const g = Math.max(0, parseInt(hex.slice(2, 4), 16) - 15);
            const b = Math.max(0, parseInt(hex.slice(4, 6), 16) - 15);
            return `rgb(${r}, ${g}, ${b})`;
        }
        return color;
    });

	const textColor = $derived(theme === 'dark' ? '#ffffff' : '#374151');
	const labelColor = $derived(theme === 'dark' ? '#d1d5db' : '#6b7280');
	
	$effect(() => {
		if (browser) {
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
	
	function updateCountdown() {
		const countdown = getTimeUntilNextPayment();
		days = countdown.days;
		hours = countdown.hours;
		minutes = countdown.minutes;
		seconds = countdown.seconds;
	}
	
	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Gehalt Countdown Widget</title>
	<meta name="robots" content="noindex, nofollow">
</svelte:head>

<div 
	class="min-h-screen p-4 transition-all duration-300"
	style="background-color: {backgroundColor};"
>
	<div class="max-w-4xl mx-auto">
		{#if !compact}
			<div class="text-center mb-6">
				<h2 class="text-2xl md:text-3xl font-bold mb-2" style="color: {textColor};">
					Gehalt Countdown
				</h2>
				<p class="text-sm" style="color: {labelColor};">
					Zeit bis zur nächsten Zahlung
				</p>
			</div>
		{/if}
		
		<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
			<div class="rounded-lg shadow-lg p-3 md:p-4 text-center transform hover:scale-105 transition-transform" style="background-color: {boxBackgroundColor()};">
				<div class="text-2xl md:text-3xl font-bold text-blue-600 mb-1" style="color: {textColor};">
					{days}
				</div>
				{#if showLabels}
					<div class="text-xs md:text-sm font-medium" style="color: {labelColor};">
						{days === 1 ? 'Day' : 'Days'}
					</div>
				{/if}
			</div>
			
			<div class="rounded-lg shadow-lg p-3 md:p-4 text-center transform hover:scale-105 transition-transform" style="background-color: {boxBackgroundColor()};">
				<div class="text-2xl md:text-3xl font-bold text-green-600 mb-1" style="color: {textColor};">
					{hours}
				</div>
				{#if showLabels}
					<div class="text-xs md:text-sm font-medium" style="color: {labelColor};">
						{hours === 1 ? 'Hour' : 'Hours'}
					</div>
				{/if}
			</div>
			
			<div class="rounded-lg shadow-lg p-3 md:p-4 text-center transform hover:scale-105 transition-transform" style="background-color: {boxBackgroundColor()};">
				<div class="text-2xl md:text-3xl font-bold text-yellow-600 mb-1" style="color: {textColor};">
					{minutes}
				</div>
				{#if showLabels}
					<div class="text-xs md:text-sm font-medium" style="color: {labelColor};">
						{minutes === 1 ? 'Minute' : 'Minutes'}
					</div>
				{/if}
			</div>
			
			<div class="rounded-lg shadow-lg p-3 md:p-4 text-center transform hover:scale-105 transition-transform" style="background-color: {boxBackgroundColor()};">
				<div class="text-2xl md:text-3xl font-bold text-red-600 mb-1" style="color: {textColor};">
					{seconds}
				</div>
				{#if showLabels}
					<div class="text-xs md:text-sm font-medium" style="color: {labelColor};">
						{seconds === 1 ? 'Second' : 'Seconds'}
					</div>
				{/if}
			</div>
		</div>
		
		{#if !compact}
			<div class="mt-4 text-center">
				<a 
					href="/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xs hover:underline transition-colors"
					style="color: {labelColor};"
				>
					Powered by Salary Countdown
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: system-ui, -apple-system, sans-serif;
	}
</style>
