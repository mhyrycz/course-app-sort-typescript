interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void
}

class Sort {
	constructor(public collection: Sortable) {}

	sort(): void {
        const {length} = this.collection 
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j+1)) {
					this.collection.swap(j, j+1);
				}
			}
		}
	}
}

class NumbersCollection {
    constructor(public data: number[]) {}
    
    get length(): number {
        return this.data.length
    }

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}
}


class CharactersCollection {
	constructor(public data: string){}

	get length(): number {
        return this.data.length
    }

	compare(leftIndex: number, rightIndex: number):boolean {
		return this.data[leftIndex] > this.data[rightIndex]
	}

	swap(leftIndex: number, rightIndex: number): void{
		let characters = this.data.split('')
		const leftHand = characters[leftIndex]
		characters[leftIndex] = characters[rightIndex]
		characters[rightIndex] = leftHand
		this.data = characters.join('')
	}
}

const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

const sort = new Sort(numbers)

sort.sort()

console.log(numbers.data)


const characters = new CharactersCollection('acdbfe')

const sort2 = new Sort(characters)

sort2.sort()

console.log(characters.data)


// parent class approach - my check

// class Sort {
// 	constructor(public data: any) {}

// 	compare(leftIndex: number, rightIndex: number):boolean {
// 		return this.data[leftIndex] > this.data[rightIndex]
// 	}

// 	swap(leftIndex: number, rightIndex: number): void {
// 	}

// 	sort(): void {
//         const {length} = this.data
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				if (this.compare(j, j+1)) {
// 					this.swap(j, j+1);
// 				}
// 			}
// 		}
// 	}
// }

// class NumbersCollection extends Sort {
//     constructor(data: number[]) {
// 		super(data)
// 	}

// 	swap(leftIndex: number, rightIndex: number): void {
// 		const leftHand = this.data[leftIndex];
// 		this.data[leftIndex] = this.data[rightIndex];
// 		this.data[rightIndex] = leftHand;
// 	}
// }


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

// const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

// // const sort = new Sort(numbers)

// numbers.sort()

// console.log(numbers.data)


// const characters = new CharactersCollection('acdbfe')
// characters.sort()

// console.log(characters.data)

