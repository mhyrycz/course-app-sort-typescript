export class CharactersCollection {
	constructor(public data: string){}

	get length(): number {
        return this.data.length
    }

	compare(leftIndex: number, rightIndex: number):boolean {
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
	}

	swap(leftIndex: number, rightIndex: number): void{
		let characters = this.data.split('')
		const leftHand = characters[leftIndex]
		characters[leftIndex] = characters[rightIndex]
		characters[rightIndex] = leftHand
		this.data = characters.join('')
	}
}

// parent class approach - my check

// class CharactersCollection extends Sort {
// 	constructor(data: string){
// 		super(data)
// 	}

// 	swap(leftIndex: number, rightIndex: number): void{
// 		let characters = this.data.split('')
// 		const leftHand = characters[leftIndex]
// 		characters[leftIndex] = characters[rightIndex]
// 		characters[rightIndex] = leftHand
// 		this.data = characters.join('')
// 	}
// }