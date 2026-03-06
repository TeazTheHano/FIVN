import type { ArticleInput } from "./import"

const data: ArticleInput[] = [
  // {
  //   Name: 'Pre-Founder Bootcamp',
  //   ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/2830.jpg',
  //   Description: `<li>Chương trình huấn luyện tư duy khởi nghiệp nền tảng cho sinh viên.</li><li>Đồng vận hành cùng tổ chức giáo dục để thiết kế lộ trình, đào tạogiảng viên.</li><li>Đồng triển khai mô hình học tập trải nghiệm thực tế.</li>`
  // },
  // {
  //   Name: 'Startup Internship',
  //   ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/2570.jpg',
  //   Description: `<li>Chương trình thực tập khởi nghiệp chuyên sâu tại các startup đốitác.</li><li>Phối hợp tuyển chọn startup đối tác, theo dõi tiến trình học tập.</li><li>Tổ chức cố vấn định kỳ để đảm bảo trải nghiệm thực tiễn và sựtrưởng thành của người học.</li>`
  // },
  {
    Name: 'Campus Accelerator',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/1861.jpg',
    Description: `<li>Chương trình tăng tốc khởi nghiệp ngay trong trường đại học.</li><li>Đồng vận hành chương trình từ tuyển chọn, đào tạo, đến cố vấn.</li><li>Kết nối startup với nhà đầu tư và hệ sinh thái FI toàn cầu.</li>`
  },
  {
    Name: 'Innovation Accelerator Lab',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/120228.jpg',
    Description: `<li>Xây dựng và vận hành chương trình tăng tốc hợp tác vớistartup.</li><li>Chương trình dành cho các doanh nghiệp muốn thiết kế và triểnkhai chương trình tăng tốc khởi nghiệp (startup accelerator)hợp tác với các startup bên ngoài.</li><li>Mục tiêu là thúc đẩy đổi mới mở (open innovation) thông quaviệc lựa chọn, hỗ trợ và thử nghiệm giải pháp cùng các startupphù hợp với chiến lược doanh nghiệp.</li>`
  },
  {
    Name: 'Corporate Venture Building Lab',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/3065.jpg',
    Description: `<li>XâyStartup Internship dựng và vận hành chương trình phát triển startup nội bộ.</li><li>Chương trình hỗ trợ doanh nghiệp phát triển dự án khởi nghiệpnội bộ (internal ventures) như phòng R&amp;D, trung tâm đổimới sáng tạo hoặc đơn vị kinh doanh mới.</li><li>Doanh nghiệp sẽ được hướng dẫn cách phát hiện cơ hội, xây dựngđội nhóm liên chức năng, thử nghiệm nhanh mô hình và đưa sảnphẩm ra thị trường như một startup thực thụ.</li>`
  },
  {
    Name: 'Corporate Venture Capital (CVC) Lab',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/97637.jpg',
    Description: `<li>Xây dựng và vận hành quỹ đầu tư doanh nghiệp vào startup.</li><li>Chương trình hướng dẫn doanh nghiệp thành lập và vận hành quỹđầu tư mạo hiểm doanh nghiệp (Corporate Venture Capital) nhằmđầu tư chiến lược vào các startup bên ngoài.</li><li>Bao gồm tư vấn về cấu trúc pháp lý, quy trình đầu tư, vậnhành, chiến lược lựa chọn startup và kết nối với hệ sinh tháikhởi nghiệp toàn cầu.</li>`
  },
  {
    Name: 'Business Planning Boot Camp',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/335682.jpg',
    Description: `<li>Khóa huấn luyện lập kế hoạch kinh doanh chiến lược.</li><li>Trang bị cho founder tư duy chiến lược và công cụ lập kế hoạch kinh doanh chuyên nghiệp.</li><li>Từ mô hình tài chính, định giá, đến xác định mục tiêu tăng trưởng, tất cả được áp dụng ngay vào dự án thực tế.</li>`
  },
  {
    Name: 'Digital Leader Lab',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/91236.jpg',
    Description: `<li>Khóa chuyên sâu Lãnh đạo số.</li><li>Phát triển năng lực lãnh đạo số cho các nhà sáng lập trong thời đại công nghệ và AI.</li><li>Giúp founder hiểu và ứng dụng công nghệ vào vận hành, ra quyết định và quản trị đội ngũ hiệu quả.</li>`
  },
  {
    Name: 'Platform Scalability Lab',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/12970951.jpg',
    Description: `<li>Khóa chuyên sâu Chiến lược mở rộng cho mô hình nền tảng số.</li><li>Giúp founder xây dựng chiến lược mở rộng nền tảng số một cách hiệu quả, từ kiến trúc hệ thống đến mô hình tăng trưởng.</li><li>Tập trung vào khả năng mở rộng tự động, hiệu ứng mạng lưới và chuẩn bị cho giai đoạn scale-up.</li>`
  },
  {
    Name: 'Pitch Mastery Boot Camp',
    ImgLink: 'https://fivietnam.co/wp-content/uploads/2025/09/7161.jpg',
    Description: `<li>Khóa huấn luyện làm chủ bài thuyết trình gọi vốn.</li><li>Khóa huấn luyện chuyên sâu giúp bạn xây dựng và hoàn thiện bài thuyết trình gọi vốn (pitch deck) theo chuẩn quốc tế.</li><li>Chương trình tập trung vào storytelling, phản biện từ nhà đầu tư, và luyện tập trình bày trực tiếp.</li>`
  },

]
export default data 
