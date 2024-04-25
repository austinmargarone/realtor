import { z } from "zod";

export const formSchema = z.object({
  FirstName: z
    .string()
    .min(1, { message: "Please enter a valid first name." })
    .max(50),
  LastName: z
    .string()
    .min(1, { message: "Please enter a valid last name." })
    .max(50),
  Email: z
    .string()
    .min(1, { message: "Please enter a valid email address." })
    .max(125)
    .email(),
  PhoneNumber: z
    .string()
    .min(1, { message: "Please enter a valid phone number." })
    .max(25),
  PropertyAddress: z.string().max(250),
  Message: z.string().max(1000),
  buyingProperty: z.boolean(),
  sellingProperty: z.boolean(),
  Subscribe: z.boolean(),
});
