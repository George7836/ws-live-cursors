import { PerfectCursor } from "perfect-cursors";
import React from "react";

export function useCursor(cb: (point: number[]) => void, point?: number[]) {
  const [pc] = React.useState(() => new PerfectCursor(cb));

  React.useLayoutEffect(() => {
    if (point) pc.addPoint(point);
    return () => pc.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pc]);

  const onPointChange = React.useCallback(
    (point: number[]) => pc.addPoint(point),
    [pc]
  );

  return onPointChange;
}
