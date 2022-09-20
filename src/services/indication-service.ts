import { IndicationInput } from "../schemas/indication-schema.js";
import indicationRepository from "../repositories/indication-repository.js";

async function postingIndication(indication: IndicationInput) {
  return indicationRepository.create(indication);
}

async function gettingIndication() {
  return indicationRepository.findAll();
}

const indicationService = { postingIndication, gettingIndication };
export default indicationService;
