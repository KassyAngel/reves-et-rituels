import { useState, useEffect } from "react";

const KEY = "rr_first_launch_done";

export function useFirstLaunch() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    const done = localStorage.getItem(KEY);
    if (!done) {
      setIsFirstLaunch(true);
    }
  }, []);

  const markDone = () => {
    localStorage.setItem(KEY, "true");
    setIsFirstLaunch(false);
  };

  return { isFirstLaunch, markDone };
}