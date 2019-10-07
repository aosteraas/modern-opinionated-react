import React from 'react';

interface Item {
  title: string;
  body: string;
}
const getItems = () => [
  { title: 'Lorem', body: 'Ipsum dior sit amet' },
  { title: 'Lorem', body: 'Ipsum dior sit amet' }
];

interface Comment {
  author: string;
  comment: string;
}
const getComments = () => [{ author: 'Person', comment: `How good's that?` }];

const App = () => {
  const items: Item[] = getItems();
  const comments: Comment[] = getComments();
  return (
    <main>
      <header>My Cool Page</header>
      <Items items={items} />
      <Comments comments={comments} />
    </main>
  );
};

interface ItemProps {
  items: Item[];
}

const Items: React.FC<ItemProps> = ({ items }) => {
  return (
    <section>
      {items.map((item, index) => (
        <article key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
      ))}
    </section>
  );
};

interface CommentProps {
  comments: Comment[];
}
const Comments: React.FC<CommentProps> = ({ comments }) => {
  return (
    <section>
      {comments.map((cmt, index) => (
        <article key={index}>
          <p>{cmt.comment}</p>
          <small>By {cmt.author}</small>
        </article>
      ))}
    </section>
  );
};
