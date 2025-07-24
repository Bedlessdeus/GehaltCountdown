export function getNextPaymentDate(): Date {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth();

	let nextPayment = new Date(currentYear, currentMonth + 1, 0, 13, 0, 0);

	if (now >= nextPayment) {
		nextPayment = new Date(currentYear, currentMonth + 2, 0, 13, 0, 0);
	}

	return nextPayment;
}

export function getTimeUntilNextPayment() {
	const now = new Date();
	const nextPayment = getNextPaymentDate();
	const difference = nextPayment.getTime() - now.getTime();

	if (difference > 0) {
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	} else {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
}
