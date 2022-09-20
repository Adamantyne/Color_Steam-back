import { Request, Response } from "express";
import { IndicationInput } from "../schemas/indication-schema.js";
import indicationService from "../services/indication-service.js";

export async function getAllIndications(req: Request, res: Response) {
  const indications = await indicationService.gettingIndication();
  res.status(200).send(indications);
}

export async function postIndication(req: Request, res: Response) {
  const indication: IndicationInput = req.body;
  await indicationService.postingIndication(indication);
  return res.sendStatus(201);
}
