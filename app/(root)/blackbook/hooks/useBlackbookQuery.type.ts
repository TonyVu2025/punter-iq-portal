interface BlackbookData {
  race_data: {
    id: bigint;
    name: string;
    rail: string;
    class: string;
    status: string;
    weather: string;
    distance: number;
    duration: string;
    track_id: bigint;
    created_at: string;
    meeting_id: number;
    start_time: string;
    prize_money: string;
    race_number: number;
    tab_indicator: string;
    top_4_numbers: any; // Use a more specific type if you know the structure
    track_condition: string;
    competitor_count: number;
  }[];
  horse_data: {
    id: bigint;
    age: number;
    dam: string;
    sex: string;
    name: string;
    sire: string;
    wins: number | null;
    races: number;
    owners: string;
    thirds: number | null;
    seconds: number | null;
    created_at: string;
  }[];
  meeting_data: {
    date: string;
    id: bigint;
    rails: "True" | "False";
    tab_indicator: string;
    track_id: bigint;
  }[];
  track_data?: {
    id: bigint;
    name: string;
    state: string;
    surface: string;
    created_at: string;
  }[];
  trainer_data?: {
    id: bigint;
    full_name: string;
    created_at: string;
  }[];
  jockey_data?: {
    id: bigint;
    full_name: string;
    created_at: string;
  }[];
  competitor_data: {
    id: bigint;
    odds: any | null; // Use a more specific type if available
    silks: {
      silksURL: string | null;
    };
    margin: number;
    barrier: number;
    race_id: bigint;
    horse_id: bigint;
    jockey_id: bigint;
    created_at: string;
    trainer_id: number;
    weight_total: number;
    final_position: any | null; // Use a more specific type if available
    scratching_type: string;
    steward_comment: string | null;
    failed_to_finish: boolean;
    competitor_number: number;
    late_scratch_time: string | null;
    failed_to_finish_reason: string;
  }[];
}

export type GetRacesWithBlackBookResponse = BlackbookData[];
