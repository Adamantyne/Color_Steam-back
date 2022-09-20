import Joi from "joi";
import { Indication } from "@prisma/client";

export type IndicationInput = Omit<Indication, "id">;

export const indicationSchema = Joi.object<IndicationInput>({
  indication: Joi.string().max(50).required(),
});
