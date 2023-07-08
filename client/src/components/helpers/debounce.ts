export default function debounce<A extends any[], R>(
	fn: (...args: A) => R,
	delay: number
): (...args: A) => void {
	let timeoutId: ReturnType<typeof setTimeout>
	return function (this: any, ...args: A) {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn.apply(this, args), delay)
	}
}
