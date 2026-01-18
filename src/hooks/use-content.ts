import { useEffect, useState } from "react";

export const useContent = <T,>(path: string, fallback: T) => {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const json = (await response.json()) as Partial<T>;
        if (!isMounted || !json) {
          return;
        }
        setData((prev) => ({
          ...prev,
          ...json,
        }));
      } catch {
        // Keep fallback content when CMS data is unavailable.
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [path]);

  return data;
};
