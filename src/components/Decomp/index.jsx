import React from 'react';
const getItems = () => [
  { title: 'Lorem', body: 'Ipsum dior sit amet' },
  { title: 'Lorem', body: 'Ipsum dior sit amet' }
];

const getComments = () => [{ author: 'Person', comment: `How good's that?` }];

const App = () => {
  const items = getItems();
  const comments = getComments();
  return (
    <main>
      <header>My Cool Page</header>
      <section>
        {items.map((item, index) => (
          <article key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
      <section>
        {comments.map((cmt, index) => (
          <article key={index}>
            <p>{cmt.comment}</p>
            <small>By {cmt.author}</small>
          </article>
        ))}
      </section>
    </main>
  );
};
