import React, { useState, useEffect } from "react";
/**
 * @param function promise to call and handle
 */
export default (promiseFunctions) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(promiseFunctions)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { data, error, loading };

}