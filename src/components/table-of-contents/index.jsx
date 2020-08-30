import React from 'react';

import './index.scss';

export const TableOfContents = ({ html }) => {
  return (
    <aside className="aside-table-of-contents">
      <div
        className="post-table-of-contents"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </aside>
  );
};
