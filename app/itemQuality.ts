export class ItemQuality {
	private static MAX_VALUE = 50;
	private static MIN_VALUE = 0;
	private value: number;

	constructor(value: number) {
		if (value < ItemQuality.MIN_VALUE || value > ItemQuality.MAX_VALUE) {
			throw new Error(`Tried to set an ItemQuality of ${value} which is outside the valid range.`);
		}

		this.value = value;
	}

	increase(): ItemQuality {
		if (this.value == ItemQuality.MAX_VALUE) {
			return this;
		}

		return new ItemQuality(this.value + 1);
	}

	decrease(): ItemQuality {
		if (this.value == ItemQuality.MIN_VALUE) {
			return this;
		}

		return new ItemQuality(this.value - 1);
	}

	reset(): ItemQuality {
		return new ItemQuality(ItemQuality.MIN_VALUE);
	}
}
