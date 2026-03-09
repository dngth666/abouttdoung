// ==========================================
// MUSIC MODULE - Background Music Toggle
// ==========================================

export function initializeMusicPlayer() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    if (bgMusic && musicToggle) {
        // Thiết lập âm lượng mặc định
        bgMusic.volume = 0.5;

        // Xử lý sự kiện click
        musicToggle.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                musicToggle.classList.remove('playing');
                musicToggle.setAttribute('title', 'Phát nhạc nền');
            } else {
                bgMusic.play().catch(error => {
                    console.log('Audio play failed:', error);
                    alert("Không thể phát nhạc. Vui lòng kiểm tra file nhạc (assets/musics/background-music.mp3) đã tồn tại chưa.");
                });
                musicToggle.classList.add('playing');
                musicToggle.setAttribute('title', 'Tạm dừng');
            }
            isPlaying = !isPlaying;
        });

        // Tự động tắt nút animate nếu nhạc bị kết thúc bất thường
        bgMusic.addEventListener('ended', () => {
            if(!bgMusic.loop) {
                isPlaying = false;
                musicToggle.classList.remove('playing');
                musicToggle.setAttribute('title', 'Phát nhạc nền');
            }
        });
    }
}
