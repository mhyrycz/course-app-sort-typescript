// import {NumbersCollection} from "./NumbersCollection"
// import {CharactersCollection} from "./CharactersCollection"
import { LinkedList } from './LinkedList'

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

// const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

// const sort = new Sort(numbers)

// sort.sort()

// console.log(numbers.data)


// const characters = new CharactersCollection('acdbfeX')

// const sort2 = new Sort(characters)

// sort2.sort()

// console.log(characters.data)


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


// const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

// // const sort = new Sort(numbers)

// numbers.sort()

// console.log(numbers.data)


// const characters = new CharactersCollection('acdbfe')
// characters.sort()

// console.log(characters.data)

const newList = new LinkedList()
newList.add(500)
newList.add(-10)
newList.add(-3)
newList.add(4)

const newSort = new Sort(newList)

newSort.sort()

console.log(newList.print())