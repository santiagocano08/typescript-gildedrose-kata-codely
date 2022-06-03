export class ItemName {
	private static AGED_BRIE = "Aged Brie";
	private static BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
	private static SULFURAS = "Sulfuras, Hand of Ragnaros";
	readonly value: string;

	constructor(value: string) {
		this.value = value;
	}

	isAgedBrie(): boolean {
		return ItemName.AGED_BRIE === this.value;
	}

	isBackstagePasses(): boolean {
		return ItemName.BACKSTAGE_PASSES === this.value;
	}

	isSulfuras(): boolean {
		return ItemName.SULFURAS === this.value;
	}
}
