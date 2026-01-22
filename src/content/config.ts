import { defineCollection } from "astro:content"
import { pocketbaseLoader } from "astro-loader-pocketbase"

const cards = defineCollection({
	loader: pocketbaseLoader({
		url: import.meta.env.POCKETBASE_URL,
		collectionName: "cards",
		superuserCredentials: {
			impersonateToken: import.meta.env.POCKETBASE_TOKEN,
		},
	}),
})

export const collections = { cards }
