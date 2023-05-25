# Routes

- index routes -> index.tsx
- nested routes -> /blog/blog-details
- dynamic routes -> /property/1, /hanh-trinh-co-thu-nhap-cao, /blog/how-to-learn-javascript
- dynamic routes -> /blog/[id], /blog/[slug]
- [...slug] -> /abc-land/xyz-land, /abc-city
- /post/create.tsx -> ưu tiên hơn
- /post/[slug].tsx -> /post/create
- /user/admin/settings
- /user/[username]/settings

# next/image

- Nên sử dụng next/image để hình ảnh được tối ưu
- Thuộc tính `fill` và `width` `height` không được sử dụng chung với nhau
- Khi sử dụng thuộc tính `fill` thì phần tử cha nên là `relative` `absolute` hoặc `fixed` tùy vào trường hợp cụ thể
- Khi sử dụng static image import thì không cần phải dùng thêm thuộc tính `width` `height` bởi vì static image import có interface là StaticImageData(src, width, height)
- Nên sử dụng thêm thuộc tính `sizes` để có thể xác định các kích thước của hình ảnh khác nhau tùy thuộc vào màn hình
- quality: Chất lượng hình ảnh, mặc định là 75
- priority: true -> dùng cho những tấm ảnh nằm trong viewport, khi sử dụng priority thì sẽ không sử dụng được loading="lazy"
- Thêm loading="lazy" vào những tấm ảnh sẽ xuất hiện ở ngoài viewport, giúp trang web giảm tải việc load những tấm ảnh không cần thiết
- Khi sử dụng placeholder="blur" thì static image import đã có sẵn, tuy nhiên đối với remote images thì phải tự xử lý thuộc tính blurDataURL với thư viện được next giới thiệu là plaiceholder

# Fetching

## getStaticProps:

- Sử dụng getStaticProps khi bạn muốn trang được tạo tĩnh (statically generated) tại thời điểm build và dữ liệu không thay đổi thường xuyên.
  Phương thức này chỉ chạy trong quá trình build và không chạy trên phía máy chủ.
- Khi trang được tạo tĩnh, nó được cache và tái sử dụng cho tất cả các yêu cầu từ client.
- getStaticProps trả về dữ liệu cho trang dưới dạng props, mà sau đó có thể được truyền vào thành phần của trang để render.
- Thích hợp cho các trang nội dung tĩnh hoặc trang dự báo không thay đổi thường xuyên, ví dụ như trang sản phẩm, trang blog, trang giới thiệu.

## getServerSideProps:

- Sử dụng getServerSideProps khi bạn muốn phục vụ trang với dữ liệu được tạo động (dynamic) trên mỗi yêu cầu.
- Phương thức này chạy trên phía máy chủ mỗi khi có một yêu cầu từ client.
- Dữ liệu được lấy trong getServerSideProps được gửi trực tiếp từ máy chủ đến client mà không thông qua quá trình build hoặc caching.
- getServerSideProps trả về dữ liệu cho trang dưới dạng props, mà sau đó có thể được truyền vào thành phần của trang để render.
- Thích hợp cho các trang có nội dung thay đổi thường xuyên hoặc yêu cầu dữ liệu động, ví dụ như trang đăng nhập, trang tìm kiếm.

-Tóm lại, bạn nên sử dụng getStaticProps cho các trang tĩnh và dữ liệu ít thay đổi, trong khi getServerSideProps nên được sử dụng cho các trang động và dữ liệu thay đổi thường xuyên.
