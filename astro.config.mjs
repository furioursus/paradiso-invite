import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://paradiso-invite.netlify.app/",
	integrations: [tailwind()],
});
