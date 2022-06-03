import { Item } from './item';
import { ItemName } from "./itemName";
import { ItemSellIn } from "./itemSellIn";
import { ItemQuality } from "./itemQuality";

export class AgedBrie extends Item {
	private static DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;

	constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality);
	}

	update(): void {
		this.decreaseSellIn();

		this.increaseQuality();

		if (this.hasToBeSoldInLessThan(AgedBrie.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}
	}
}
