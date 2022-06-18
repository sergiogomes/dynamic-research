import { IResearchSection } from "./IResearchSection";

export interface IResearch {
  id: string;
  status: boolean;
  name: string;
  version: string;
  introMessage: string;
  thanksMessage: string;
  captureLead: boolean;
  oneSectionPerPage: boolean;
  sections: IResearchSection[];
  createdAt: string;
  updatedAt: string;
}
