export interface NetworkNode {
  id: number;
  name?: string;
}

export interface NetworkLink {
  source?: number;
  target?: number;
}

export interface NetworkChartData {
  nodes?: NetworkNode[];
  links?: NetworkLink[];
}

export interface ChartLayout {
  width: number;
  height: number;
}
