import fs from 'fs';
import path from 'path';
import articles from '../content/articles.json';
import authors from '../content/authors.json';

const articlesDirectory = path.join(
  process.cwd(),
  'src',
  'content',
  'articles'
);

export const getAllArticlesIds = () =>
  articles
    .sort(
      (a, b) => Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt))
    )
    .map((article) => ({
      params: { id: article.fileName },
    }));

export const getArticleMetadata = (id: string) => {
  const metadata = articles.find((article) => article.fileName === id);
  const author = authors.find((author) => author.username === metadata.author);

  if (!metadata || !author) {
    return null;
  }

  return {
    ...metadata,
    id,
    author,
  };
};

export const getArticleData = (id: string) => {
  const content = fs.readFileSync(`${articlesDirectory}/${id}.md`);
  const metadata = getArticleMetadata(id);

  if (!metadata || !content) {
    return null;
  }

  return {
    content: content.toString(),
    ...metadata,
  };
};
