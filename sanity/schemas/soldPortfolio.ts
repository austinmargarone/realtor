import { defineField, defineType } from "sanity";

export default defineType({
  name: "soldPortfolio",
  title: "SoldPortfolio",
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
      name: "mainImage",
      title: "Main image",
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
      name: "link",
      title: "Realtor.com Link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "address",
      media: "image",
    },
  },
});
