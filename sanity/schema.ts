import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import propertyListing from "./schemas/propertyListing";
import sold from "./schemas/sold";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, propertyListing, sold],
};
