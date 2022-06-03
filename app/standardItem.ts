import { Item } from './item';
import { ItemName } from "./itemName";
import { ItemSellIn } from "./itemSellIn";
import { ItemQuality } from "./itemQuality";

export class StandardItem extends Item {
	private static DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;

	constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality);
	}

	update() : void {
		this.decreaseSellIn();
		this.decreaseQuality();

		if (this.hasToBeSoldInLessThan(StandardItem.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
			this.decreaseQuality();
		}
	}
}
