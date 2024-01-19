import { defineField, defineType } from "sanity";

export default defineType({
  name: "listPortfolio",
  title: "List Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "imageSlideshow",
      title: "Image Slideshow",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "sale",
      title: "Sale Price",
      type: "string",
    }),
    defineField({
      name: "list",
      title: "List Price",
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Active", "SOLD", "PENDING"],
      },
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Route",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "garage",
      title: "Garage",
      type: "number",
    }),
    defineField({
      name: "tour",
      title: "Tour Link",
      type: "string",
    }),
    defineField({
      name: "embed",
      title: "Embed Link",
      type: "string",
    }),
    defineField({
      name: "MLS",
      title: "MLS",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "metadesc",
      title: "Meta Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "address",
      media: "image",
    },
  },
});
