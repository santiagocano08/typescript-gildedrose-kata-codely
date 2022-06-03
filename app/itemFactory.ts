import { Item } from './item';
import { ItemName } from "./itemName";
import { ItemSellIn } from "./itemSellIn";
import { ItemQuality } from "./itemQuality";
import { AgedBrie } from './agedBrie';
import { BackstagePasses } from './backstagePasses';
import { Sulfuras } from './sulfuras';
import { StandardItem } from './standardItem';

export class ItemFactory {
	static basedOn(rawName: string, rawSellIn: number, rawQuality: number): Item {
		const name: ItemName = new ItemName(rawName);
		const sellIn: ItemSellIn = new ItemSellIn(rawSellIn);
		const quality: ItemQuality = new ItemQuality(rawQuality);

		if (name.isAgedBrie()) return new AgedBrie(name, sellIn, quality);
		if (name.isBackstagePasses()) return new BackstagePasses(name, sellIn, quality);
		if (name.isSulfuras()) return new Sulfuras(name, sellIn, quality);

		return new StandardItem(name, sellIn, quality);
	}
}
