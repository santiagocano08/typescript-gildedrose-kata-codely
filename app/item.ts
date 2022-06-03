import { ItemName } from "./itemName";
import { ItemSellIn } from "./itemSellIn";
import { ItemQuality } from "./itemQuality";

export abstract class Item {
	readonly name: ItemName;
	private sellIn: ItemSellIn;
	private quality: ItemQuality;

	constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}

	abstract update(): void;

	decreaseSellIn(): void {
		this.sellIn = this.sellIn.decrease();
	}

	hasToBeSoldInLessThan(days: number): boolean {
		return this.sellIn.isLessThan(days);
	}

	increaseQuality(): void {
		this.quality = this.quality.increase();
	}

	decreaseQuality(): void {
		this.quality = this.quality.decrease();
	}

	resetQuality(): void {
		this.quality = this.quality.reset();
	}
}
