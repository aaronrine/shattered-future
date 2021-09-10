import React from "react";

interface comic {
  comic: { pageNum: number; alt: string; src: string; desc: string };
}

function Comic({ comic: { pageNum, alt, src, desc } }: comic) {
  return (
    <div className="Comic">
      <div className="comicHeader">
        <h3 data-testid="pageNum">Page {pageNum}</h3>
      </div>
      <img alt={`${alt}-comic`} src={src} />
      <p data-testid="comicDesc">{desc}</p>
    </div>
  );
}

export { Comic };
export default Comic;
