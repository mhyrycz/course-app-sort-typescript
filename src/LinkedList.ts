class Node {
	next: Node | null = null;

	constructor(public data: number) {}
}

export class LinkedList {
	head: Node | null = null;

	get length(): number {
		if (!this.head) {
			return 0;
		}
		// don't mistake length with position.
		let length = 1;
		let tail = this.head;
		while (tail.next !== null) {
			tail = tail.next;
			length++;
		}
		return length;
	}

	add(data: number): void {
		const node = new Node(data);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next !== null) {
			tail = tail.next;
		}

		tail.next = node;
	}

	at(position: number): Node {
		if (!this.head) {
			throw new Error('head is null');
		}

		let node: Node | null = this.head;
		let counter = 0;

		while (node !== null) {
			if (counter === position) {
				return node;
			}
			node = node.next;
			counter++;
		}

		throw new Error('too high position');
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error('head is null');
		}
		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);
		const leftNodeData = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftNodeData;
	}

	print(): number[] {
		let array: number[] | null = [];
		let tail = this.head;
		while (tail !== null) {
			array.push(tail.data);
			tail = tail.next;
		}

		return array;
	}
}
