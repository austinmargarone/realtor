import { defineField, defineType } from "sanity";

export default defineType({
  name: "soldProperty",
  title: "Sold Property",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["SOLD"],
      },
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
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
