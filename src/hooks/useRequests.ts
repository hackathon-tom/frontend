import React, { useState, useEffect } from "react";
/**
 * @param function promise to call and handle
 */
export default <T>(promiseFunctions: Promise<T>[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * TODO: what if we remove the useEffect ?
   */

  useEffect(() => {
    Promise.all(promiseFunctions)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};
