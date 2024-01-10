import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import propertyListing from "./schemas/propertyListing";
import soldProperty from "./schemas/soldProperty";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, propertyListing, soldProperty],
};
