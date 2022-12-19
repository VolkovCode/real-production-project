import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({
            page: page + 1,
        }));
    }, [dispatch, page, hasMore, isLoading]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
