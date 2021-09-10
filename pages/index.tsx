import type { NextPage } from "next";
import { Comic } from "../components";

const TEMP_DATA = {
  pageNum: 2,
  alt: "",
  src: "",
  desc: "",
};

export const ComicPage: NextPage = () => {
  return (
    <div>
      <Comic comic={TEMP_DATA} />
    </div>
  );
};

export default ComicPage;
