import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
	test: /\.css$/,
	use: [
		{ loader: "style-loader" },
		{ loader: "css-loader" },
		{ loader: "postcss-loader" },
	],
});

rules.push({
	test: /\.(svg|png|jpg|jpeg|gif)$/i,
	type: "asset/resource",
	generator: {
		filename: "assets/[name][ext]",
	},
});

export const rendererConfig: Configuration = {
	module: {
		rules,
	},
	plugins,
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
	},
};
