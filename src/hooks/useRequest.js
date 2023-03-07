import React, { useState, useEffect } from "react";
/**
 * @param function promise to call and handle
 */
export default (promiseFunction) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promiseFunction()
            .then((response) => {
                setData(response);
            })
            .catch(({ response }) => {
                try {
                    setError({
                        data: response.data,
                        code: response.status
                    });
                } catch {
                    setError("idk what happened")
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, error, loading };

}