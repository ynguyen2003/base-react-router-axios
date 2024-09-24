const Home = () => {
    return (
        <div className="home-container">
            <div>
                <b># Nested Routes</b><br />
                <div className="my-2">
                    Để share ‘dữ liệu HTML’ (phần dùng chung) giữa các Routes, chúng ta sử dụng component Outlet. Outlet cần được định nghĩa ở component Cha.
                    Từ đấy, khi render giao diện giữa các route con, phần component con sẽ được render vào phần Outlet đã định nghĩa.
                </div>
            </div><hr />
            <div className="mt-3">
                <span>
                    <b># Active Link - NavLink</b>
                    <br />
                    <div className="my-1">
                        NavLink có chức năng ‘giống hệt’ Link (giúp điều hướng trang), tuy nhiên, cung cấp thêm
                        công cụ để chúng ta CSS cho ‘active link’ - link chúng ta ‘đã click trước đó’.<br />
                        Hiểu đơn giản: NavLink = Link + CSS
                        Mặc định, khi user click vào 1 NavLink, thì ngay lập tức NavLink đó sẽ được ‘add - thêm
                        vào’ class có tên là ‘active
                    </div>
                </span>
            </div><hr />
            <div className="mt-3">
                <b># Index Routes</b>
                <br />
                <div className="my-1">
                    Index routes không có thuộc tính ‘path’, vì đơn giản, nó dùng lại path của parent. Thay vào đó, nó cần props ‘index’

                    Index routes sẽ được gọi tới, khi tất cả ‘route con’ còn lại không match, thì nó sẽ được dùng.
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <b># React Axios</b>
                <br />
                <div className="my-1">
                    Axios là một HTTP client được viết dựa trên Promises được dùng để hỗ trợ cho việc xây dựng các ứng dụng API
                    từ đơn giản đến phức tạp và có thể được sử dụng cả ở trình duyệt hay Node.js.
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <b># Đặc điểm Axios</b>
                <br />
                <div className="my-1">
                    <ul>
                        <li>Tạo XMLHttpRequests từ trình duyệt</li>
                        <li>Thực hiện các http request từ node.js</li>
                        <li>Hỗ trợ Promise API</li>
                        <li>Chặn request và response</li>
                        <li>Chuyển đổi dữ liệu request và response</li>
                        <li>Hủy requests</li>
                        <li>Tự động chuyển đổi về dữ liệu JSON</li>
                        <li>Hỗ trợ phía client để chống lại XSRF</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <b># Axios Instance</b>
                <br />
                <div className="my-1">
                    Giúp tạo một base url cố định tránh việc lặp lại việc kêu gọi http
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <b># Axios Interceptors</b>
                <br />
                <div className="my-1">
                    Interceptors: là một chức năng giúp chúng ta có thể can thiệp vào trước lúc mọi request được gửi đi và mọi response được nhận về,
                    thông qua đó xử lý các bài toán tổng quan thường xảy ra.
                    <ul>
                        <li>Đính kèm token xác thực</li>
                        <li>Xử lý refresh token nếu response trả về lỗi (thông thường mã lỗi là 401)</li>
                        <li>Biến đổi dữ liệu response về theo định dạng chung</li>
                        <li>Cancel request nếu cần thiết</li>
                    </ul>
                    <ul>
                        <b>Có 2 loại Interceptors</b>
                        <li>Request Interceptors: cho phép chúng ta can thiệp vào trước mọi request được gửi đi</li>
                        <li>Response Interceptors: cho phép chúng ta can thiệp vào trước mọi response được nhận về</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <b># Một request với Axios</b>
                <br />
                <div className="my-1">
                    <ul>
                        <li>GET Requests</li>
                        <li>POST Requests</li>
                        <li>PUT Requests</li>
                        <li>DELETE Requests</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home