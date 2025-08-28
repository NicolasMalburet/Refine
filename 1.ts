export const dataProvider = (apiUrl: string): DataProvider => ({
    getOne: async ({ resource, id, meta }) => {
        const response = await fetch(`${apiUrl}/${resource}/${id});

        const data = await response.json();
        return data;
    },
});
