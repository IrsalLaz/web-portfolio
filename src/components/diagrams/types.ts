export type Side = "l" | "r" | "t" | "b";

export interface FlowNode {
  id: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  kind?: "default" | "accent" | "store" | "queue" | "external";
}

export interface FlowEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  both?: boolean;
  fromSide?: Side;
  toSide?: Side;
  /** Full list of points; overrides automatic routing. */
  points?: [number, number][];
  labelAt?: [number, number];
}

export interface FlowGroup {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

export interface FlowSpec {
  id: string;
  title: string;
  desc: string;
  caption?: string;
  width: number;
  height: number;
  minWidth?: number;
  nodes: FlowNode[];
  edges: FlowEdge[];
  groups?: FlowGroup[];
}

export interface Participant {
  id: string;
  label: string;
  sub?: string;
}

export type SeqStep =
  | { from: string; to: string; label: string; kind?: "call" | "async" | "reply" }
  | { note: string; over: string | [string, string] }
  | { divider: string };

export interface SequenceSpec {
  id: string;
  title: string;
  desc: string;
  caption?: string;
  participants: Participant[];
  steps: SeqStep[];
  colWidth?: number;
  minWidth?: number;
}
