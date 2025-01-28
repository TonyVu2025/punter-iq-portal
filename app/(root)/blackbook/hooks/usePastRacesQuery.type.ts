interface RaceData {
  id: number;
  name: string;
  rail: string;
  class: string;
  status: string;
  weather: string;
  distance: number;
  duration: string;
  track_id: number;
  created_at: string;
  meeting_id: number;
  start_time: string;
  prize_money: string;
  race_number: number;
  tab_indicator: string;
  top_4_numbers: number[] | null;
  track_condition: string;
  competitor_count: number;
}

interface RaceHorseData {
  race_data: RaceData;
  race_id: bigint;
  competitor_weight: number;
  track_name: string;
  track_state: string;
  user_comment?: string;
  competitor_number: number;
  user_comment_id?: bigint;
}

export type UsePastRacesQueryResults = RaceHorseData[];
