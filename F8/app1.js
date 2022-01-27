const $ = document.querySelector.bind(document)
var app = {
    songs: [{
            "name": "Đa Tình",
            "singer": "Quinn x Phong DN",
            "src": "./music/remixDaTinh.mp3",
            "img": "./img/DaTinh.webp",
            "id": 1
        },
        {
            "name": "Đêm Định Mệnh",
            "singer": "Minh Lý Remix",
            "src": "./music/remixDemDinhMenh.mp3",
            "img": "./img/DemDinhMenh.webp",
            "id": 2
        },
        {
            "name": "Em Là Hoàng Hôn",
            "singer": "Vang x Cloud 5",
            "src": "./music/remixEmLaHoangHon.mp3",
            "img": "./img/EmLaHoangHon.webp",
            "id": 3
        },
        {
            "name": "Happy New Year",
            "singer": "ABBA",
            "src": "./music/HappyNewYear.mp3",
            "img": "./img/HappyNewYear.webp",
            "id": 4
        },
        {
            "name": "In The End",
            "singer": "Linkin Park",
            "src": "./music/remixInTheEnd.mp3",
            "img": "./img/InTheEnd.webp",
            "id": 5
        },
        {
            "name": "Khi Anh Qua Thung Lũng",
            "singer": "Đạt G",
            "src": "./music/remixKhiAnhQuaThungLung.mp3",
            "img": "./img/KhiAnhQuaThungLung.webp",
            "id": 6
        },
        {
            "name": "Quên Một Người Từng Yêu",
            "singer": "Tú Na Cover",
            "src": "./music/remixQuenMotNguoiTungYeu.mp3",
            "img": "./img/QuenMotNguoiTungYeu.webp",
            "id": 7
        },
        {
            "name": "Xem Như Em Chẳng May",
            "singer": "Chu Thuý Quỳnh",
            "src": "./music/remixXemNhuEmChangMay.mp3",
            "img": "./img/XemNhuEmChangMay.webp",
            "id": 8
        },
        {
            "name": "Yêu Đừng Sợ Đau",
            "singer": "Ngô Lan Hương",
            "src": "./music/remixYeuDungSoDau.mp3",
            "img": "./img/YeuDungSoDau.webp",
            "id": 9
        }
    ],
    render: function() {
        var htmls = this.songs.map((list) =>
            `
            <div class="song">
                <div class="thumb" style="background-image: url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg')">
                </div>
                <div class="body">
                    <h3 class="title">Music name</h3>
                    <p class="author">Singer</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `

        )
        $('.playlist').innerHTML = htmls.join('')
    },
    start: function() {
        this.render()
    }
}
app.start()