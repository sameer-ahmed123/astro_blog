// import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});


const new_col = defineCollection({
	// loader: glob({base: "./src/content/new_col", pattern: "**/*.{md,mdx}"}),
	schema: z.object({
		name: z.string(),
		age: z.number(),
		height: z.string()
	})
})

export const collections = { blog ,new_col};
