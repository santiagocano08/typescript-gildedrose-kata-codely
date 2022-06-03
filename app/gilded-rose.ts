import { Item } from './item';

export class GildedRose {
	updateQuality(items : Array<Item>) : void{
		items.forEach(item => item.update());
	}
}
