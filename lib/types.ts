import { z } from "zod";

export const formSchema = z.object({
  FirstName: z
    .string()
    .min(1, { message: "Please enter a valid first name." })
    .max(15),
  LastName: z
    .string()
    .min(1, { message: "Please enter a valid last name." })
    .max(13),
  Email: z
    .string()
    .min(1, { message: "Please enter a valid email address." })
    .max(25)
    .email(),
  PhoneNumber: z
    .string()
    .min(1, { message: "Please enter a valid phone number." })
    .max(14),
  PropertyAddress: z.string().max(120),
  Message: z.string().max(200),
  buyingProperty: z.boolean(),
  sellingProperty: z.boolean(),
});
