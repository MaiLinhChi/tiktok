import * as request from '~/utils/httpRequest';

export const getSuggested = async (page = 1, perPage = 12) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
