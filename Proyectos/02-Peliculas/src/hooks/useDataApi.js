import { useEffect, useState } from 'react'

export default function useDataApi(apiEndpoint) {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchData(apiEndpoint);
                if (!response.ok) throw new Error("Error fetching data");
                const result = await response.json();
                setdata(result);
            } catch (error) {
                seterror(error);
            } finally {
                setloading(false);
            }
        };

        fetchData();
    }, [apiEndpoint]);
    
    return { data, loading, error };
}
