import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityConfig } from "./config";

const builder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
