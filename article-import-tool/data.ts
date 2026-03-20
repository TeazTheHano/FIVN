import { ArticleInput } from "./domain/buildArticle"
import { UserInput } from "./domain/buildUser";


let data: UserInput[] = [
  {
    Name: "Jupviec",
    Description: "Homecare cơ bản <br/>- Gói dọn dẹp chuyên nghiệp<br/>- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa<br/>* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp",
    Email: "info@linkcare.vn",
    Mobile: "1900 6082",
    IdentifyAddress: "Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Jupviec",
    Description: "Homecare cơ bản <br/>- Gói dọn dẹp chuyên nghiệp<br/>- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa<br/>* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp",
    Email: "info@linkcare.vn",
    Mobile: "1900 6082",
    IdentifyAddress: "Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội",
    SubDescription: "Hải Phòng",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Jupviec",
    Description: "Homecare cơ bản <br/>- Gói dọn dẹp chuyên nghiệp<br/>- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa<br/>* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp",
    Email: "info@linkcare.vn",
    Mobile: "1900 6082",
    IdentifyAddress: "Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tudo",
    Description: "Dịch vụ Sắp xếp đồ đạc, nội thất gia đình, tủ quần áo*",
    Email: "info@tudo.com.vn",
    Mobile: "028 3930 3279",
    IdentifyAddress: "Tầng 11, 246 Cống Quỳnh, Q.1, TP.HCM",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tudo",
    Description: "Dịch vụ Sắp xếp đồ đạc, nội thất gia đình, tủ quần áo*",
    Email: "info@tudo.com.vn",
    Mobile: "028 3930 3279",
    IdentifyAddress: "Tầng 11, 246 Cống Quỳnh, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Royal decor",
    Description: "Gói Trang trí bao gồm Lễ Tết cơ bản",
    Email: "royaldecorhnmall@gmail.com",
    Mobile: "091 183 85 85",
    IdentifyAddress: "6 Nguyễn Thị Thập, Trung Hoà, Cầu Giấy, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Royal decor",
    Description: "Gói Trang trí bao gồm Lễ Tết cơ bản",
    Email: "royaldecorhnmall@gmail.com",
    Mobile: "091 183 85 85",
    IdentifyAddress: "6 Nguyễn Thị Thập, Trung Hoà, Cầu Giấy, Hà Nội",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vệ sinh thiết bị: Jupviec",
    Description: "Bảo dưỡng bảo trì máy móc",
    Email: "info@linkcare.vn",
    Mobile: "1900 6082",
    IdentifyAddress: "Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vệ sinh thiết bị: Jupviec",
    Description: "Bảo dưỡng bảo trì máy móc",
    Email: "info@linkcare.vn",
    Mobile: "1900 6082",
    IdentifyAddress: "Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dalat Hasfarm",
    Description: "Cắm hoa",
    Email: "connect@dalathasfarm.com",
    Mobile: "0263 3824947",
    IdentifyAddress: "450 Nguyên Tử Lực, P. Lâm Viên, Đà Lạt",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dalat Hasfarm",
    Description: "Cắm hoa",
    Email: "connect@dalathasfarm.com",
    Mobile: "0263 3824947",
    IdentifyAddress: "450 Nguyên Tử Lực, P. Lâm Viên, Đà Lạt",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Dịch vụ Family Concierge service",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Toàn quốc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Dịch vụ Concierge service hỗ trợ Tenant",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Toàn quốc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Dịch vụ Concierge service",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Toàn quốc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Đặc quyền Fast track, Phòng chờ QT & SH elite",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Đặc quyền Fast track, Phòng chờ QT & SH elite",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Đặc quyền Fast track, Phòng chờ QT & SH elite",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Phú Quốc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Đặc quyền Fast track, Phòng chờ QT & SH elite",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Đà Nẵng",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "AIPCON",
    Description: "Lounge TCB",
    Email: "info@linkcare.vn",
    Mobile: "",
    IdentifyAddress: "(chưa rõ)",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "AIPCON",
    Description: "Lounge TCB",
    Email: "info@linkcare.vn",
    Mobile: "",
    IdentifyAddress: "(chưa rõ)",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "LinkCare",
    Description: "Kế hoạch dinh dưỡng & chăm sóc sức khoẻ chủ động 365 ngày dành cho khách hàng sau kiểm tra sức khoẻ",
    Email: "info@linkcare.vn",
    Mobile: "024 3944 0216",
    IdentifyAddress: "Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội",
    SubDescription: "Toàn quốc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Mellow Six",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info@linkcare.vn",
    Mobile: "052 300 6868",
    IdentifyAddress: "6 Quang Trung, P. Cửa Nam, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hudson Room @ Capella",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info.hanoi@capellahotels.com",
    Mobile: "024 3987 8888",
    IdentifyAddress: "11 Lê Phụng Hiểu, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Diva Lounge @ Capella",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info.hanoi@capellahotels.com",
    Mobile: "024 3987 8888",
    IdentifyAddress: "11 Lê Phụng Hiểu, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hive Lounge @ InterContinental Landmark 72",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "res.hanoilandmark72@ihg.com",
    Mobile: "024 3698 8888",
    IdentifyAddress: "Tầng 62, Keangnam Landmark Tower, Nam Từ Liêm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Angelina @ Sofitel Metropole",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "metropolehanoi.info@sofitel.com",
    Mobile: "0 24 3826 6919",
    IdentifyAddress: "15 Ngô Quyền, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "YY @ Fairmont",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info@linkcare.vn",
    Mobile: "",
    IdentifyAddress: "10 Trần Nguyên Hãn, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Social Club Rooftop @ Hotel des Arts",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info@linkcare.vn",
    Mobile: "028 3982 8888",
    IdentifyAddress: "76-78 Nguyễn Thị Minh Khai, Q.3, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Boudoir Lounge @ Sofitel Plaza",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info@linkcare.vn",
    Mobile: "028 3824 1555",
    IdentifyAddress: "17 Lê Duẩn, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Ministry Concept Bar @ Sofitel Plaza",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "info@barbaard.com",
    Mobile: "1800 7040",
    IdentifyAddress: "17 Lê Duẩn, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Coco Dining & Whiskey Bar",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "inquiry@cocosgn.com",
    Mobile: "096 973 0660",
    IdentifyAddress: "143 Nam Kỳ Khởi Nghĩa, Q.3, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Lam Son 2 Bar @ Park Hyatt",
    Description: "Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ",
    Email: "2lamson.saiph@hyatt.com",
    Mobile: "028 3824 1234",
    IdentifyAddress: "2 Công Trường Lam Sơn, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Mellow Six",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "052 300 6868",
    IdentifyAddress: "6 Quang Trung, P. Cửa Nam, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Ichi Sushi <br/>(2 pax , no drink)",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "sushiichi.ketoan@gmail.com",
    Mobile: "0869 865 555",
    IdentifyAddress: "98 Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Bacco@Fairmont",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "",
    IdentifyAddress: "10 Trần Nguyên Hãn, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vien Dining",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "0 388 451 919",
    IdentifyAddress: "Ngõ Bà Triệu, Hai Bà Trưng, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tanh Tách",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "",
    IdentifyAddress: "(chưa rõ)",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hemisphere @ Sheraton Hanoi",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "0 24 3719 9000",
    IdentifyAddress: "K5 Nghi Tàm, 11 Xuân Diệu, Tây Hồ, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Le Club @ Sofitel Metropole",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "metropolehanoi.info@sofitel.com",
    Mobile: "0 24 3826 6919",
    IdentifyAddress: "15 Ngô Quyền, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Stellar Steakhouse @ InterContinental LM72",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "res.hanoilandmark72@ihg.com",
    Mobile: "024 3698 8888",
    IdentifyAddress: "Tầng 62, Keangnam Landmark Tower, Nam Từ Liêm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Coco Dining <br/>(1-star Michelin)",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "0 96 973 06 60",
    IdentifyAddress: "143 Nam Kỳ Khởi Nghĩa, Phường 6, Quận 3, TP. Hồ Chí Minh, Việt Nam",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "The Albion by Kirk Westaway<br/>(Michelin Selected 2025, Best restaurant of the Year @ Tatler 2025)",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "0 90 284 9988",
    IdentifyAddress: "76-78 Nguyễn Thị Minh Khai, Q.3, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Libai @ Sheraton Saigon Grand Opera Hotel<br/>(Best Innovation Restaurant of The Year 2024 tại LUXUO Asia Awards 2024 )",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@linkcare.vn",
    Mobile: "1900 636 091",
    IdentifyAddress: "88 Đồng Khởi, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "SENS Wine & Dine",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "info@sens.com.vn",
    Mobile: "028 3827 2372",
    IdentifyAddress: "Tầng 52, Bitexco Tower, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "5 Sensese @ Nikko Hotel",
    Description: "Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*",
    Email: "hello@5senses.com.vn",
    Mobile: "028 6688 7888",
    IdentifyAddress: "235 Nguyễn Văn Cừ, Q.1, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hà Thành Mansion",
    Description: "Dịch vụ Catering tại gia",
    Email: "thanh.luong@fbee.vn",
    Mobile: "094 639 8558",
    IdentifyAddress: "14 Ngô Văn Sở, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Haris Brunch & Grill",
    Description: "Dịch vụ Catering tại gia",
    Email: "info@linkcare.vn",
    Mobile: "0829 995 969",
    IdentifyAddress: "88 Hàng Trống, Hoàn Kiếm, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "The Ox Not Only Ox",
    Description: "Dịch vụ Catering tại gia",
    Email: "booking.theox@gmail.com",
    Mobile: "0913 515 351",
    IdentifyAddress: "24/24 Đông Du, Q.1, TP.HCM",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Công ty TNHH Ngọc Sương Marina Hà Nội",
    Description: "Dịch vụ Catering tại gia",
    Email: "nsleisure@ngocsuong.com.vn",
    Mobile: "0438866478",
    IdentifyAddress: "Số 50, phố Châu Long,Phường Ba Đình, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Raffles Medical (Hà Nội)",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "hanoi@rafflesmedical.com",
    Mobile: "024 3719 2222",
    IdentifyAddress: "51 Xuân Diệu, Quảng An, Tây Hồ, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Raffles Medical (TP.HCM)",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "frontdesk_hcmc@rafflesmedical.com",
    Mobile: "028 3824 0777",
    IdentifyAddress: "285B Điện Biên Phủ, Q.3, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Bệnh viện Pháp Việt (FV)",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "information@fvhospital.com",
    Mobile: "028 3511 3333",
    IdentifyAddress: "6 Nguyễn Lương Bằng, Phú Mỹ Hưng, Q.7, TP.HCM",
    SubDescription: "TP.HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Bệnh viện Hồng Ngọc (Hà Nội)",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@hongngochospital.vn",
    Mobile: "024 3927 5568",
    IdentifyAddress: "55 Yên Ninh, Trúc Bạch, Ba Đình, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Times City – Hà Nội",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "024 3974 3556",
    IdentifyAddress: "458 Minh Khai, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội",
    SubDescription: "Hà Nội",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Hải Phòng",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "0225 7309 888",
    IdentifyAddress: "Tổ 31, P. An Biên, TP. Hải Phòng",
    SubDescription: "Hải Phòng",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Đà Nẵng",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "0236 3711 111",
    IdentifyAddress: "Đường 30 Tháng 4, P. Hòa Cường, TP. Đà Nẵng",
    SubDescription: "Đà Nẵng",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Nha Trang",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "0258 3900 168",
    IdentifyAddress: "Đường Trần Phú, Tổ dân phố 1 Tây Sơn, TP. Nha Trang, Khánh Hòa",
    SubDescription: "Khánh Hòa",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Phú Quốc",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "02973985 588",
    IdentifyAddress: "Khu Bãi Dài, X. Gành Dầu, Phú Quốc, Kiên Giang",
    SubDescription: "Kiên Giang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinmec Central Park – TP.HCM",
    Description: "Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp",
    Email: "info@vinmec.com",
    Mobile: "028 3622 1166",
    IdentifyAddress: "208 Nguyễn Hữu Cảnh, P. 22, Q. Bình Thạnh, TP.HCM",
    SubDescription: "Tp HCM",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG King' Island - Lake Side",
    Description: "golf",
    Email: "booking@kingsislandgolf.vn",
    Mobile: "02433686555",
    IdentifyAddress: "Dong Mo Son Tay Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG King' Island - Mountain View",
    Description: "golf",
    Email: "booking@kingsislandgolf.vn",
    Mobile: "02433686555",
    IdentifyAddress: "Dong Mo Son Tay Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG King' Island - King Course",
    Description: "golf",
    Email: "booking@kingsislandgolf.vn",
    Mobile: "02433686555",
    IdentifyAddress: "Dong Mo Son Tay Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG Legend Hill Golf Resort",
    Description: "golf",
    Email: "info@brglegendhillgolf.vn",
    Mobile: "02439393690",
    IdentifyAddress: "Phu Linh Soc Son Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG Legend Valley Country Club",
    Description: "golf",
    Email: "info@brglegendvalleygolf.vn",
    Mobile: "02263889999",
    IdentifyAddress: "Kim Bang Ha Nam",
    SubDescription: "Ha Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG Ruby Tree Golf & Resort",
    Description: "golf",
    Email: "info@rubytreegolf.vn",
    Mobile: "02253868888",
    IdentifyAddress: "Do Son Hai Phong",
    SubDescription: "Hai Phong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Golden Sands Golf Resort",
    Description: "golf",
    Email: "info@goldensandsgolf.vn",
    Mobile: "02343999888",
    IdentifyAddress: "Phong Dien Thua Thien Hue",
    SubDescription: "Thien Hue",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "BRG Da Nang Golf Resort",
    Description: "golf",
    Email: "info@dananggolfclub.com",
    Mobile: "02363957888",
    IdentifyAddress: "Ngu Hanh Son Da Nang",
    SubDescription: "Da Nang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "FLC Ha Long Golf Links",
    Description: "golf",
    Email: "booking@flchalonggolf.vn",
    Mobile: "02033628888",
    IdentifyAddress: "Ha Long Quang Ninh",
    SubDescription: "Quang Ninh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "FLC Sam Son Golf Links",
    Description: "golf",
    Email: "booking@flcsamsongolf.vn",
    Mobile: "02373738888",
    IdentifyAddress: "Sam Son Thanh Hoa",
    SubDescription: "Thanh Hoa",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "FLC Quy Nhon Golf Links",
    Description: "golf",
    Email: "booking@flcquynhongolf.vn",
    Mobile: "02563698888",
    IdentifyAddress: "Nhon Ly Quy Nhon Binh Dinh",
    SubDescription: "Binh Dinh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "FLC Quang Binh Golf Links",
    Description: "golf",
    Email: "booking@flcquangbinhgolf.vn",
    Mobile: "02323798888",
    IdentifyAddress: "Hai Ninh Quang Binh",
    SubDescription: "Quang Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinpearl Golf Hai Phong",
    Description: "golf",
    Email: "vinpearlgolf@vinpearl.com",
    Mobile: "02253961999",
    IdentifyAddress: "Vu Yen Hai Phong",
    SubDescription: "Hai Phong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinpearl Nam Hoi An",
    Description: "golf",
    Email: "vinpearlgolf@vinpearl.com",
    Mobile: "02353679999",
    IdentifyAddress: "Thang Binh Quang Nam",
    SubDescription: "Quang Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinpearl Golf Nha Trang",
    Description: "golf",
    Email: "vinpearlgolf@vinpearl.com",
    Mobile: "02583598888",
    IdentifyAddress: "Hon Tre Nha Trang",
    SubDescription: "Nha Trang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vinpearl Golf Phu Quoc",
    Description: "golf",
    Email: "vinpearlgolf@vinpearl.com",
    Mobile: "02973556666",
    IdentifyAddress: "Bai Dai Phu Quoc",
    SubDescription: "Phu Quoc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sky Lake Golf & Resort (San Sky)",
    Description: "golf",
    Email: "info@skylakegolfclub.com",
    Mobile: "02433711234",
    IdentifyAddress: "Van Son Chuong My Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sky Lake Golf & Resort (San Lake)",
    Description: "golf",
    Email: "info@skylakegolfclub.com",
    Mobile: "02433711234",
    IdentifyAddress: "Van Son Chuong My Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Long Bien Golf Course",
    Description: "golf",
    Email: "info@longbiengolf.vn",
    Mobile: "02433232999",
    IdentifyAddress: "Phuc Dong Long Bien Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Ha Noi Golf Club",
    Description: "golf",
    Email: "info@hanoigolfclub.com",
    Mobile: "02435991365",
    IdentifyAddress: "Minh Tri Soc Son Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Van Tri Golf Club",
    Description: "golf",
    Email: "info@vantrigolfclub.com",
    Mobile: "02422171600",
    IdentifyAddress: "Kim No Dong Anh Ha Noi",
    SubDescription: "Ha Noi",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tam Dao Golf & Resort",
    Description: "golf",
    Email: "info@tamdaogolf.com",
    Mobile: "02113896554",
    IdentifyAddress: "Hop Chau Tam Dao Vinh Phuc",
    SubDescription: "Vinh Phuc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Thanh Lanh Valley Golf Resort",
    Description: "golf",
    Email: "info@thanhlanhvalleygolf.vn",
    Mobile: "02113889999",
    IdentifyAddress: "Trung My Binh Xuyen Vinh Phuc",
    SubDescription: "Vinh Phuc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dai Lai Star Golf & Country Club",
    Description: "golf",
    Email: "info@dailaihotel.vn",
    Mobile: "02113520911",
    IdentifyAddress: "Ngoc Thanh Phuc Yen Vinh Phuc",
    SubDescription: "Vinh Phuc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Heron Lake Golf Course",
    Description: "golf",
    Email: "info@heronlakegolf.vn",
    Mobile: "02113728589",
    IdentifyAddress: "Dam Vac Vinh Yen Vinh Phuc",
    SubDescription: "Vinh Phuc",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hilltop Valley Golf Club",
    Description: "golf",
    Email: "info@hilltopvalleygolf.com",
    Mobile: "02183558888",
    IdentifyAddress: "Luong Son Hoa Binh",
    SubDescription: "Hoa Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Champion Phoenix Golf Resort",
    Description: "golf",
    Email: "phoenixgolfresort@nate.com",
    Mobile: "02186288000",
    IdentifyAddress: "Luong Son Hoa Binh",
    SubDescription: "Hoa Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dragon Phoenix Golf Resort",
    Description: "golf",
    Email: "phoenixgolfresort@nate.com",
    Mobile: "02186288000",
    IdentifyAddress: "Luong Son Hoa Binh",
    SubDescription: "Hoa Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Phoenix Phoenix Golf Resort",
    Description: "golf",
    Email: "phoenixgolfresort@nate.com",
    Mobile: "02186288000",
    IdentifyAddress: "Luong Son Hoa Binh",
    SubDescription: "Hoa Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Amber Hills Golf & Resort",
    Description: "golf",
    Email: "info@amberhillsgolf.vn",
    Mobile: "02043777888",
    IdentifyAddress: "Yen Dung Bac Giang",
    SubDescription: "Bac Giang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Stone Highland Golf Resort",
    Description: "golf",
    Email: "info@stonehighlandgolf.vn",
    Mobile: "02043888888",
    IdentifyAddress: "Bac Giang Viet Nam",
    SubDescription: "Viet Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Luc Nam Corn Hill Golf Resort",
    Description: "golf",
    Email: "info@cornhillgolf.vn",
    Mobile: "02043999999",
    IdentifyAddress: "Luc Nam Bac Giang",
    SubDescription: "Bac Giang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Chi Linh Golf",
    Description: "golf",
    Email: "info@chilinhgolf.com",
    Mobile: "02203585617",
    IdentifyAddress: "Sao Do Chi Linh Hai Duong",
    SubDescription: "Hai Duong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sono Belle Golf Resort (Song Gia)",
    Description: "golf",
    Email: "info@songgiagolf.com",
    Mobile: "02253939000",
    IdentifyAddress: "Thuy Nguyen Hai Phong",
    SubDescription: "Hai Phong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dragon Golf Link",
    Description: "golf",
    Email: "info@dragongolf.vn",
    Mobile: "02253939999",
    IdentifyAddress: "Do Son Hai Phong",
    SubDescription: "Hai Phong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tuan Chau Golf Resort",
    Description: "golf",
    Email: "info@tuanchaugolf.vn",
    Mobile: "02033833888",
    IdentifyAddress: "Tuan Chau Ha Long Quang Ninh",
    SubDescription: "Quang Ninh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "PGA Silk Path Dong Trieu",
    Description: "golf",
    Email: "info@pgasilkpathgolf.vn",
    Mobile: "02033899999",
    IdentifyAddress: "Dong Trieu Quang Ninh",
    SubDescription: "Quang Ninh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Mong Cai International Golf Club",
    Description: "golf",
    Email: "info@mongcaigolf.vn",
    Mobile: "0936033988",
    IdentifyAddress: "Tra Co Mong Cai Quang Ninh",
    SubDescription: "Quang Ninh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Van Lang Empire Golf Club",
    Description: "golf",
    Email: "info@vanlangempiregolf.vn",
    Mobile: "02103888888",
    IdentifyAddress: "Viet Tri Phu Tho",
    SubDescription: "Phu Tho",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Yen Bai Star Golf Resort",
    Description: "golf",
    Email: "info@yenbaistargolf.vn",
    Mobile: "02163888888",
    IdentifyAddress: "Yen Bai Viet Nam",
    SubDescription: "Viet Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sapa Grand Golf Course",
    Description: "golf",
    Email: "info@sapagolf.vn",
    Mobile: "02143888888",
    IdentifyAddress: "Sapa Lao Cai",
    SubDescription: "Lao Cai",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Stone Valley Golf Resort",
    Description: "golf",
    Email: "info@stonevalleygolf.vn",
    Mobile: "02263888888",
    IdentifyAddress: "Kim Bang Ha Nam",
    SubDescription: "Ha Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Royal Golf Club Yen Thang",
    Description: "golf",
    Email: "info@royalgolfclub.vn",
    Mobile: "0303787440",
    IdentifyAddress: "Tam Diep Ninh Binh",
    SubDescription: "Ninh Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Trang An Golf Resort",
    Description: "golf",
    Email: "info@trangangolf.vn",
    Mobile: "0306333111",
    IdentifyAddress: "Nho Quan Ninh Binh",
    SubDescription: "Ninh Binh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Cua Lo Golf Resort",
    Description: "golf",
    Email: "info@cualogolf.vn",
    Mobile: "02383956666",
    IdentifyAddress: "Cua Lo Nghe An",
    SubDescription: "Nghe An",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Muong Thanh Dien Lam Golf Club",
    Description: "golf",
    Email: "info@muongthanhgolf.vn",
    Mobile: "02383889999",
    IdentifyAddress: "Dien Chau Nghe An",
    SubDescription: "Nghe An",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Muong Thanh Xuan Thanh Golf Club",
    Description: "golf",
    Email: "info@xuanthanhgolf.vn",
    Mobile: "02393777777",
    IdentifyAddress: "Nghi Xuan Ha Tinh",
    SubDescription: "Ha Tinh",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Laguna Golf Lang Co",
    Description: "golf",
    Email: "golf@lagunalangco.com",
    Mobile: "02343695880",
    IdentifyAddress: "Phu Loc Thua Thien Hue",
    SubDescription: "Thien Hue",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Ba Na Hills Golf Club",
    Description: "golf",
    Email: "info@banahillsgolf.com",
    Mobile: "02363924888",
    IdentifyAddress: "Hoa Vang Da Nang",
    SubDescription: "Da Nang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Montgomerie Links Vietnam",
    Description: "golf",
    Email: "info@montgomerielinks.com",
    Mobile: "02353941942",
    IdentifyAddress: "Dien Ban Quang Nam",
    SubDescription: "Quang Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Hoiana Shores Golf Club",
    Description: "golf",
    Email: "golf@hoiana.com",
    Mobile: "02353858888",
    IdentifyAddress: "Duy Xuyen Quang Nam",
    SubDescription: "Quang Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "KN Golf Links Cam Ranh",
    Description: "golf",
    Email: "info@kngolflinks.com",
    Mobile: "02583998888",
    IdentifyAddress: "Cam Ranh Khanh Hoa",
    SubDescription: "Khanh Hoa",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Diamond Bay Golf Club",
    Description: "golf",
    Email: "info@diamondbaygolf.com",
    Mobile: "02583711722",
    IdentifyAddress: "Nha Trang Khanh Hoa",
    SubDescription: "Khanh Hoa",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Nara Binh Tien Golf Club",
    Description: "golf",
    Email: "info@narabinhgolf.vn",
    Mobile: "02593888888",
    IdentifyAddress: "Ninh Thuan Viet Nam",
    SubDescription: "Viet Nam",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dalat Palace Golf Club",
    Description: "golf",
    Email: "info@dalatpalacegolf.com",
    Mobile: "02633823507",
    IdentifyAddress: "Da Lat Lam Dong",
    SubDescription: "Lam Dong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "The Dalat At 1200",
    Description: "golf",
    Email: "info@the1200.vn",
    Mobile: "02633777111",
    IdentifyAddress: "Don Duong Lam Dong",
    SubDescription: "Lam Dong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sacom Tuyen Lam Golf Resort",
    Description: "golf",
    Email: "info@sacomgolf.vn",
    Mobile: "02636263000",
    IdentifyAddress: "Tuyen Lam Da Lat",
    SubDescription: "Da Lat",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sea Links Golf & Country Club",
    Description: "golf",
    Email: "info@sealinks.com.vn",
    Mobile: "02523747777",
    IdentifyAddress: "Phan Thiet Binh Thuan",
    SubDescription: "Binh Thuan",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "PGA NovaWorld Phan Thiet",
    Description: "golf",
    Email: "info@novaworldgolf.vn",
    Mobile: "02523999999",
    IdentifyAddress: "Phan Thiet Binh Thuan",
    SubDescription: "Binh Thuan",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Long Thanh Golf Resort",
    Description: "golf",
    Email: "info@longthanhgolfresort.com",
    Mobile: "02516268989",
    IdentifyAddress: "Bien Hoa Dong Nai",
    SubDescription: "Dong Nai",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Dong Nai Golf Resort",
    Description: "golf",
    Email: "info@dongnaigolf.com",
    Mobile: "02513866288",
    IdentifyAddress: "Trang Bom Dong Nai",
    SubDescription: "Dong Nai",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Taekwang Jeongsan Country Club",
    Description: "golf",
    Email: "info@taekwanggolf.vn",
    Mobile: "02513567888",
    IdentifyAddress: "Nhon Trach Dong Nai",
    SubDescription: "Dong Nai",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Song Be Golf Resort",
    Description: "golf",
    Email: "info@songbegolf.com",
    Mobile: "02743755666",
    IdentifyAddress: "Thu Dau Mot Binh Duong",
    SubDescription: "Binh Duong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Twin Doves Golf Club",
    Description: "golf",
    Email: "info@twindovesgolf.com",
    Mobile: "02743861999",
    IdentifyAddress: "Thu Dau Mot Binh Duong",
    SubDescription: "Binh Duong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Harmonie Golf Park",
    Description: "golf",
    Email: "info@harmoniegolfpark.vn",
    Mobile: "02743799999",
    IdentifyAddress: "Thu Dau Mot Binh Duong",
    SubDescription: "Binh Duong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Royal Island Golf Villas",
    Description: "golf",
    Email: "info@royalislandgolf.vn",
    Mobile: "02743637788",
    IdentifyAddress: "Tan Uyen Binh Duong",
    SubDescription: "Binh Duong",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vietnam Golf Country Club",
    Description: "golf",
    Email: "info@vietnamgolfcc.com",
    Mobile: "02837310888",
    IdentifyAddress: "Thu Duc HCMC",
    SubDescription: "Duc HCMC",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Tan Son Nhat Golf Course",
    Description: "golf",
    Email: "info@tansonnhatgolf.vn",
    Mobile: "02862699999",
    IdentifyAddress: "Tan Binh HCMC",
    SubDescription: "Binh HCMC",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Vung Tau Paradise Golf",
    Description: "golf",
    Email: "info@vungtauparadisegolf.vn",
    Mobile: "02543858888",
    IdentifyAddress: "Vung Tau Ba Ria Vung Tau",
    SubDescription: "Vung Tau",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Sonadezi Chau Duc Golf",
    Description: "golf",
    Email: "info@sonadezigolf.vn",
    Mobile: "02543966666",
    IdentifyAddress: "Ba Ria Vung Tau",
    SubDescription: "Vung Tau",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "West Lakes Golf Villa",
    Description: "golf",
    Email: "info@westlakesgolf.vn",
    Mobile: "02723777777",
    IdentifyAddress: "Duc Hoa Long An",
    SubDescription: "Long An",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Royal Long An Golf Villas",
    Description: "golf",
    Email: "info@royallongan.com",
    Mobile: "02723888888",
    IdentifyAddress: "Duc Hue Long An",
    SubDescription: "Long An",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  },
  {
    Name: "Eschuri Vung Bau Golf Resort",
    Description: "golf",
    Email: "info@eschurigolf.vn",
    Mobile: "02973777777",
    IdentifyAddress: "Phu Quoc Kien Giang",
    SubDescription: "Kien Giang",
    CateId: ['488f427c-8cfa-448e-bef9-5822893f22b9']
  }

]

export default data