export class NumbersCollection {
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


// parent class approach - my check

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