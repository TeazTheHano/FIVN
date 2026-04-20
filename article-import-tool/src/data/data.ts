import { AddressInput } from "../domain/buildAddress";
import { ArticleInput } from "../domain/buildArticle"
import { UserInput } from "../domain/buildUser";

let data: UserInput[] =[
  {
    Name: 'Jupviec',
    Description: 'Homecare cơ bản \n' +
      '- Gói dọn dẹp chuyên nghiệp \n' +
      '- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa \n' +
      '* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp ddax suar\n',
    Email: 'info@linkcare.vn',
    Mobile: '19006082',
    IdentifyAddress: 'Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Jupviec',
    Description: 'Homecare cơ bản \n' +
      '- Gói dọn dẹp chuyên nghiệp\n' +
      '- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa\n' +
      '* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp\n',
    Email: 'NCC_7b54d8d9-1ed7-40b6-9779-9b6e769e683f@example.com',
    Mobile: '19006082',
    IdentifyAddress: 'Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Jupviec',
    Description: 'Homecare cơ bản \n' +
      '- Gói dọn dẹp chuyên nghiệp\n' +
      '- Gói vệ sinh khử khuẩn/ giặt rèm/ sofa\n' +
      '* Gói deep clean tương ứng 2 lần dọn dẹp chuyên nghiệp\n',
    Email: 'NCC_234a4e07-c8bb-47e4-8a9c-823f8b26a11e@example.com',
    Mobile: '19006082',
    IdentifyAddress: 'Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tudo',
    Description: 'Dịch vụ Sắp xếp đồ đạc, nội thất gia đình, tủ quần áo*',
    Email: 'info@tudo.com.vn',
    Mobile: '02839303279',
    IdentifyAddress: 'Tầng 11, 246 Cống Quỳnh, Q.1, TP.HCM',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tudo',
    Description: 'Dịch vụ Sắp xếp đồ đạc, nội thất gia đình, tủ quần áo*',
    Email: 'info@tudo.com.vn',
    Mobile: '02839303279',
    IdentifyAddress: 'Tầng 11, 246 Cống Quỳnh, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Royal decor',
    Description: 'Gói Trang trí bao gồm Lễ Tết cơ bản',
    Email: 'royaldecorhnmall@gmail.com',
    Mobile: '0911838585',
    IdentifyAddress: '6 Nguyễn Thị Thập, Trung Hoà, Cầu Giấy, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Royal decor',
    Description: 'Gói Trang trí bao gồm Lễ Tết cơ bản',
    Email: 'royaldecorhnmall@gmail.com',
    Mobile: '0911838585',
    IdentifyAddress: '6 Nguyễn Thị Thập, Trung Hoà, Cầu Giấy, Hà Nội',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vệ sinh thiết bị: Jupviec',
    Description: 'Bảo dưỡng bảo trì máy móc',
    Email: 'NCC_5e4f7519-87c6-4db8-a8e8-af51111a4762@example.com',
    Mobile: '19006082',
    IdentifyAddress: 'Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vệ sinh thiết bị: Jupviec',
    Description: 'Bảo dưỡng bảo trì máy móc',
    Email: 'NCC_fb7baf90-ac5e-4120-98d0-ccf2285450e0@example.com',
    Mobile: '19006082',
    IdentifyAddress: 'Phòng 1309, Tầng 13, Khu A, Tòa nhà M3-M4, 91 Nguyễn Chí Thanh, Quận Đống Đa, Hà Nội',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dalat Hasfarm',
    Description: 'Cắm hoa',
    Email: 'connect@dalathasfarm.com',
    Mobile: '02633824947',
    IdentifyAddress: '450 Nguyên Tử Lực, P. Lâm Viên, Đà Lạt',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dalat Hasfarm',
    Description: 'Cắm hoa',
    Email: 'connect@dalathasfarm.com',
    Mobile: '02633824947',
    IdentifyAddress: '450 Nguyên Tử Lực, P. Lâm Viên, Đà Lạt',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Dịch vụ Family Concierge service',
    Email: 'NCC_90e42999-0768-465c-a19f-35f31db242bc@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Toàn quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Dịch vụ Concierge service hỗ trợ Tenant',
    Email: 'NCC_90e42999-0768-465c-a19f-35f31db242bc@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Toàn quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Dịch vụ Concierge service',
    Email: 'NCC_90e42999-0768-465c-a19f-35f31db242bc@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Toàn quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Đặc quyền Fast track, Phòng chờ QT & SH elite',
    Email: 'NCC_05883172-a1de-4f9b-ba39-a50d7e986cfa@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Đặc quyền Fast track, Phòng chờ QT & SH elite',
    Email: 'NCC_90e42999-0768-465c-a19f-35f31db242bc@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Đặc quyền Fast track, Phòng chờ QT & SH elite',
    Email: 'NCC_05883172-a1de-4f9b-ba39-a50d7e986cfa@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Phú Quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Đặc quyền Fast track, Phòng chờ QT & SH elite',
    Email: 'NCC_05883172-a1de-4f9b-ba39-a50d7e986cfa@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Đà Nẵng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'AIPCON',
    Description: 'Lounge TCB',
    Email: 'NCC_63f219b4-d554-47a8-b32d-826b836d70e9@example.com',
    Mobile: '0000000000',
    IdentifyAddress: '(chưa rõ)',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'AIPCON',
    Description: 'Lounge TCB',
    Email: 'NCC_eebc992b-6978-47ad-82ea-04f7e2f82571@example.com',
    Mobile: '0000000000',
    IdentifyAddress: '(chưa rõ)',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'LinkCare',
    Description: 'Kế hoạch dinh dưỡng & chăm sóc sức khoẻ chủ động 365 ngày dành cho khách hàng sau kiểm tra sức khoẻ',
    Email: 'NCC_90e42999-0768-465c-a19f-35f31db242bc@example.com',
    Mobile: '02439440216',
    IdentifyAddress: 'Tầng 14, Tòa Hapro, 11B Cát Linh, Đống Đa, Hà Nội',
    SubDescription: 'Toàn quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Mellow Six',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'NCC_32aa4270-07b9-46ef-afab-cf433b7c534e@example.com',
    Mobile: '0523006868',
    IdentifyAddress: '6 Quang Trung, P. Cửa Nam, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hudson Room @ Capella',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'info.hanoi@capellahotels.com',
    Mobile: '02439878888',
    IdentifyAddress: '11 Lê Phụng Hiểu, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Diva Lounge @ Capella',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'info.hanoi@capellahotels.com',
    Mobile: '02439878888',
    IdentifyAddress: '11 Lê Phụng Hiểu, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hive Lounge @ InterContinental Landmark 72',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'res.hanoilandmark72@ihg.com',
    Mobile: '02436988888',
    IdentifyAddress: 'Tầng 62, Keangnam Landmark Tower, Nam Từ Liêm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Angelina @ Sofitel Metropole',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'metropolehanoi.info@sofitel.com',
    Mobile: '02438266919',
    IdentifyAddress: '15 Ngô Quyền, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'YY @ Fairmont',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'NCC_1474320c-e61e-45fd-a5fb-c4947baa7cfb@example.com	',
    Mobile: '0000000000',
    IdentifyAddress: '10 Trần Nguyên Hãn, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Social Club Rooftop @ Hotel des Arts',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'NCC_7c840e94-c121-4149-a57b-0310ee161578@example.com	',
    Mobile: '02839828888',
    IdentifyAddress: '76-78 Nguyễn Thị Minh Khai, Q.3, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Boudoir Lounge @ Sofitel Plaza',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'NCC_136a5f2d-dc42-422b-bde6-26e4f8030d04@example.com',
    Mobile: '02838241555',
    IdentifyAddress: '17 Lê Duẩn, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Ministry Concept Bar @ Sofitel Plaza',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'info@barbaard.com',
    Mobile: '18007040',
    IdentifyAddress: '17 Lê Duẩn, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Coco Dining & Whiskey Bar',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: 'inquiry@cocosgn.com',
    Mobile: '0969730660',
    IdentifyAddress: '143 Nam Kỳ Khởi Nghĩa, Phường 6, Quận 3, TP. Hồ Chí Minh',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Lam Son 2 Bar @ Park Hyatt',
    Description: 'Trải nghiệm cocktail tại Bar & Lounge cao cấp/ đạt giải thưởng trong Thành Phố (Hà Nội & TP. Hồ Chí Minh) hoặc Bar thuộc Khách sạn 5 sao. ',
    Email: '2lamson.saiph@hyatt.com',
    Mobile: '02838241234',
    IdentifyAddress: '2 Công Trường Lam Sơn, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Mellow Six',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_e5edc090-0db3-4c2d-a8b1-3369c27ce2c8@example.com',
    Mobile: '0523006868',
    IdentifyAddress: '6 Quang Trung, P. Cửa Nam, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Ichi Sushi (2 pax , no drink)',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'sushiichi.ketoan@gmail.com',
    Mobile: '0869865555',
    IdentifyAddress: '98 Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Bacco@Fairmont',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_db46239d-2a8b-48e7-bcdd-05e63212c31b@example.com',
    Mobile: '0000000000',
    IdentifyAddress: '10 Trần Nguyên Hãn, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vien Dining',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_efcb28c1-04bc-4fbe-bc65-5f3c8348ce62@example.com',
    Mobile: '0388451919',
    IdentifyAddress: 'Ngõ Bà Triệu, Hai Bà Trưng, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tanh Tách',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_19562a02-a81d-4199-bbce-ebe5b43e6ef0@example.com',
    Mobile: '0000000000',
    IdentifyAddress: '(chưa rõ)',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hemisphere @ Sheraton Hanoi',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_d9b2ace2-cc44-4629-bc6a-93f6fca07fba@example.com',
    Mobile: '02437199000',
    IdentifyAddress: 'K5 Nghi Tàm, 11 Xuân Diệu, Tây Hồ, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Le Club @ Sofitel Metropole',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'metropolehanoi.info@sofitel.com',
    Mobile: '02438266919',
    IdentifyAddress: '15 Ngô Quyền, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Stellar Steakhouse @ InterContinental LM72',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'res.hanoilandmark72@ihg.com',
    Mobile: '02436988888',
    IdentifyAddress: 'Tầng 62, Keangnam Landmark Tower, Nam Từ Liêm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Coco Dining (1-star Michelin)',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_d7bb1371-c9e1-4021-a2f9-cdf48e8a3c71@example.com',
    Mobile: '0969730660',
    IdentifyAddress: '143 Nam Kỳ Khởi Nghĩa, Phường 6, Quận 3, TP. Hồ Chí Minh',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'The Albion by Kirk Westaway (Michelin Selected 2025, Best restaurant of the Year @ Tatler 2025) ',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_f9257b1d-3c85-4c85-a62d-78556879f91b@example.com',
    Mobile: '0902849988',
    IdentifyAddress: '76-78 Nguyễn Thị Minh Khai, Q.3, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Libai @ Sheraton Saigon Grand Opera Hotel (Best Innovation Restaurant of The Year 2024 tại LUXUO Asia Awards 2024 )',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'NCC_497e14b5-6460-4f09-969d-9ba8e7a1f360@example.com',
    Mobile: '1900636091',
    IdentifyAddress: '88 Đồng Khởi, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'SENS Wine & Dine',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'info@sens.com.vn',
    Mobile: '02838272372',
    IdentifyAddress: 'Tầng 52, Bitexco Tower, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: '5 Sensese @ Nikko Hotel',
    Description: 'Dining/ Catering tại nhà hàng cao cấp.Nhà hàng 1 sao Michelin hoặc Michelin Selected, Tatler Best, Asia Best, Nhà hàng trong,Khách sạn 5*, 6*',
    Email: 'hello@5senses.com.vn',
    Mobile: '02866887888',
    IdentifyAddress: '235 Nguyễn Văn Cừ, Q.1, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hà Thành Mansion',
    Description: 'Dịch vụ Catering tại gia',
    Email: 'thanh.luong@fbee.vn',
    Mobile: '0946398558',
    IdentifyAddress: '14 Ngô Văn Sở, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Haris Brunch & Grill',
    Description: 'Dịch vụ Catering tại gia',
    Email: 'NCC_089fee96-3b12-43cc-aad2-6ab472104366@example.com',
    Mobile: '0829995969',
    IdentifyAddress: '88 Hàng Trống, Hoàn Kiếm, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'The Ox Not Only Ox',
    Description: 'Dịch vụ Catering tại gia',
    Email: 'booking.theox@gmail.com',
    Mobile: '0913515351',
    IdentifyAddress: '24/24 Đông Du, Q.1, TP.HCM',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Công ty TNHH Ngọc Sương Marina Hà Nội',
    Description: 'Dịch vụ Catering tại gia',
    Email: 'nsleisure@ngocsuong.com.vn',
    Mobile: '0438866478',
    IdentifyAddress: 'Số 50, phố Châu Long,Phường Ba Đình, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Raffles Medical (Hà Nội)',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'hanoi@rafflesmedical.com',
    Mobile: '02437192222',
    IdentifyAddress: '51 Xuân Diệu, Quảng An, Tây Hồ, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Raffles Medical (TP.HCM)',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'frontdesk_TP.HCM@rafflesmedical.com',
    Mobile: '02838240777',
    IdentifyAddress: '285B Điện Biên Phủ, Q.3, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Bệnh viện Pháp Việt (FV)',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'information@fvhospital.com',
    Mobile: '02835113333',
    IdentifyAddress: '6 Nguyễn Lương Bằng, Phú Mỹ Hưng, Q.7, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Bệnh viện Hồng Ngọc (Hà Nội)',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@hongngochospital.vn',
    Mobile: '02439275568',
    IdentifyAddress: '55 Yên Ninh, Trúc Bạch, Ba Đình, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Times City – Hà Nội',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02439743556',
    IdentifyAddress: '458 Minh Khai, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Hải Phòng',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02257309888',
    IdentifyAddress: 'Tổ 31, P. An Biên, TP. Hải Phòng',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Đà Nẵng',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02363711111',
    IdentifyAddress: 'Đường 30 Tháng 4, P. Hòa Cường, TP. Đà Nẵng',
    SubDescription: 'Đà Nẵng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Nha Trang',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02583900168',
    IdentifyAddress: 'Đường Trần Phú, Tổ dân phố 1 Tây Sơn, TP. Nha Trang, Khánh Hòa',
    SubDescription: 'Khánh Hòa',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Phú Quốc',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02973985588',
    IdentifyAddress: 'Bãi Dài, Phú Quốc, Kiên Giang',
    SubDescription: 'Kiên Giang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinmec Central Park – TP.HCM',
    Description: 'Gói khám SK cao cấp VN có TKYK tại chuỗi BV quốc tế/cao cấp',
    Email: 'info@vinmec.com',
    Mobile: '02836221166',
    IdentifyAddress: '208 Nguyễn Hữu Cảnh, P. 22, Q. Bình Thạnh, TP.HCM',
    SubDescription: 'Tp TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: "BRG King' Island - Lake Side",
    Description: 'golf',
    Email: 'booking@kingsislandgolf.vn',
    Mobile: '02433686555',
    IdentifyAddress: 'Đồng Mô, Sơn Tây, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: "BRG King' Island - Mountain View",
    Description: 'golf',
    Email: 'booking@kingsislandgolf.vn',
    Mobile: '02433686555',
    IdentifyAddress: 'Đồng Mô, Sơn Tây, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: "BRG King' Island - King Course",
    Description: 'golf',
    Email: 'booking@kingsislandgolf.vn',
    Mobile: '02433686555',
    IdentifyAddress: 'Đồng Mô, Sơn Tây, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'BRG Legend Hill Golf Resort',
    Description: 'golf',
    Email: 'info@brglegendhillgolf.vn',
    Mobile: '02439393690',
    IdentifyAddress: 'Phù Linh, Sóc Sơn, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'BRG Legend Valley Country Club',
    Description: 'golf',
    Email: 'info@brglegendvalleygolf.vn',
    Mobile: '02263889999',
    IdentifyAddress: 'Kim Bảng, Hà Nam',
    SubDescription: 'Hà Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'BRG Ruby Tree Golf & Resort',
    Description: 'golf',
    Email: 'info@rubytreegolf.vn',
    Mobile: '02253868888',
    IdentifyAddress: 'Đồ Sơn, Hải Phòng',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Golden Sands Golf Resort',
    Description: 'golf',
    Email: 'info@goldensandsgolf.vn',
    Mobile: '02343999888',
    IdentifyAddress: 'Phong Diền, Thừa Thiên Huế',
    SubDescription: 'Thừa Thiên Huế',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'BRG Da Nang Golf Resort',
    Description: 'golf',
    Email: 'info@dananggolfclub.com',
    Mobile: '02363957888',
    IdentifyAddress: 'Ngũ Hành Sơn, Đà Nẵng',
    SubDescription: 'Đà Nẵng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'FLC Ha Long Golf Links',
    Description: 'golf',
    Email: 'booking@flchalonggolf.vn',
    Mobile: '02033628888',
    IdentifyAddress: 'Hạ Long, Quảng Ninh',
    SubDescription: 'Quảng Ninh',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'FLC Sam Son Golf Links',
    Description: 'golf',
    Email: 'booking@flcsamsongolf.vn',
    Mobile: '02373738888',
    IdentifyAddress: 'Sầm Sơn, Thanh Hoá',
    SubDescription: 'Thanh Hoá',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'FLC Quy Nhon Golf Links',
    Description: 'golf',
    Email: 'booking@flcquynhongolf.vn',
    Mobile: '02563698888',
    IdentifyAddress: 'Nhơn Lý, Quy Nhơn, Bình Định',
    SubDescription: 'Bình Định',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'FLC Quang Binh Golf Links',
    Description: 'golf',
    Email: 'booking@flcquangbinhgolf.vn',
    Mobile: '02323798888',
    IdentifyAddress: 'Hải Ninh, Quảng Bình',
    SubDescription: 'Quảng Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinpearl Golf Hai Phong',
    Description: 'golf',
    Email: 'vinpearlgolf@vinpearl.com',
    Mobile: '02253961999',
    IdentifyAddress: 'Vũ Yên, Hải Phòng',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinpearl Nam Hoi An',
    Description: 'golf',
    Email: 'vinpearlgolf@vinpearl.com',
    Mobile: '02353679999',
    IdentifyAddress: 'Thăng Bình, Quảng Nam',
    SubDescription: 'Quảng Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinpearl Golf Nha Trang',
    Description: 'golf',
    Email: 'vinpearlgolf@vinpearl.com',
    Mobile: '02583598888',
    IdentifyAddress: 'Hòn Tre, Nha Trang',
    SubDescription: 'Nha Trang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vinpearl Golf Phu Quoc',
    Description: 'golf',
    Email: 'vinpearlgolf@vinpearl.com',
    Mobile: '02973556666',
    IdentifyAddress: 'Bãi Dài, Phú Quốc, Kiên Giang',
    SubDescription: 'Phú Quốc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sky Lake Golf & Resort (San Sky)',
    Description: 'golf',
    Email: 'info@skylakegolfclub.com',
    Mobile: '02433711234',
    IdentifyAddress: 'Văn Sơn, Chương Mỹ, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sky Lake Golf & Resort (San Lake)',
    Description: 'golf',
    Email: 'info@skylakegolfclub.com',
    Mobile: '02433711234',
    IdentifyAddress: 'Văn Sơn, Chương Mỹ, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Long Bien Golf Course',
    Description: 'golf',
    Email: 'info@longbiengolf.vn',
    Mobile: '02433232999',
    IdentifyAddress: 'Phuc Dong Long Bien Ha Noi',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Ha Noi Golf Club',
    Description: 'golf',
    Email: 'info@hanoigolfclub.com',
    Mobile: '02435991365',
    IdentifyAddress: 'Minh Tri Soc Son Ha Noi',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Van Tri Golf Club',
    Description: 'golf',
    Email: 'info@vantrigolfclub.com',
    Mobile: '02422171600',
    IdentifyAddress: 'Kim Nỗ, Đông Anh, Hà Nội',
    SubDescription: 'Hà Nội',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tam Dao Golf & Resort',
    Description: 'golf',
    Email: 'info@tamdaogolf.com',
    Mobile: '02113896554',
    IdentifyAddress: 'Hợp Châu, Tam Đảo, Vĩnh Phúc',
    SubDescription: 'Vĩnh Phúc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Thanh Lanh Valley Golf Resort',
    Description: 'golf',
    Email: 'info@thanhlanhvalleygolf.vn',
    Mobile: '02113889999',
    IdentifyAddress: 'Trung Mỹ, Bình Xuyên, Vĩnh Phúc',
    SubDescription: 'Vĩnh Phúc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dai Lai Star Golf & Country Club',
    Description: 'golf',
    Email: 'info@dailaihotel.vn',
    Mobile: '02113520911',
    IdentifyAddress: 'Ngọc Thanh, Phúc Yên, Vĩnh Phúc',
    SubDescription: 'Vĩnh Phúc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Heron Lake Golf Course',
    Description: 'golf',
    Email: 'info@heronlakegolf.vn',
    Mobile: '02113728589',
    IdentifyAddress: 'Đầm Vạc, Vĩnh Yên, Vĩnh Phúc',
    SubDescription: 'Vĩnh Phúc',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hilltop Valley Golf Club',
    Description: 'golf',
    Email: 'info@hilltopvalleygolf.com',
    Mobile: '02183558888',
    IdentifyAddress: 'Hương Sơn, Hòa Bình',
    SubDescription: 'Hòa Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Champion Phoenix Golf Resort',
    Description: 'golf',
    Email: 'phoenixgolfresort@nate.com',
    Mobile: '02186288000',
    IdentifyAddress: 'Hương Sơn, Hòa Bình',
    SubDescription: 'Hòa Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dragon Phoenix Golf Resort',
    Description: 'golf',
    Email: 'phoenixgolfresort@nate.com',
    Mobile: '02186288000',
    IdentifyAddress: 'Hương Sơn, Hòa Bình',
    SubDescription: 'Hòa Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Phoenix Phoenix Golf Resort',
    Description: 'golf',
    Email: 'phoenixgolfresort@nate.com',
    Mobile: '02186288000',
    IdentifyAddress: 'Hương Sơn, Hòa Bình',
    SubDescription: 'Hòa Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Amber Hills Golf & Resort',
    Description: 'golf',
    Email: 'info@amberhillsgolf.vn',
    Mobile: '02043777888',
    IdentifyAddress: 'Yên Dung Bắc Giang',
    SubDescription: 'Bắc Giang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Stone Highland Golf Resort',
    Description: 'golf',
    Email: 'info@stonehighlandgolf.vn',
    Mobile: '02043888888',
    IdentifyAddress: 'Bắc Giang',
    SubDescription: 'Bắc Giang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Luc Nam Corn Hill Golf Resort',
    Description: 'golf',
    Email: 'info@cornhillgolf.vn',
    Mobile: '02043999999',
    IdentifyAddress: 'Lục Nam, Bắc Giang',
    SubDescription: 'Bắc Giang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Chi Linh Golf',
    Description: 'golf',
    Email: 'info@chilinhgolf.com',
    Mobile: '02203585617',
    IdentifyAddress: 'Sao Đỏ, Chí Linh, Hải Dương',
    SubDescription: 'Hải Dương',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sono Belle Golf Resort (Song Gia)',
    Description: 'golf',
    Email: 'info@songgiagolf.com',
    Mobile: '02253939000',
    IdentifyAddress: 'Thủy Nguyên, Hải Phòng',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dragon Golf Link',
    Description: 'golf',
    Email: 'info@dragongolf.vn',
    Mobile: '02253939999',
    IdentifyAddress: 'Đồ Sơn, Hải Phòng',
    SubDescription: 'Hải Phòng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tuan Chau Golf Resort',
    Description: 'golf',
    Email: 'info@tuanchaugolf.vn',
    Mobile: '02033833888',
    IdentifyAddress: 'Tuần Châu, Hạ Long, Quảng Ninh',
    SubDescription: 'Quảng Ninh',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'PGA Silk Path Dong Trieu',
    Description: 'golf',
    Email: 'info@pgasilkpathgolf.vn',
    Mobile: '02033899999',
    IdentifyAddress: 'Đồng Triều, Quảng Ninh',
    SubDescription: 'Quảng Ninh',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Mong Cai International Golf Club',
    Description: 'golf',
    Email: 'info@mongcaigolf.vn',
    Mobile: '0936033988',
    IdentifyAddress: 'Trà Cổ, Móng Cái, Quảng Ninh',
    SubDescription: 'Quảng Ninh',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Van Lang Empire Golf Club',
    Description: 'golf',
    Email: 'info@vanlangempiregolf.vn',
    Mobile: '02103888888',
    IdentifyAddress: 'Việt Trì, Phú Thọ',
    SubDescription: 'Phú Thọ',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Yen Bai Star Golf Resort',
    Description: 'golf',
    Email: 'info@yenbaistargolf.vn',
    Mobile: '02163888888',
    IdentifyAddress: 'Yên Bái',
    SubDescription: 'Yên Bái',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sapa Grand Golf Course',
    Description: 'golf',
    Email: 'info@sapagolf.vn',
    Mobile: '02143888888',
    IdentifyAddress: 'Sapa, Lào Cai',
    SubDescription: 'Lào Cai',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Stone Valley Golf Resort',
    Description: 'golf',
    Email: 'info@stonevalleygolf.vn',
    Mobile: '02263888888',
    IdentifyAddress: 'Kim Bảng, Hà Nam',
    SubDescription: 'Hà Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Royal Golf Club Yen Thang',
    Description: 'golf',
    Email: 'info@royalgolfclub.vn',
    Mobile: '0303787440',
    IdentifyAddress: 'Tam Điệp Ninh Bình',
    SubDescription: 'Ninh Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Trang An Golf Resort',
    Description: 'golf',
    Email: 'info@trangangolf.vn',
    Mobile: '0306333111',
    IdentifyAddress: 'Nho Quan, Ninh Bình',
    SubDescription: 'Ninh Bình',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Cua Lo Golf Resort',
    Description: 'golf',
    Email: 'info@cualogolf.vn',
    Mobile: '02383956666',
    IdentifyAddress: 'Cửa Lò, Nghệ An',
    SubDescription: 'Nghệ An',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Muong Thanh Dien Lam Golf Club',
    Description: 'golf',
    Email: 'info@muongthanhgolf.vn',
    Mobile: '02383889999',
    IdentifyAddress: 'Diễn Châu, Nghệ An',
    SubDescription: 'Nghệ An',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Muong Thanh Xuan Thanh Golf Club',
    Description: 'golf',
    Email: 'info@xuanthanhgolf.vn',
    Mobile: '02393777777',
    IdentifyAddress: 'Nghi Xuân, Hà Tĩnh',
    SubDescription: 'Hà Tĩnh',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Laguna Golf Lang Co',
    Description: 'golf',
    Email: 'golf@lagunalangco.com',
    Mobile: '02343695880',
    IdentifyAddress: 'Phú Lộc, Thừa Thiên Huế',
    SubDescription: 'Thừa Thiên Huế',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Ba Na Hills Golf Club',
    Description: 'golf',
    Email: 'info@banahillsgolf.com',
    Mobile: '02363924888',
    IdentifyAddress: 'Hòa Vang, Đà Nẵng',
    SubDescription: 'Đà Nẵng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Montgomerie Links Vietnam',
    Description: 'golf',
    Email: 'info@montgomerielinks.com',
    Mobile: '02353941942',
    IdentifyAddress: 'Điện Bàn, Quảng Nam',
    SubDescription: 'Quảng Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Hoiana Shores Golf Club',
    Description: 'golf',
    Email: 'golf@hoiana.com',
    Mobile: '02353858888',
    IdentifyAddress: 'Duy Xuyên Quảng Nam',
    SubDescription: 'Quảng Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'KN Golf Links Cam Ranh',
    Description: 'golf',
    Email: 'info@kngolflinks.com',
    Mobile: '02583998888',
    IdentifyAddress: 'Cam Ranh, Khánh Hoà',
    SubDescription: 'Khánh Hòa',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Diamond Bay Golf Club',
    Description: 'golf',
    Email: 'info@diamondbaygolf.com',
    Mobile: '02583711722',
    IdentifyAddress: 'Nha Trang, Khánh Hòa',
    SubDescription: 'Khánh Hòa',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Nara Binh Tien Golf Club',
    Description: 'golf',
    Email: 'info@narabinhgolf.vn',
    Mobile: '02593888888',
    IdentifyAddress: 'Ninh Thuận, Việt Nam',
    SubDescription: 'Việt Nam',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dalat Palace Golf Club',
    Description: 'golf',
    Email: 'info@dalatpalacegolf.com',
    Mobile: '02633823507',
    IdentifyAddress: 'Đà Lạt, Lâm Đồng',
    SubDescription: 'Lâm Đồng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'The Dalat At 1200',
    Description: 'golf',
    Email: 'info@the1200.vn',
    Mobile: '02633777111',
    IdentifyAddress: 'Đơn Dương, Lâm Đồng',
    SubDescription: 'Lâm Đồng',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sacom Tuyen Lam Golf Resort',
    Description: 'golf',
    Email: 'info@sacomgolf.vn',
    Mobile: '02636263000',
    IdentifyAddress: 'Tuyền Lâm, Đà Lạt',
    SubDescription: 'Đà Lạt',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sea Links Golf & Country Club',
    Description: 'golf',
    Email: 'info@sealinks.com.vn',
    Mobile: '02523747777',
    IdentifyAddress: 'Phan Thiết, Bình Thuận',
    SubDescription: 'Bình Thuận',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'PGA NovaWorld Phan Thiet',
    Description: 'golf',
    Email: 'info@novaworldgolf.vn',
    Mobile: '02523999999',
    IdentifyAddress: 'Phan Thiết, Bình Thuận',
    SubDescription: 'Bình Thuận',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Long Thanh Golf Resort',
    Description: 'golf',
    Email: 'info@longthanhgolfresort.com',
    Mobile: '02516268989',
    IdentifyAddress: 'Biên Hòa, Đồng Nai',
    SubDescription: 'Đồng Nai',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Dong Nai Golf Resort',
    Description: 'golf',
    Email: 'info@dongnaigolf.com',
    Mobile: '02513866288',
    IdentifyAddress: 'Trảng Bom Đồng Nai',
    SubDescription: 'Đồng Nai',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Taekwang Jeongsan Country Club',
    Description: 'golf',
    Email: 'info@taekwanggolf.vn',
    Mobile: '02513567888',
    IdentifyAddress: 'Nhơn Trạch, Đồng Nai',
    SubDescription: 'Đồng Nai',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Song Be Golf Resort',
    Description: 'golf',
    Email: 'info@songbegolf.com',
    Mobile: '02743755666',
    IdentifyAddress: 'Thủ Dầu Một, Bình Dương',
    SubDescription: 'Bình Dương',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Twin Doves Golf Club',
    Description: 'golf',
    Email: 'info@twindovesgolf.com',
    Mobile: '02743861999',
    IdentifyAddress: 'Thủ Dầu Một, Bình Dương',
    SubDescription: 'Bình Dương',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Harmonie Golf Park',
    Description: 'golf',
    Email: 'info@harmoniegolfpark.vn',
    Mobile: '02743799999',
    IdentifyAddress: 'Thủ Dầu Một, Bình Dương',
    SubDescription: 'Bình Dương',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Royal Island Golf Villas',
    Description: 'golf',
    Email: 'info@royalislandgolf.vn',
    Mobile: '02743637788',
    IdentifyAddress: 'Tân Uyên Bình Dương',
    SubDescription: 'Bình Dương',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vietnam Golf Country Club',
    Description: 'golf',
    Email: 'info@vietnamgolfcc.com',
    Mobile: '02837310888',
    IdentifyAddress: 'Thủ Đức, TP.HCM',
    SubDescription: ' TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Tan Son Nhat Golf Course',
    Description: 'golf',
    Email: 'info@tansonnhatgolf.vn',
    Mobile: '02862699999',
    IdentifyAddress: 'Tân Bình, TP.HCM',
    SubDescription: 'TP.HCM',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Vung Tau Paradise Golf',
    Description: 'golf',
    Email: 'info@vungtauparadisegolf.vn',
    Mobile: '02543858888',
    IdentifyAddress: 'Vũng Tàu, Bà Rịa - Vũng Tàu',
    SubDescription: 'Vũng Tàu',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Sonadezi Chau Duc Golf',
    Description: 'golf',
    Email: 'info@sonadezigolf.vn',
    Mobile: '02543966666',
    IdentifyAddress: 'Bà Rịa - Vũng Tàu',
    SubDescription: 'Vũng Tàu',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'West Lakes Golf Villa',
    Description: 'golf',
    Email: 'info@westlakesgolf.vn',
    Mobile: '02723777777',
    IdentifyAddress: 'Đức Hòa, Long An',
    SubDescription: 'Long An',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Royal Long An Golf Villas',
    Description: 'golf',
    Email: 'info@royallongan.com',
    Mobile: '02723888888',
    IdentifyAddress: 'Đức Huệ, Long An',
    SubDescription: 'Long An',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  },
  {
    Name: 'Eschuri Vung Bau Golf Resort',
    Description: 'golf',
    Email: 'info@eschurigolf.vn',
    Mobile: '02973777777',
    IdentifyAddress: 'Phú Quốc, Kiên Giang',
    SubDescription: 'Kiên Giang',
    CateId: [ '488f427c-8cfa-448e-bef9-5822893f22b9' ]
  }
]

export default data
