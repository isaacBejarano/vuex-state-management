module.exports = {
	assetsDir: "assets",
	productionSourceMap: false,
	// FIXME: remove to deploy in Apache root
	publicPath: process.env.NODE_ENV === "production" ? "/vuex-counter/" : "/",
};
