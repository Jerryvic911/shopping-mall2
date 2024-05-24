import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const cartAtom = atom({
	key: "CartAtom",
	default: [],
	persist: [""],
	effects_UNSTABLE: [persistAtom],
});

export const totalAmountSelector = selector({
	key: "totalAmount",
	get: ({ get }) => {
		const carts = get(cartAtom);
		if (carts.length > 0) {
			const totalAmount = carts.reduce(
				(acc, curr) => acc + parseInt(curr.price) * curr.qty,
				0
			);

			return totalAmount;
		}

		return 0;
	},
});
