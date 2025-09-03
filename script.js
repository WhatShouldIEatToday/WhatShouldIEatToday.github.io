document.addEventListener('DOMContentLoaded', () => {
    // ปรับโครงสร้างข้อมูลใหม่ โดยเพิ่ม subcategory
    const foodData = {
        'fast-food': [
            { name: 'เบอร์เกอร์', subcategory: 'general' },
            { name: 'พิซซ่า', subcategory: 'general' },
            { name: 'ไก่ทอด', subcategory: 'general' },
            { name: 'ข้าวผัดกะเพรา', subcategory: 'rice' },
            { name: 'ข้าวผัดคะน้าหมูกรอบ', subcategory: 'rice' },
            { name: 'ข้าวราดแกง', subcategory: 'rice' },
            { name: 'ข้าวผัด', subcategory: 'rice' },
            { name: 'ข้าวไข่เจียว', subcategory: 'rice' },
            { name: 'ข้าวหมูกระเทียม', subcategory: 'rice' },
            { name: 'ข้าวมันไก่', subcategory: 'rice' },
            { name: 'ข้าวขาหมู', subcategory: 'rice' },
            { name: 'ข้าวหมูแดง', subcategory: 'rice' },
            { name: 'ข้าวหน้าเป็ด', subcategory: 'rice' },
            { name: 'ข้าวหมกไก่', subcategory: 'rice' },
            { name: 'ข้าวคลุกกะปิ', subcategory: 'rice' },
            { name: 'ก๋วยเตี๋ยว', subcategory: 'noodles' },
            { name: 'ราดหน้า', subcategory: 'noodles' },
            { name: 'ผัดซีอิ๊ว', subcategory: 'noodles' },
            { name: 'ผัดไทย', subcategory: 'noodles' },
            { name: 'ขนมจีนน้ำยา', subcategory: 'noodles' },
            { name: 'บะหมี่เกี๊ยว', subcategory: 'noodles' },
            { name: 'สปาเกตตี', subcategory: 'noodles' },
            { name: 'มาม่าผัด', subcategory: 'noodles' },
            { name: 'ข้าวซอย', subcategory: 'noodles' },
            { name: 'ราเมน', subcategory: 'noodles' },
            { name: 'พาสต้า', subcategory: 'noodles' },
            { name: 'ต้มยำ', subcategory: 'general' },
            { name: 'เล้ง', subcategory: 'general' },
            { name: 'ยำ', subcategory: 'general' },
            { name: 'หอยทอด', subcategory: 'general' },
            { name: 'ลาบ', subcategory: 'general' },
            { name: 'ส้มตำ', subcategory: 'general' },
            { name: 'สเต๊ก', subcategory: 'general' },
            { name: 'ไก่ย่าง', subcategory: 'general' },
            { name: 'คอหมูย่าง', subcategory: 'general' },
        ],
        'healthy': [
            { name: 'สลัดผักอกไก่', subcategory: 'general' },
            { name: 'ข้าวกล้องกับปลาเผา', subcategory: 'rice' },
            { name: 'แกงส้มผักรวม', subcategory: 'general' },
            { name: 'ซุปผัก', subcategory: 'general' },
            { name: 'ข้าวอกไก่ย่างกับข้าวไรซ์เบอร์รี่', subcategory: 'rice' },
            { name: 'ข้าวต้มปลา', subcategory: 'rice' },
            { name: 'สลัดโรลอกไก่', subcategory: 'general' },
            { name: 'ปลานึ่งซีอิ๊ว', subcategory: 'general' },
            { name: 'ต้มจืดเต้าหู้หมูสับ', subcategory: 'general' },
            { name: 'ยำอกไก่ย่าง', subcategory: 'general' },
            { name: 'ไข่ต้ม', subcategory: 'general' },
            { name: 'ผัดวุ้นเส้น', subcategory: 'noodles' },
            { name: 'ยำเส้นแก้วใส่เห็ด', subcategory: 'noodles' },
        ],
        'vegetarian': [
            { name: 'ผัดผักรวมมิตร', subcategory: 'general' },
            { name: 'เต้าหู้ทอดราดซอส', subcategory: 'general' },
            { name: 'แกงเขียวหวานมังสวิรัติ', subcategory: 'general' },
            { name: 'ลาบเห็ด', subcategory: 'general' },
            { name: 'สปาเก็ตตี้ซอสมะเขือเทศ', subcategory: 'noodles' },
            { name: 'สลัดผักรวม', subcategory: 'general' },
            { name: 'ข้าวผัดผัก', subcategory: 'rice' },
            { name: 'ต้มยำเห็ด', subcategory: 'general' },
            { name: 'ขนมจีนน้ำยามังสวิรัติ', subcategory: 'noodles' },
            { name: 'กะเพราเห็ดราดข้าว', subcategory: 'rice' },
        ]
    };

    // อ้างอิงถึงส่วนต่างๆ ใน HTML
    const mainControls = document.getElementById('main-controls'); // เปลี่ยนเป็นอ้างอิง div โดยตรง
    const mainButtons = document.querySelectorAll('#main-controls .food-button');
    const subcategoryControls = document.getElementById('subcategory-controls');
    const subButtons = document.querySelectorAll('.sub-button');
    const returnButton = document.getElementById('return-button'); // อ้างอิงปุ่มย้อนกลับ
    const resultTitle = document.getElementById('result-title');
    const resultFood = document.getElementById('result-food');

    let currentMainCategory = null;

    // ฟังก์ชันสำหรับสุ่มเมนูที่ปรับปรุงใหม่
    function getRandomFood(mainCategory, subCategory) {
        let foodList = foodData[mainCategory];

        // กรองรายการอาหารตามประเภทย่อย
        let filteredList;
        if (subCategory === 'all') {
            filteredList = foodList;
        } else {
            filteredList = foodList.filter(food => food.subcategory === subCategory);
        }

        // ตรวจสอบว่ามีรายการอาหารในประเภทที่เลือกหรือไม่
        if (filteredList.length === 0) {
            return 'ไม่พบเมนูในประเภทนี้';
        }

        const randomIndex = Math.floor(Math.random() * filteredList.length);
        return filteredList[randomIndex].name; // คืนค่าเฉพาะชื่ออาหาร
    }

    // ฟังก์ชันสำหรับรีเซ็ตหน้าจอไปสถานะเริ่มต้น
    function resetToInitialState() {
        mainControls.style.display = 'flex'; // แสดงปุ่มหลัก
        subcategoryControls.style.display = 'none'; // ซ่อนปุ่มย่อย
        currentMainCategory = null; // รีเซ็ตประเภทหลักที่เลือก
        resultTitle.textContent = 'เลือกประเภทอาหารที่คุณชอบ';
        resultFood.textContent = 'แล้วเมนูจะปรากฏที่นี่';
    }

    // เพิ่ม event listener ให้กับปุ่มหลัก
    mainButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentMainCategory = event.target.dataset.type; // เก็บประเภทหลักที่เลือก
            mainControls.style.display = 'none'; // ซ่อนปุ่มหลัก
            subcategoryControls.style.display = 'flex'; // แสดงปุ่มประเภทย่อย

            // อัปเดตข้อความเพื่อบอกให้ผู้ใช้เลือกต่อ
            resultTitle.textContent = 'ยอดเยี่ยม! ทีนี้เลือกประเภทย่อย';
            resultFood.textContent = '...';
        });
    });

    // เพิ่ม event listener ให้กับปุ่มประเภทย่อย
    subButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!currentMainCategory) return; // ป้องกันการคลิกก่อนเลือกประเภทหลัก

            const subType = event.target.dataset.subtype; // ดึงค่าจาก data-subtype
            const randomFood = getRandomFood(currentMainCategory, subType);

            // แสดงผลลัพธ์
            resultTitle.textContent = 'เมนูที่แนะนำสำหรับคุณคือ:';
            resultFood.textContent = randomFood;
        });
    });

    // เพิ่ม event listener ให้กับปุ่มย้อนกลับ
    returnButton.addEventListener('click', () => {
        resetToInitialState();
    });

    // เรียกใช้ resetToInitialState เมื่อโหลดหน้าครั้งแรก
    resetToInitialState();
});