import {defineConfig} from "vite";

/* if development mode test/... if production mode main url */
export default defineConfig(({command,mode, ssrBuild}) =>{
	if (mode === "production")
		return {base: "/interactive-card-details-form"}
	else if (mode === "development")
		return {base: "/test/interactive-card-details-form"};

});