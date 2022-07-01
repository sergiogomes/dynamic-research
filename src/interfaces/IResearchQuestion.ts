import { ResponseTypeEnum } from "../enums/ResponseTypeEnum";
import { IResearchResponseOption } from "./IResearchResponseOption";

export interface IResearchQuestion {
  question: string;
  explanation: string;
  responseType: ResponseTypeEnum;
  responseLabel: string;
  responsePlaceholder: string;
  enableDontKnowOption: boolean;
  dontKnowLabel: string;
  enableJustification: boolean;
  justificationLabel: string;
  justificationPlaceholder: string;
  required: boolean;
  requiredLabel: string;
  enableOtherOption: boolean;
  otherLabel: string;
  otherPlaceholder: string;
  minLength: number;
  maxLength: number;
  mask: string;
  responseOptions: IResearchResponseOption[];
}
