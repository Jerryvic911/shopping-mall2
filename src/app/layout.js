"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Shopping-Mall",
// 	description: "Shop mall",
// };
if (typeof document !== 'undefined') {
	let element = document.querySelector('.class-name')
}


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<RecoilRoot>
				<body >{children}</body>
			</RecoilRoot>
		</html>
	);
}
