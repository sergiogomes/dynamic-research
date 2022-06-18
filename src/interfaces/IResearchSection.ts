import { IResearchQuestion } from "./IResearchQuestion";

export interface IResearchSection {
  name: string;
  description: string;
  oneQuestionPerPage: boolean;
  questions: IResearchQuestion[]
}
