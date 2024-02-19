import { useEffect, useState } from "react";


export default function useDataApi(apiEndPoint) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchData(apiEndPoint);
                if (!response.ok) throw new Error("Error fetching data");
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiEndPoint]);

    return { data, loading, error };
}