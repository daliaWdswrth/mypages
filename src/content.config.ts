import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    posts: defineCollection({
        loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
        schema: z
        .object({
            title: z.string(),
            date: z.date().optional(),
            draft: z.boolean().default(false),
            tags: z.array(z.string()).optional(),
            excerpt: z.string().optional(),
        })
        .refine((data) => data.date || data.draft, {
            message: "Must have either a date or draft: true",
        }),
    }),

    projects: defineCollection({
        loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
        schema: z
            .object({
                title: z.string(),
                date: z.date().optional(),
                draft: z.boolean().default(false),
                technologies: z.array(z.string()).optional(),
                github: z.string().optional(),
                live: z.string().optional(),
            })
            .refine((data) => data.date || data.draft, {
                message: "Must have either a date or draft: true",
            }),
    }),

    portfolio: defineCollection({
        loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
        schema: z.object({
            title: z.string(),
            date: z.date().optional(),
            draft: z.boolean().default(false),
            featured_image: z.string(),
            category: z.string().optional(),
            tools: z.array(z.string()).optional(),
            book_pages: z.array(
                    z.union([
                        z.string(),
                        z.object({
                        src: z.string(),
                        span: z.enum(["single", "double"]).default("single")
                        })
                    ])
                ).optional(),
            type: z.enum(["regular", "book"]).default("regular"),
        })
    }),

    pages: defineCollection({
        loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
        schema: z.object({
            title: z.string().optional(),
        }),
    }),
};