export interface Top4Competitor {
  name: string;
  prices: {
    top_tote: number;
    sp: number;
  };
  margin: number;
  tabNo: number;
  jockey?: { full_name: string; weight: number };
  trainer?: { full_name: string; id: number };
}

export interface RaceResults {
  positions: {
    tabNo: number;
    position: number;
    competitor: Top4Competitor;
  }[];
}

export interface NextToGoRow {
  distance: number;
  id: number;
  status: string;
  name: string;
  race_number: number;
  start_time: Date;
  region: string;
  competitors: Top4Competitor[];
}

export interface RacingTableData {
  rows: {
    track: {
      name: string;
      state: string;
      region: string;
    };
    races: {
      id: number;
      status: string;
      name: string;
      start_time: Date;
      race_number: number;
      results: RaceResults | null;
    }[];
  }[];
}
