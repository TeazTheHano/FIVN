import { ArticleInput } from "./domain/buildArticle";

// Dữ liệu mẫu (mock data) cho Article
const dataArticle: ArticleInput[] = [
    {
        Name: "Mẫu Bài Viết 1",
        SubDescription: "Mô tả ngắn của bài viết 1",
        Description: "<p>Nội dung chi tiết bài viết 1</p>",
        MetaName: "Mẫu Bài Viết 1",
    },
    {
        Name: "Mẫu Bài Viết 2",
        SubDescription: "Mô tả ngắn của bài viết 2",
        Description: "<p>Nội dung chi tiết bài viết 2</p>",
        MetaName: "Mẫu Bài Viết 2",
    }
];

export default dataArticle;
