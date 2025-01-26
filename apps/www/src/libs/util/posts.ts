import type { CollectionEntry } from "astro:content";

export function getPostsTopics(posts: CollectionEntry<"writings">[]) {
    return [
        ...posts
            .reduce(
                (set, post) => set.union(new Set(post.data.topics)),
                new Set<string>(),
            )
            .values(),
    ];

}