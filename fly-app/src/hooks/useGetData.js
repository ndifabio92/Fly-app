import { useLazyQuery } from "@apollo/client";

export const useGetData = (query) => {
    const [getData, result] = useLazyQuery(query);

    return [
        getData,
        result
    ]
}