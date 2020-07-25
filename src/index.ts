import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([ 1, 5, 2, -8 ]);

numbers.sort();

console.log(numbers.data);

const characters = new CharactersCollection('acdbfeX');

characters.sort();

console.log(characters.data);

const newList = new LinkedList();
newList.add(500);
newList.add(-10);
newList.add(-3);
newList.add(4);

newList.sort();

console.log(newList.print());
