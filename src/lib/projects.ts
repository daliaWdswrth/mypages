import { getCollection, type CollectionEntry } from "astro:content";

const getEpoch = (date?: Date) => {
    if (!date) {
        return Infinity;
    }
    return date.getTime();
};

export const getProjects = async ({
    includeDrafts = false,
}: {
    includeDrafts?: boolean;
} = {}): Promise<CollectionEntry<"projects">[]> => {
    return (await getCollection("projects"))
    .filter((project) => {
        if (project.data.draft && !includeDrafts) return false;
        return true;
    })
    .sort((a, b) => getEpoch(b.data.date) - getEpoch(a.data.date));
};

export const getPortfolioItems = async ({
    includeDrafts = false,
}: {
    includeDrafts?: boolean;
} = {}): Promise<CollectionEntry<"portfolio">[]> => {
    return (await getCollection("portfolio"))
    .filter((item) => {
        if (item.data.draft && !includeDrafts) return false;
        return true;
    })
    .sort((a, b) => getEpoch(b.data.date) - getEpoch(a.data.date));
};