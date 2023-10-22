import { useEffect, useState } from 'react'

const useAPI = (url) => {

    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResponseData();
    }, [url]);

    const getResponseData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            setResponseData(json);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return { responseData, isLoading, error };
}

export default useAPI