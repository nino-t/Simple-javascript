import { number } from './number'
it('Check perbedaan 2 nilai', () => {
	let a = 2
	let b = 1
  	expect(number.getDifference(a,b)).toBe((a-b).toFixed(2))
})