import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from '../../selectors/articlePageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

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
            const {
                getState, dispatch,
            } = thunkApi;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const limit = getArticlesPageLimit(getState());
            const isLoading = getArticlesPageIsLoading(getState());
            // const dispatch = useAppDispatch();

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
