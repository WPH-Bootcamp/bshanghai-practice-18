// switch case with exhaustive check

const AlertLevel = {
  Unknown: -1,
  Low: 1,
  Medium: 2,
  High: 3,
} as const;

type AlertLevelType = (typeof AlertLevel)[keyof typeof AlertLevel];

type IndicationColor = "red" | "yellow" | "blue" | "green";

const getIndicatorColor = (level: AlertLevelType): IndicationColor => {
  switch (level) {
    case AlertLevel.Unknown:
      return "red";
    case AlertLevel.Low:
      return "yellow";
    case AlertLevel.Medium:
      return "blue";
    case AlertLevel.High:
      return "green";
    default:
      // exhaustive check untuk memastikan semua level alert sudah ditangani
      const _exhaustiveCheck: never = level; // akan error ketika menambah baru di AlertLevel tanpa dihandle di case
      throw new Error(_exhaustiveCheck);
  }
};
