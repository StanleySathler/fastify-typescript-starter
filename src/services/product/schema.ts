import { Type } from "@sinclair/typebox";

export const productResourceSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    price: Type.Number(),
  },
  { $id: "productResourceSchema" }
);
