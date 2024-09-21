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