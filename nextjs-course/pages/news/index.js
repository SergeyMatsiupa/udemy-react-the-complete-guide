// my-domain.com/news
import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
            {/* <a href="/news/arcticle1">Article 1</a> */}
            <Link href="/news/arcticle1">Article 1</Link>
        </li>
        <li>
            {/* <a href="/news/arcticle2">Article 2</a> */}
            <Link href="/news/arcticle2">Article 2</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
