import { defineField, defineType } from "sanity";

export default defineType({
  name: "listPortfolio",
  title: "Portfolio",
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
      name: "year",
      title: "Year Built",
      type: "number",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "embed",
      title: "Embed Link",
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
