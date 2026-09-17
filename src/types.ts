export type Language = 'en' | 'my';

export interface Principle {
  id: string;
  number: string;
  title: string;
  desc: string;
  question: string;
}

export interface LadderStep {
  level: number;
  title: string;
  question: string;
  detail: string;
}

export interface PathStep {
  num: string;
  tag: string;
  title: string;
  desc: string;
}

export interface SocraticResponses {
  clarify: string[];
  evidence: string[];
  assumption: string[];
  counter: string[];
}

export type SocraticCategory = 'clarify' | 'evidence' | 'assumption' | 'counter';
