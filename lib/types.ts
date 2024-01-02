import { z } from "zod";

export const formSchema = z.object({
  FirstName: z.string().min(1).max(15),
  LastName: z.string().min(1).max(13),
  Email: z.string().min(1).max(25).email(),
  PhoneNumber: z.string().min(1).max(14),
  PropertyAddress: z.string().max(120),
  Message: z.string().max(200),
  buyingProperty: z.boolean(),
  sellingProperty: z.boolean(),
});
