import { getCollection, type CollectionEntry } from "astro:content";

const getEpoch = (date?: Date) => {
    if (!date) {
        return Infinity;
    }

    return date.getTime();
};

export const getPosts = async ({
    includeDrafts = false,
}: {
    includeUnlisted: boolean;
    includeDrafts?: boolean;
}): Promise<CollectionEntry<"posts">[]> => {
    return (await getCollection("posts"))
    .filter((post) => {
        if (post.data.draft && !includeDrafts) return false;
        return true;
    })
    .sort((a, b) => getEpoch(b.data.date) - getEpoch(a.data.date));
};