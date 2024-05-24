import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const checkoutAtom = atom({
	key: "CheckoutAtom",
	default: {
		fullName: "",
		phoneNumber: "",
		email: "",
		deliveryAddress: "",
		city: "",
	},
	persist: [""],
	effects_UNSTABLE: [persistAtom],
});
