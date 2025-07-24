<script>
	import { onMount } from 'svelte';
	import { getNextPaymentDate, getTimeUntilNextPayment } from '$lib/utils/payment';

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

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

<div
	class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-300"
>
	<div class="mx-auto max-w-4xl text-center">
		<h1 class="mb-8 text-4xl font-bold text-white md:text-6xl">Gehalt Überweisung</h1>

		<p class="mb-12 text-xl text-gray-300">
			Zeit bis zur nächsten Zahlung am <span class="font-semibold"
				>{getNextPaymentDate().toLocaleDateString('de-DE', {
					day: '2-digit',
					month: 'long',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})}</span
			>
		</p>

		<div class="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
			<div
				class="transform rounded-lg bg-gray-700 p-6 shadow-lg shadow-gray-900/50 transition-transform hover:scale-105"
			>
				<div class="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
					{days}
				</div>
				<div class="font-medium text-gray-300">
					{days === 1 ? 'Tag' : 'Tage'}
				</div>
			</div>

			<div
				class="transform rounded-lg bg-gray-700 p-6 shadow-lg shadow-gray-900/50 transition-transform hover:scale-105"
			>
				<div class="mb-2 text-3xl font-bold text-green-400 md:text-4xl">
					{hours}
				</div>
				<div class="font-medium text-gray-300">
					{hours === 1 ? 'Stunde' : 'Stunden'}
				</div>
			</div>

			<div
				class="transform rounded-lg bg-gray-700 p-6 shadow-lg shadow-gray-900/50 transition-transform hover:scale-105"
			>
				<div class="mb-2 text-3xl font-bold text-yellow-400 md:text-4xl">
					{minutes}
				</div>
				<div class="font-medium text-gray-300">
					{minutes === 1 ? 'Minute' : 'Minuten'}
				</div>
			</div>

			<div
				class="transform rounded-lg bg-gray-700 p-6 shadow-lg shadow-gray-900/50 transition-transform hover:scale-105"
			>
				<div class="mb-2 text-3xl font-bold text-red-400 md:text-4xl">
					{seconds}
				</div>
				<div class="font-medium text-gray-300">
					{seconds === 1 ? 'Sekunde' : 'Sekunden'}
				</div>
			</div>
		</div>

		<div class="mt-8 space-y-2">
			<p class="text-sm text-gray-400">Links:</p>
			<div class="flex flex-wrap justify-center gap-4 text-sm">
				<a
					href="/api/countdown"
					class="rounded-full bg-blue-900 px-3 py-1 text-blue-200 transition-colors hover:bg-blue-800"
				>
					/api/countdown
				</a>
				<a
					href="/api/next-payment"
					class="rounded-full bg-green-900 px-3 py-1 text-green-200 transition-colors hover:bg-green-800"
				>
					/api/next-payment
				</a>
				<a
					href="/embed"
					class="rounded-full bg-purple-900 px-3 py-1 text-purple-200 transition-colors hover:bg-purple-800"
				>
					/embed
				</a>
				<a
					href="/docs"
					class="rounded-full bg-orange-900 px-3 py-1 text-orange-200 transition-colors hover:bg-orange-800"
				>
					📋 Dokumentation
				</a>
			</div>
		</div>
	</div>
</div>
