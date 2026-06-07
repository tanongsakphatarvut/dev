// โค้ดเสกเครดิตผู้พัฒนาลงหน้าเว็บคลังสื่อ (ปรับลดช่องว่างแบบแนบสนิท)
document.addEventListener("DOMContentLoaded", function() {
    var creditHtml = `
    <div class="text-center mt-1">
        <p class="mb-0 small fw-bold footer-text" style="color: #6c757d;">
            <i class="fa-solid fa-code text-primary me-1"></i> Developed with <i class="fa-solid fa-heart text-danger mx-1" style="animation: heartbeat 1.5s infinite;"></i> by 
            <span class="text-dark">ครูทนงศักดิ์ เพชรอาวุธ</span> <span class="mx-1 text-muted">x</span> <span class="text-primary">หมอจีPro (AI)</span>
        </p>
        <p class="small text-muted mt-0 mb-0" style="font-size: 0.75rem;">
            ระบบคลังสื่อการสอนเพื่อการศึกษา (Open Source for Education)
        </p>
    </div>
    <style>
        @keyframes heartbeat { 0% { transform: scale(1); } 15% { transform: scale(1.3); } 30% { transform: scale(1); } 45% { transform: scale(1.3); } 60% { transform: scale(1); } 100% { transform: scale(1); } }
    </style>
    `;

    // ค้นหากล่องเป้าหมายและยัดข้อความลงไป
    var targetDiv = document.getElementById('system-credit');
    if(targetDiv) {
        targetDiv.innerHTML = creditHtml;
    }
});
