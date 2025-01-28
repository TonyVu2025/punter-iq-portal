import { HorseStats } from "../mobile/components/HorseStates";

export default function RunnerCompare() {
  const horses = [
    {
      horseName: "Shanghai Venture",
      jockey: "Joe Bowditch",
      barrier: 2,
      weight: 58,
      last5: 21524,
      trackStats: "5 (0,2,0)",
      distanceStats: "5 (1,2,1)",
      trackConditionStats: "5 (3,2,3)",
      speedMap: "Leader",
      lastStartDistance: "1500m",
      lastStartTime: "1:50",
      lastStart600m: "32.56",
      lastStartOdds: "$5.00",
      blockedForRun: "55",
      comeFromback: "22",
      wentBackFromBarrier: "12",
      win: 2.8,
      place: 6.5,
    },
    {
      horseName: "Shanghai Venture",
      jockey: "Joe Bowditch",
      barrier: 3,
      weight: 59,
      last5: 11111,
      trackStats: "5 (0,3,0)",
      distanceStats: "5 (0,3,0)",
      trackConditionStats: "5 (0,2,0)",
      speedMap: "Leader",
      lastStartDistance: "1500m",
      lastStartTime: "1:30",
      lastStart600m: "33.19",
      lastStartOdds: "$5.00",
      blockedForRun: "55",
      comeFromback: "22",
      wentBackFromBarrier: "12",
      win: 2.8,
      place: 6.5,
    },
    {
      horseName: "Shanghai Venture",
      jockey: "Joe Bowditch",
      barrier: 2,
      weight: 59,
      last5: 12121,
      trackStats: "5 (0,2,0)",
      distanceStats: "5 (1,2,1)",
      trackConditionStats: "5 (0,2,0)",
      speedMap: "Leader",
      lastStartDistance: "1500m",
      lastStartTime: "1:50",
      lastStart600m: "31.48",
      lastStartOdds: "$5.00",
      blockedForRun: "55",
      comeFromback: "22",
      wentBackFromBarrier: "12",
      win: 2.8,
      place: 6.5,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl">
        <HorseStats horses={horses} />
      </div>
    </div>
  );
}
