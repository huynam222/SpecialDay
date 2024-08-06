// script.js
document.getElementById('password').addEventListener('click', () => {
    const audio = document.getElementById('happy-birthday-audio');
    audio.play(); // Phát bài hát khi nhấp vào trường nhập mật khẩu
});

function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const correctPassword = '07'; // Đặt mật khẩu bí mật ở đây

    if (enteredPassword === correctPassword) {
        document.getElementById('gift-section').style.display = 'none';
        document.getElementById('message-section').style.display = 'block';
        setTimeout(() => {
            document.getElementById('gift-closed').style.display = 'none';
            document.getElementById('gift-open').style.display = 'none'; // Ẩn GIF khi video phát
            document.getElementById('letter').style.display = 'none';
        }, 3000); // Thay đổi thời gian nếu cần

        // Hiển thị video sau khi mở quà
        setTimeout(() => {
            const videoContainer = document.getElementById('video-container');
            videoContainer.style.display = 'block';
            const video = document.getElementById('birthday-video');
            video.play(); // Đảm bảo video tự động phát

            video.onended = () => {
                // Thoát chế độ toàn màn hình nếu đang trong chế độ này
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }

                // Hiển thị GIF mở quà và thư chúc mừng sinh nhật
                videoContainer.style.display = 'none';
                document.getElementById('gift-open').style.display = 'block'; // Hiển thị GIF mở quà
                document.getElementById('letter').style.display = 'block'; // Hiển thị thư chúc mừng sinh nhật
                typeWriter();
            };

            // Yêu cầu video phát toàn màn hình
            video.requestFullscreen().catch(err => {
                console.log("Fullscreen request failed: ", err);
            });
        }, 1000); // Thay đổi thời gian nếu cần
    } else {
        alert('Mật khẩu là ngày hôm nay!');
    }
}

function typeWriter() {
    const text = `Hôm nay là một ngày rất đặc biệt, ngày của một cô gái thật sự xinh đẹp và duyên dáng! Thật vui khi được quen biết em, một người không chỉ xinh đẹp mà còn thông minh, tài năng. Nụ cười của em, đặc biệt là má núm đồng tiền. Đó là một phần đặc trưng của em mà anh cực ấn tượng. Trong ngày đặc biệt này, anh chúc em tất cả những điều tốt đẹp nhất. Mong rằng em sẽ luôn khỏe mạnh, hạnh phúc và thành công trên mọi con đường mà em chọn. Đừng bao giờ ngừng mơ ước và hãy tiếp tục theo đuổi đam mê của mình. Anh hy vọng em sẽ có một ngày sinh nhật đáng nhớ, đầy ắp tiếng cười và tình yêu. Hãy tận hưởng từng khoảnh khắc của ngày hôm nay, vì nó hoàn toàn thuộc về em!
Chúc mừng sinh nhật, Lương! 🎂`;

    const messageElement = document.getElementById('message');
    let index = 0;

    function type() {
        if (index < text.length) {
            messageElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 30); // Thay đổi tốc độ gõ chữ tại đây
        } else {
            // Hiệu ứng chữ biến mất sau khi hoàn tất
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 2000); // Thay đổi thời gian biến mất nếu cần
        }
    }

    type();
}
