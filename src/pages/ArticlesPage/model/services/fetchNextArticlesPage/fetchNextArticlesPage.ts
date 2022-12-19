import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageHasMore,
    getArticlesPageLimit,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors';

// interface FetchArticlesListProps {
//     page?: number;
// }

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const limit = getArticlesPageLimit(getState());
        },
    );
