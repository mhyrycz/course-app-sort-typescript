class Sort {
	constructor(public collection: NumbersCollection) {}

	sort(): number[] {
        const {length} = this.collection
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j+1)) {
					this.collection.swap(j, j+1);
				}
			}
		}
		return this.collection.data;
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

const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

const sort = new Sort(numbers)

console.log(sort.sort())


// console.log(sort2.sort());
