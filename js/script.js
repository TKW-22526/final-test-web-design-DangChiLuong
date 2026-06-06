
//Chi tiết sản phẩm 

    // Danh sách sản phẩm — thêm sản phẩm mới vào đây
    const sanPham = [
        {
            id: 1,
            ten: "Cặp đôi ăn ý",
            gia: "145.000đ",
            hinh: "../assets/CB145.webp",
            moTa: "Combo với 2 gà giòn vui vẻ + 2 mỳ ý Jolly vừa + 2 pepsi vừa + 1 khoai tây vừa.",
        },

        {
            id: 2,
            ten: "Combo cả nhà no nê",
            gia: "185.000đ",
            hinh: "../assets/CB185.jpg",
            moTa: "Combo với 3 gà giòn vui vẻ + 2 mỳ ý Jolly vừa + 3 pepsi vừa + 1 khoai tây vừa.",
        },

        {
            id: 3,
            ten: "Combo một mình vẫn ngon",
            gia: "78.000đ",
            hinh: "../assets/78.000.jpg",
            moTa: "Combo với 1 gà giòn vui vẻ + 1 mỳ ý Jolly vừa + 1 pepsi vừa",
        },

        {
            id: 4,
            ten: "Già giòn vui vẻ",
            gia: "33.000đ",
            hinh: "../assets/Chickenjoy.webp",
            moTa: "Với 1 miếng gà được chiên giòn, có màu vàng tươi, với lớp vỏ bột chắc xù và giòn.",
        },

        {
            id: 5,
            ten: "Cơm gà",
            gia: "48.000đ",
            hinh: "../assets/Comga.webp",
            moTa: "Với 1 miếng gà với cơm trắng kèm theo là xà lách + dưa leo và cà chua tạo nên hương vị hòa nguyện không gây ngấy.",
        },

        {
            id: 6,
            ten: "Mỳ ý sốt cay (NEW)",
            gia: "40.000đ",
            hinh: "../assets/MiYCay.jpg",
            moTa: "Mì ý với hương vị mì ý đặc trưng kết hợp với hương vị sốt cay đặc trưng có hương vị của sa tế kết hợp hài hòa của thịt xông khói và hương vị mặn béo của phô mai.",
        },

        {
            id: 7,
            ten: "Bugger Tôm",
            gia: "40.000đ",
            hinh: "../assets/ShrimBugger.webp",
            moTa: "Với miếng tôm được chiên nóng, giòn hương vị tôm đặc trưng, kết hợp với rau xà lách và các loại sốt đặc trưng, mang hương vị hài hòa.",
        },

        {
            id: 8,
            ten: "Khoai tây chiên giòn",
            gia: "20.000đ",
            hinh: "../assets/KhoaiTay.jpg",
            moTa: "Khaoi tây chiên có hương vị khoai tây đặc trưng, có vị mặn và có màu vàng tươi.",
        },

          {
            id: 9,
            ten: "Mỳ ý sốt bò bằm",
            gia: "35.000đ",
            hinh: "../assets/MyY.jpg",
            moTa: "Mì ý với hương vị mì ý đặc trưng kết hợp với hương vị ngot, chua của cà chua, kết hợp hài hòa của xúc xích và hương vị mặn, béo của phô mai.",
        },
    ];

    // Đọc id từ URL: chi-tiet.html?id=1
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    // Tìm sản phẩm có id tương ứng
    const sp = sanPham.find(sp => sp.id === id);

    const khung = document.getElementById("chi-tiet");

    if (sp) {
        // Tìm thấy → hiển thị chi tiết
        khung.innerHTML = `
            <div class="col-md-6">
                <img src="${sp.hinh}" class="img-fluid rounded shadow" alt="${sp.ten}">
            </div>
            <div class="col-md-6">
                <h2>${sp.ten}</h2>
                <p class="text-danger fs-4 fw-bold">${sp.gia}</p>
                <p>${sp.moTa}</p>
                <hr>
            </div>
        `;
    } else {
        // Không tìm thấy → báo lỗi
        khung.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">Không tìm thấy sản phẩm!</div>
            </div>
        `;
    }

