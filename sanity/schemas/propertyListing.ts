import { defineField, defineType } from "sanity";

export default defineType({
  name: "propertyListing",
  title: "Property Listing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "list",
      title: "List Price",
      type: "string",
    }),
    defineField({
      name: "sale",
      title: "Sale Price",
      type: "string",
    }),
    defineField({
      name: "beds",
      title: "Bedrooms",
      type: "number",
    }),
    defineField({
      name: "baths",
      title: "Bathrooms",
      type: "number",
    }),
    defineField({
      name: "sqft",
      title: "Square Feet",
      type: "string",
    }),
    defineField({
      name: "lot",
      title: "Lot Size",
      type: "number",
    }),
    defineField({
      name: "year",
      title: "Year Built",
      type: "number",
    }),
    defineField({
      name: "garage",
      title: "Garage Spaces",
      type: "number",
    }),
    defineField({
      name: "tour",
      title: "Virtual Tour",
      type: "url",
    }),
    defineField({
      name: "embed",
      title: "Embed Code",
      type: "url",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["FOR SALE", "SOLD", "PENDING", "OFF MARKET"],
      },
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "MLS",
      title: "MLS Number",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
