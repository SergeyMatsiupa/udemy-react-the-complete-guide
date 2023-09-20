import {useRouter} from "next/router";
// my-domain.com/news/[something-important]

function DetailDynamicPage() {
    const router = useRouter();
    const newsId = router.query.newsId;
        console.log('newsId', newsId);
    return (
        <h1>The DetailDynamic Page</h1>
    );
}

export default DetailDynamicPage;