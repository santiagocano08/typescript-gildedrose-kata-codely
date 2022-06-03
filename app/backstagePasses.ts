import { Item } from './item';
import { ItemName } from "./itemName";
import { ItemSellIn } from "./itemSellIn";
import { ItemQuality } from "./itemQuality";

export class BackstagePasses extends Item {
	private static DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
	private static TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
	private static QUALITY_RESET_SELL_IN_THRESHOLD = 0;

	constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		super(name, sellIn, quality);
	}

	update() : void {
		this.decreaseSellIn();

		this.increaseQuality();

		if (this.hasToBeSoldInLessThan(BackstagePasses.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}

		if (this.hasToBeSoldInLessThan(BackstagePasses.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
			this.increaseQuality();
		}

		if (this.hasToBeSoldInLessThan(BackstagePasses.QUALITY_RESET_SELL_IN_THRESHOLD)) {
			this.resetQuality();
		}
	}
}
