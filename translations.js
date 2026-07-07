// 임시 고정 환율 (나중에 실시간 API 연동 예정)
const exchangeRates = { USD: 0.00073, JPY: 0.108, CNY: 0.0053 };

const translations = {
  ko: {
    // 네비게이션
    "nav.hotel": "호텔소개",
    "nav.rooms": "객실예약",
    "nav.gallery": "갤러리",
    "nav.nearby": "주변안내",
    // 헤더
    "header.reviews": "1446개의 리뷰",
    // 예약바
    "booking.date_label": "날짜",
    "booking.date_select": "날짜 선택",
    "booking.guest_label": "객실 & 투숙객",
    "booking.guest_default": "1 객실, 1 성인",
    "booking.price_label": "객실선택 & 특별요금",
    "booking.price_select": "최저 요금선택",
    "booking.btn": "예약하기",
    "booking.calendar_done": "완료",
    "booking.guest_done": "완료",
    "booking.room": "객실",
    "booking.adult": "성인",
    // 모바일 예약 패널
    "mob.book_trigger": "예약하기",
    "mob.confirm": "예약하기",
    // 섹션 타이틀
    "intro.welcome": "인스타 호텔 본점에서 소중한 추억을 만들어보세요.",
    "intro.title": "수원에서 만나는 감각적인 호텔 인스타 본점",
    "intro.more": "더보기",
    "intro.less": "접기",
    "rooms.title": "객실 & 스테이",
    // 객실카드
    "room.detail": "자세히 보기",
    "room.book": "요금 조회",
    "room.notice": "공휴일·성수기 요금 별도 적용",
    "room.price_note": "실제 청구 금액은 결제 시점 환율에 따라 달라질 수 있습니다",
    // 객실명
    "room.economy": "이코노미 룸",
    "room.standard": "스탠다드 룸",
    "room.standard.badge": "(디자인 랜덤배정)",
    "room.deluxe": "디럭스 룸",
    "room.deluxe.badge": "(디자인 랜덤배정)",
    "room.twin": "트윈 룸",
    "room.special": "스페셜",
    "room.ruby": "루비룸 (애견동반)",
    // 객실 부가정보
    "room.economy.sub": "기준 2인 / 최대 2인 · 퀸 침대 1개",
    "room.standard.sub": "기준 2인 / 최대 2인 · 퀸 침대 1개",
    "room.deluxe.sub": "기준 2인 / 최대 2인 · 퀸 침대 1개",
    "room.twin.sub": "기준 2인 / 최대 3인 무료 · 퀸 침대 1개 / 싱글 침대 1개",
    "room.special.sub": "기준 2인 / 최대 4인 무료 · 퀸 침대 1개 / 싱글 침대 2개",
    "room.ruby.sub": "기준 2인 / 최대 2인 · 퀸 침대 1개",
    // 시설 섹션
    "fac.title": "호텔 시설 및 서비스",
    "fac.tab.room": "객실 편의 시설",
    "fac.tab.hotel": "호텔 및 부대 서비스",
    "fac.tab.sec": "보안 및 일반 정보",
    "fac.photo_hint": "항목을 클릭하면 사진을 확인할 수 있습니다",
    // 위치 섹션
    "loc.subtitle": "호텔 위치",
    "loc.title": "오시는 길",
    // 푸터
    "footer.follow": "팔로우하기 인스타 호텔",
    // 요금 날짜 레이블
    "price.weekday": "(일~목)",
    "price.fri": "(금)",
    "price.sat": "(토)",
    "ways.title": "호텔 투숙을 즐기는 다양한 방법",
    "booking.checkout_select": "체크아웃 선택",
    "room.ruby.modal.sub": "기준 2인 / 최대 2인 · 퀸 침대 1개 · 애견동반 가능",
    "fac.col.욕실": "욕실",
    "fac.col.어메니티": "어메니티",
    "fac.col.객실": "객실",
    "fac.col.공용 편의 시설": "공용 편의 시설",
    "fac.col.스트리밍 · 고사양 컴퓨터": "스트리밍 · 고사양 컴퓨터",
    "fac.col.스트리밍": "스트리밍",
    "fac.col.이용안내": "이용안내",
    "fac.col.식음료": "식음료",
    "fac.col.인터넷": "인터넷",
    "fac.col.주차": "주차",
    "fac.col.리셉션 서비스": "리셉션 서비스",
    "fac.col.보안": "보안",
    "fac.col.일반": "일반",
    "fac.col.반려동물": "반려동물",
    "fac.item.최고급 비데 일체형 양변기": "최고급 비데 일체형 양변기",
    "fac.item.골드 대형거울": "골드 대형거울",
    "fac.item.고급 골드 샤워기": "고급 골드 샤워기",
    "fac.item.고급 골드 세면대": "고급 골드 세면대",
    "fac.item.고급 골드 휴지걸이": "고급 골드 휴지걸이",
    "fac.item.욕조": "욕조",
    "fac.item.욕조 (랜덤배정, 요청시 배정)": "욕조 (랜덤배정, 요청시 배정)",
    "fac.item.욕실 환풍기": "욕실 환풍기",
    "fac.item.욕실 슬리퍼": "욕실 슬리퍼",
    "fac.item.전용 욕실": "전용 욕실",
    "fac.item.칫솔 / 치약": "칫솔 / 치약",
    "fac.item.폼클렌징": "폼클렌징",
    "fac.item.레이디셋": "레이디셋",
    "fac.item.면도기": "면도기",
    "fac.item.샴푸 / 컨디셔너 / 바디워시": "샴푸 / 컨디셔너 / 바디워시",
    "fac.item.LG 천정형 에어컨 / 난방": "LG 천정형 에어컨 / 난방",
    "fac.item.무소음 냉장고": "무소음 냉장고",
    "fac.item.공기청정기": "공기청정기",
    "fac.item.전기 주전자": "전기 주전자",
    "fac.item.헤어드라이기 / 고데기": "헤어드라이기 / 고데기",
    "fac.item.고급 원형테이블 / 의자": "고급 원형테이블 / 의자",
    "fac.item.골드 원형거울": "골드 원형거울",
    "fac.item.65인치 TV": "65인치 TV",
    "fac.item.객실 환풍기": "객실 환풍기",
    "fac.item.침대 옆 콘센트 / 핸드폰충전기": "침대 옆 콘센트 / 핸드폰충전기",
    "fac.item.최고급 매트리스 / 린넨": "최고급 매트리스 / 린넨",
    "fac.item.타월": "타월",
    "fac.item.화장품 (여성/남성용 스킨·로션)": "화장품 (여성/남성용 스킨·로션)",
    "fac.item.객실 가운": "객실 가운",
    "fac.item.빗 / 옷걸이 / 슬리퍼": "빗 / 옷걸이 / 슬리퍼",
    "fac.item.금연 / 방음 객실": "금연 / 방음 객실",
    "fac.item.전자레인지": "전자레인지",
    "fac.item.정수기": "정수기",
    "fac.item.제빙기": "제빙기",
    "fac.item.커피머신": "커피머신",
    "fac.item.무료 생수": "무료 생수",
    "fac.item.추가 무료 타월 / 휴지": "추가 무료 타월 / 휴지",
    "fac.item.일회용 젓가락 / 수저": "일회용 젓가락 / 수저",
    "fac.item.키오스크": "키오스크",
    "fac.item.넷플릭스 / 디즈니+ / 티빙 (전 객실 무료시청)": "넷플릭스 / 디즈니+ / 티빙 (전 객실 무료시청)",
    "fac.item.애플TV+ / 유튜브 (전 객실 무료시청)": "애플TV+ / 유튜브 (전 객실 무료시청)",
    "fac.item.고사양 PC (GeForce 3060, RAM 16GB)": "고사양 PC (GeForce 3060, RAM 16GB)",
    "fac.item.게이밍 모니터 (32인치 165Hz LED)": "게이밍 모니터 (32인치 165Hz LED)",
    "fac.item.게이밍 LED 키보드": "게이밍 LED 키보드",
    "fac.item.체크인 : 15:00": "체크인 : 15:00",
    "fac.item.체크아웃 : 12:00": "체크아웃 : 12:00",
    "fac.item.전용 체크인/체크아웃": "전용 체크인/체크아웃",
    "fac.item.24시간 프런트 데스크": "24시간 프런트 데스크",
    "fac.item.하우스키핑 (매일)": "하우스키핑 (매일)",
    "fac.item.모닝콜 서비스": "모닝콜 서비스",
    "fac.item.객실 내 조식 서비스": "객실 내 조식 서비스",
    "fac.item.룸서비스 (조식)": "룸서비스 (조식)",
    "fac.item.Wi-Fi 호텔 전 구역에서 무료": "Wi-Fi 호텔 전 구역에서 무료",
    "fac.item.객실 내 개별 무료 초고속 Wi-Fi": "객실 내 개별 무료 초고속 Wi-Fi",
    "fac.item.호텔 내 전용 주차장 무료 (사전 예약 불필요)": "호텔 내 전용 주차장 무료 (사전 예약 불필요)",
    "fac.item.청구서(인보이스) 제공 숙소": "청구서(인보이스) 제공 숙소",
    "fac.item.소화기": "소화기",
    "fac.item.숙소 외부 CCTV": "숙소 외부 CCTV",
    "fac.item.공용 공간 CCTV": "공용 공간 CCTV",
    "fac.item.화재 경보": "화재 경보",
    "fac.item.보안 알람": "보안 알람",
    "fac.item.카드키 출입": "카드키 출입",
    "fac.item.24시간 보안": "24시간 보안",
    "fac.item.호텔 앞 24시간 편의점 / 마트": "호텔 앞 24시간 편의점 / 마트",
    "fac.item.호텔 앞 병원": "호텔 앞 병원",
    "fac.item.호텔 앞 24시간 빨래방": "호텔 앞 24시간 빨래방",
    "fac.item.호텔 앞 24시간 식당": "호텔 앞 24시간 식당",
    "fac.item.일부 흡연 구역": "일부 흡연 구역",
    "fac.item.엘리베이터": "엘리베이터",
    "fac.item.루비룸 (애견동반 가능 객실)": "루비룸 (애견동반 가능 객실)",
    "fac.item.소형견·중형견(10kg) 입실 가능": "소형견·중형견(10kg) 입실 가능",
    "fac.item.외출 시 반려견 동반 필수": "외출 시 반려견 동반 필수",
    "fac.item.로비·복도 이동 시 케이지 이용": "로비·복도 이동 시 케이지 이용",
  },
  en: {
    "nav.hotel": "About Hotel",
    "nav.rooms": "Rooms",
    "nav.gallery": "Gallery",
    "nav.nearby": "Nearby",
    "header.reviews": "1,446 Reviews",
    "booking.date_label": "Date",
    "booking.date_select": "Select Date",
    "booking.guest_label": "Rooms & Guests",
    "booking.guest_default": "1 Room, 1 Adult",
    "booking.price_label": "Room & Special Rate",
    "booking.price_select": "View Lowest Rate",
    "booking.btn": "Book Now",
    "booking.calendar_done": "Done",
    "booking.guest_done": "Done",
    "booking.room": "Room",
    "booking.adult": "Adult",
    "mob.book_trigger": "Book Now",
    "mob.confirm": "Book Now",
    "intro.welcome": "Create precious memories at INSTA Hotel.",
    "intro.title": "INSTA Hotel — A Sensational Stay in Suwon",
    "intro.more": "Read more",
    "intro.less": "Collapse",
    "rooms.title": "Rooms & Stays",
    "room.detail": "View Details",
    "room.book": "Check Rates",
    "room.notice": "Holiday & peak season rates apply separately",
    "room.price_note": "The final charged amount may vary based on the exchange rate at checkout.",
    "room.economy": "Economy Room",
    "room.standard": "Standard Room",
    "room.standard.badge": "(Random Design Assignment)",
    "room.deluxe": "Deluxe Room",
    "room.deluxe.badge": "(Random Design Assignment)",
    "room.twin": "Twin Room",
    "room.special": "Special",
    "room.ruby": "Ruby Room (Pet-Friendly)",
    "room.economy.sub": "2 guests standard / Max 2 · 1 Queen Bed",
    "room.standard.sub": "2 guests standard / Max 2 · 1 Queen Bed",
    "room.deluxe.sub": "2 guests standard / Max 2 · 1 Queen Bed",
    "room.twin.sub": "2 guests standard / Max 3 free · 1 Queen + 1 Single Bed",
    "room.special.sub": "2 guests standard / Max 4 free · 1 Queen + 2 Single Beds",
    "room.ruby.sub": "2 guests standard / Max 2 · 1 Queen Bed",
    "fac.title": "Hotel Facilities & Services",
    "fac.tab.room": "In-Room Amenities",
    "fac.tab.hotel": "Hotel & Additional Services",
    "fac.tab.sec": "Security & General Info",
    "fac.photo_hint": "Click an item to view photos",
    "loc.subtitle": "Hotel Location",
    "loc.title": "Getting Here",
    "footer.follow": "Follow INSTA Hotel",
    "price.weekday": "(Sun–Thu)",
    "price.fri": "(Fri)",
    "price.sat": "(Sat)",
    "ways.title": "Ways to Enjoy Your Hotel Stay",
    "booking.checkout_select": "Select checkout",
    "room.ruby.modal.sub": "2 guests standard / Max 2 · 1 Queen Bed · Pets Welcome",
    "fac.col.욕실": "Bathroom",
    "fac.col.어메니티": "Amenities",
    "fac.col.객실": "In-Room",
    "fac.col.공용 편의 시설": "Common Facilities",
    "fac.col.스트리밍 · 고사양 컴퓨터": "Streaming & Gaming PC",
    "fac.col.스트리밍": "Streaming",
    "fac.col.이용안내": "Hotel Information",
    "fac.col.식음료": "Food & Beverage",
    "fac.col.인터넷": "Internet",
    "fac.col.주차": "Parking",
    "fac.col.리셉션 서비스": "Reception Services",
    "fac.col.보안": "Security",
    "fac.col.일반": "General",
    "fac.col.반려동물": "Pets",
    "fac.item.최고급 비데 일체형 양변기": "Premium Integrated Bidet Toilet",
    "fac.item.골드 대형거울": "Large Gold Mirror",
    "fac.item.고급 골드 샤워기": "Premium Gold Shower",
    "fac.item.고급 골드 세면대": "Premium Gold Vanity",
    "fac.item.고급 골드 휴지걸이": "Premium Gold Toilet Paper Holder",
    "fac.item.욕조": "Bathtub",
    "fac.item.욕조 (랜덤배정, 요청시 배정)": "Bathtub (Random Assignment, Available on Request)",
    "fac.item.욕실 환풍기": "Bathroom Ventilation Fan",
    "fac.item.욕실 슬리퍼": "Bathroom Slippers",
    "fac.item.전용 욕실": "Private Bathroom",
    "fac.item.칫솔 / 치약": "Toothbrush / Toothpaste",
    "fac.item.폼클렌징": "Foam Cleanser",
    "fac.item.레이디셋": "Lady's Set",
    "fac.item.면도기": "Razor",
    "fac.item.샴푸 / 컨디셔너 / 바디워시": "Shampoo / Conditioner / Body Wash",
    "fac.item.LG 천정형 에어컨 / 난방": "LG Ceiling Air Conditioner / Heating",
    "fac.item.무소음 냉장고": "Silent Refrigerator",
    "fac.item.공기청정기": "Air Purifier",
    "fac.item.전기 주전자": "Electric Kettle",
    "fac.item.헤어드라이기 / 고데기": "Hair Dryer / Curling Iron",
    "fac.item.고급 원형테이블 / 의자": "Premium Round Table / Chair",
    "fac.item.골드 원형거울": "Gold Round Mirror",
    "fac.item.65인치 TV": "65-inch TV",
    "fac.item.객실 환풍기": "Room Ventilation Fan",
    "fac.item.침대 옆 콘센트 / 핸드폰충전기": "Bedside Outlet / Phone Charger",
    "fac.item.최고급 매트리스 / 린넨": "Premium Mattress / Linens",
    "fac.item.타월": "Towels",
    "fac.item.화장품 (여성/남성용 스킨·로션)": "Cosmetics (Toner & Lotion for Women/Men)",
    "fac.item.객실 가운": "Bathrobe",
    "fac.item.빗 / 옷걸이 / 슬리퍼": "Comb / Hangers / Slippers",
    "fac.item.금연 / 방음 객실": "Non-Smoking / Soundproofed Room",
    "fac.item.전자레인지": "Microwave",
    "fac.item.정수기": "Water Purifier",
    "fac.item.제빙기": "Ice Maker",
    "fac.item.커피머신": "Coffee Machine",
    "fac.item.무료 생수": "Complimentary Bottled Water",
    "fac.item.추가 무료 타월 / 휴지": "Extra Complimentary Towels / Tissues",
    "fac.item.일회용 젓가락 / 수저": "Disposable Chopsticks / Spoon",
    "fac.item.키오스크": "Kiosk",
    "fac.item.넷플릭스 / 디즈니+ / 티빙 (전 객실 무료시청)": "Netflix / Disney+ / TVING (Free in All Rooms)",
    "fac.item.애플TV+ / 유튜브 (전 객실 무료시청)": "Apple TV+ / YouTube (Free in All Rooms)",
    "fac.item.고사양 PC (GeForce 3060, RAM 16GB)": "High-End PC (GeForce 3060, RAM 16GB)",
    "fac.item.게이밍 모니터 (32인치 165Hz LED)": "Gaming Monitor (32-inch 165Hz LED)",
    "fac.item.게이밍 LED 키보드": "Gaming LED Keyboard",
    "fac.item.체크인 : 15:00": "Check-in: 15:00",
    "fac.item.체크아웃 : 12:00": "Check-out: 12:00",
    "fac.item.전용 체크인/체크아웃": "Dedicated Check-in / Check-out",
    "fac.item.24시간 프런트 데스크": "24-Hour Front Desk",
    "fac.item.하우스키핑 (매일)": "Housekeeping (Daily)",
    "fac.item.모닝콜 서비스": "Wake-Up Call Service",
    "fac.item.객실 내 조식 서비스": "In-Room Breakfast Service",
    "fac.item.룸서비스 (조식)": "Room Service (Breakfast)",
    "fac.item.Wi-Fi 호텔 전 구역에서 무료": "Free Wi-Fi Throughout Hotel",
    "fac.item.객실 내 개별 무료 초고속 Wi-Fi": "Complimentary High-Speed Wi-Fi in Every Room",
    "fac.item.호텔 내 전용 주차장 무료 (사전 예약 불필요)": "Free Dedicated Parking (No Reservation Required)",
    "fac.item.청구서(인보이스) 제공 숙소": "Invoice Available",
    "fac.item.소화기": "Fire Extinguisher",
    "fac.item.숙소 외부 CCTV": "Exterior CCTV",
    "fac.item.공용 공간 CCTV": "Common Area CCTV",
    "fac.item.화재 경보": "Fire Alarm",
    "fac.item.보안 알람": "Security Alarm",
    "fac.item.카드키 출입": "Card Key Access",
    "fac.item.24시간 보안": "24-Hour Security",
    "fac.item.호텔 앞 24시간 편의점 / 마트": "24-Hr Convenience Store / Mart Nearby",
    "fac.item.호텔 앞 병원": "Hospital Nearby",
    "fac.item.호텔 앞 24시간 빨래방": "24-Hr Laundromat Nearby",
    "fac.item.호텔 앞 24시간 식당": "24-Hr Restaurant Nearby",
    "fac.item.일부 흡연 구역": "Designated Smoking Areas",
    "fac.item.엘리베이터": "Elevator",
    "fac.item.루비룸 (애견동반 가능 객실)": "Ruby Room (Pet-Friendly)",
    "fac.item.소형견·중형견(10kg) 입실 가능": "Small to Medium Dogs (up to 10kg) Welcome",
    "fac.item.외출 시 반려견 동반 필수": "Pet Must Be Accompanied When Going Out",
    "fac.item.로비·복도 이동 시 케이지 이용": "Carrier Required in Lobby & Hallways",
  },
  ja: {
    "nav.hotel": "ホテル紹介",
    "nav.rooms": "客室予約",
    "nav.gallery": "ギャラリー",
    "nav.nearby": "周辺案内",
    "header.reviews": "1,446件のレビュー",
    "booking.date_label": "日付",
    "booking.date_select": "日付を選択",
    "booking.guest_label": "客室とゲスト",
    "booking.guest_default": "1室, 大人1名",
    "booking.price_label": "客室選択 & 特別料金",
    "booking.price_select": "最安値を確認",
    "booking.btn": "予約する",
    "booking.calendar_done": "完了",
    "booking.guest_done": "完了",
    "booking.room": "客室",
    "booking.adult": "大人",
    "mob.book_trigger": "予約する",
    "mob.confirm": "予約する",
    "intro.welcome": "INSTAホテルで素敵な思い出を作りましょう。",
    "intro.title": "水原で出会う感性的なホテル INSTA本店",
    "intro.more": "続きを読む",
    "intro.less": "閉じる",
    "rooms.title": "客室 & ステイ",
    "room.detail": "詳細を見る",
    "room.book": "料金を確認",
    "room.notice": "祝日・繁忙期料金は別途適用",
    "room.price_note": "実際の請求金額はチェックアウト時の為替レートにより異なる場合があります。",
    "room.economy": "エコノミールーム",
    "room.standard": "スタンダードルーム",
    "room.standard.badge": "(デザインランダム割当)",
    "room.deluxe": "デラックスルーム",
    "room.deluxe.badge": "(デザインランダム割当)",
    "room.twin": "ツインルーム",
    "room.special": "スペシャル",
    "room.ruby": "ルビールーム（ペット同伴可）",
    "room.economy.sub": "基準2名 / 最大2名 · クイーンベッド1台",
    "room.standard.sub": "基準2名 / 最大2名 · クイーンベッド1台",
    "room.deluxe.sub": "基準2名 / 最大2名 · クイーンベッド1台",
    "room.twin.sub": "基準2名 / 最大3名無料 · クイーン1台 / シングル1台",
    "room.special.sub": "基準2名 / 最大4名無料 · クイーン1台 / シングル2台",
    "room.ruby.sub": "基準2名 / 最大2名 · クイーンベッド1台",
    "fac.title": "ホテル施設・サービス",
    "fac.tab.room": "客室アメニティ",
    "fac.tab.hotel": "ホテル・付帯サービス",
    "fac.tab.sec": "セキュリティ & 一般情報",
    "fac.photo_hint": "項目をクリックすると写真を確認できます",
    "loc.subtitle": "ホテルの場所",
    "loc.title": "アクセス",
    "footer.follow": "INSTAホテルをフォロー",
    "price.weekday": "(日〜木)",
    "price.fri": "(金)",
    "price.sat": "(土)",
    "ways.title": "ホテル滞在をもっと楽しむ方法",
    "booking.checkout_select": "チェックアウトを選択",
    "room.ruby.modal.sub": "基準2名 / 最大2名 · クイーンベッド1台 · ペット同伴可",
    "fac.col.욕실": "バスルーム",
    "fac.col.어메니티": "アメニティ",
    "fac.col.객실": "客室",
    "fac.col.공용 편의 시설": "共用設備",
    "fac.col.스트리밍 · 고사양 컴퓨터": "ストリーミング・ゲーミングPC",
    "fac.col.스트리밍": "ストリーミング",
    "fac.col.이용안내": "ご利用案内",
    "fac.col.식음료": "食事・飲料",
    "fac.col.인터넷": "インターネット",
    "fac.col.주차": "駐車場",
    "fac.col.리셉션 서비스": "フロントサービス",
    "fac.col.보안": "セキュリティ",
    "fac.col.일반": "一般情報",
    "fac.col.반려동물": "ペット",
    "fac.item.최고급 비데 일체형 양변기": "高級ウォシュレット一体型トイレ",
    "fac.item.골드 대형거울": "ゴールド大型ミラー",
    "fac.item.고급 골드 샤워기": "高級ゴールドシャワーヘッド",
    "fac.item.고급 골드 세면대": "高級ゴールド洗面台",
    "fac.item.고급 골드 휴지걸이": "高級ゴールドペーパーホルダー",
    "fac.item.욕조": "バスタブ",
    "fac.item.욕조 (랜덤배정, 요청시 배정)": "バスタブ（ランダム割当・リクエスト制）",
    "fac.item.욕실 환풍기": "バスルーム換気扇",
    "fac.item.욕실 슬리퍼": "バスルームスリッパ",
    "fac.item.전용 욕실": "専用バスルーム",
    "fac.item.칫솔 / 치약": "歯ブラシ / 歯磨き粉",
    "fac.item.폼클렌징": "洗顔フォーム",
    "fac.item.레이디셋": "レディースセット",
    "fac.item.면도기": "カミソリ",
    "fac.item.샴푸 / 컨디셔너 / 바디워시": "シャンプー / コンディショナー / ボディウォッシュ",
    "fac.item.LG 천정형 에어컨 / 난방": "LG天井型エアコン / 暖房",
    "fac.item.무소음 냉장고": "静音冷蔵庫",
    "fac.item.공기청정기": "空気清浄機",
    "fac.item.전기 주전자": "電気ケトル",
    "fac.item.헤어드라이기 / 고데기": "ヘアドライヤー / カールアイロン",
    "fac.item.고급 원형테이블 / 의자": "高級円形テーブル / チェア",
    "fac.item.골드 원형거울": "ゴールド円形ミラー",
    "fac.item.65인치 TV": "65インチTV",
    "fac.item.객실 환풍기": "客室換気扇",
    "fac.item.침대 옆 콘센트 / 핸드폰충전기": "ベッドサイドコンセント / 充電器",
    "fac.item.최고급 매트리스 / 린넨": "高級マットレス / リネン",
    "fac.item.타월": "タオル",
    "fac.item.화장품 (여성/남성용 스킨·로션)": "コスメ（女性/男性用スキン・ローション）",
    "fac.item.객실 가운": "バスローブ",
    "fac.item.빗 / 옷걸이 / 슬리퍼": "ブラシ / ハンガー / スリッパ",
    "fac.item.금연 / 방음 객실": "禁煙 / 防音客室",
    "fac.item.전자레인지": "電子レンジ",
    "fac.item.정수기": "ウォーターサーバー",
    "fac.item.제빙기": "製氷機",
    "fac.item.커피머신": "コーヒーマシン",
    "fac.item.무료 생수": "無料ミネラルウォーター",
    "fac.item.추가 무료 타월 / 휴지": "追加タオル / ティッシュ無料",
    "fac.item.일회용 젓가락 / 수저": "使い捨て箸 / スプーン",
    "fac.item.키오스크": "キオスク",
    "fac.item.넷플릭스 / 디즈니+ / 티빙 (전 객실 무료시청)": "Netflix / Disney+ / TVING（全室無料視聴）",
    "fac.item.애플TV+ / 유튜브 (전 객실 무료시청)": "Apple TV+ / YouTube（全室無料視聴）",
    "fac.item.고사양 PC (GeForce 3060, RAM 16GB)": "高性能PC（GeForce 3060, RAM 16GB）",
    "fac.item.게이밍 모니터 (32인치 165Hz LED)": "ゲーミングモニター（32インチ 165Hz LED）",
    "fac.item.게이밍 LED 키보드": "ゲーミングLEDキーボード",
    "fac.item.체크인 : 15:00": "チェックイン: 15:00",
    "fac.item.체크아웃 : 12:00": "チェックアウト: 12:00",
    "fac.item.전용 체크인/체크아웃": "専用チェックイン / チェックアウト",
    "fac.item.24시간 프런트 데스크": "24時間フロントデスク",
    "fac.item.하우스키핑 (매일)": "ハウスキーピング（毎日）",
    "fac.item.모닝콜 서비스": "モーニングコールサービス",
    "fac.item.객실 내 조식 서비스": "客室内朝食サービス",
    "fac.item.룸서비스 (조식)": "ルームサービス（朝食）",
    "fac.item.Wi-Fi 호텔 전 구역에서 무료": "ホテル全館Wi-Fi無料",
    "fac.item.객실 내 개별 무료 초고속 Wi-Fi": "客室個別・無料高速Wi-Fi",
    "fac.item.호텔 내 전용 주차장 무료 (사전 예약 불필요)": "無料専用駐車場（事前予約不要）",
    "fac.item.청구서(인보이스) 제공 숙소": "領収書（インボイス）発行",
    "fac.item.소화기": "消火器",
    "fac.item.숙소 외부 CCTV": "館外CCTV",
    "fac.item.공용 공간 CCTV": "共用エリアCCTV",
    "fac.item.화재 경보": "火災報知器",
    "fac.item.보안 알람": "セキュリティアラーム",
    "fac.item.카드키 출입": "カードキー入室",
    "fac.item.24시간 보안": "24時間セキュリティ",
    "fac.item.호텔 앞 24시간 편의점 / 마트": "ホテル前24時間コンビニ / スーパー",
    "fac.item.호텔 앞 병원": "ホテル前病院",
    "fac.item.호텔 앞 24시간 빨래방": "ホテル前24時間コインランドリー",
    "fac.item.호텔 앞 24시간 식당": "ホテル前24時間レストラン",
    "fac.item.일부 흡연 구역": "一部喫煙エリア",
    "fac.item.엘리베이터": "エレベーター",
    "fac.item.루비룸 (애견동반 가능 객실)": "ルビールーム（ペット同伴可）",
    "fac.item.소형견·중형견(10kg) 입실 가능": "小型～中型犬（10kgまで）",
    "fac.item.외출 시 반려견 동반 필수": "外出時ペット同伴必須",
    "fac.item.로비·복도 이동 시 케이지 이용": "ロビー・廊下はキャリー使用",
  },
  zh: {
    "nav.hotel": "酒店介绍",
    "nav.rooms": "客房预订",
    "nav.gallery": "图库",
    "nav.nearby": "周边指南",
    "header.reviews": "1,446条评价",
    "booking.date_label": "日期",
    "booking.date_select": "选择日期",
    "booking.guest_label": "客房 & 住客",
    "booking.guest_default": "1间客房, 1位成人",
    "booking.price_label": "选择客房 & 特惠价格",
    "booking.price_select": "查看最低价",
    "booking.btn": "立即预订",
    "booking.calendar_done": "确认",
    "booking.guest_done": "确认",
    "booking.room": "客房",
    "booking.adult": "成人",
    "mob.book_trigger": "立即预订",
    "mob.confirm": "立即预订",
    "intro.welcome": "在INSTA酒店，留下珍贵的回忆。",
    "intro.title": "水原感性设计酒店 INSTA本店",
    "intro.more": "查看更多",
    "intro.less": "收起",
    "rooms.title": "客房 & 住宿",
    "room.detail": "查看详情",
    "room.book": "查看价格",
    "room.notice": "节假日及旺季另行收费",
    "room.price_note": "实际收费金额可能因结账时的汇率而有所不同。",
    "room.economy": "经济间",
    "room.standard": "标准间",
    "room.standard.badge": "(随机设计分配)",
    "room.deluxe": "豪华间",
    "room.deluxe.badge": "(随机设计分配)",
    "room.twin": "双床间",
    "room.special": "特别间",
    "room.ruby": "露比间（可携带宠物）",
    "room.economy.sub": "标准2人 / 最多2人 · 大床1张",
    "room.standard.sub": "标准2人 / 最多2人 · 大床1张",
    "room.deluxe.sub": "标准2人 / 最多2人 · 大床1张",
    "room.twin.sub": "标准2人 / 最多3人免费 · 大床1张 / 单人床1张",
    "room.special.sub": "标准2人 / 最多4人免费 · 大床1张 / 单人床2张",
    "room.ruby.sub": "标准2人 / 最多2人 · 大床1张",
    "fac.title": "酒店设施与服务",
    "fac.tab.room": "客房便利设施",
    "fac.tab.hotel": "酒店及附属服务",
    "fac.tab.sec": "安保与一般信息",
    "fac.photo_hint": "点击项目可查看照片",
    "loc.subtitle": "酒店位置",
    "loc.title": "交通指南",
    "footer.follow": "关注INSTA酒店",
    "price.weekday": "(周日~周四)",
    "price.fri": "(周五)",
    "price.sat": "(周六)",
    "ways.title": "享受酒店住宿的多种方式",
    "booking.checkout_select": "选择退房日",
    "room.ruby.modal.sub": "标准2人 / 最多2人 · 大床1张 · 可携带宠物",
    "fac.col.욕실": "浴室",
    "fac.col.어메니티": "洗漱用品",
    "fac.col.객실": "客房",
    "fac.col.공용 편의 시설": "公共设施",
    "fac.col.스트리밍 · 고사양 컴퓨터": "流媒体·高配电脑",
    "fac.col.스트리밍": "流媒体",
    "fac.col.이용안내": "使用须知",
    "fac.col.식음료": "餐饮服务",
    "fac.col.인터넷": "网络",
    "fac.col.주차": "停车",
    "fac.col.리셉션 서비스": "前台服务",
    "fac.col.보안": "安保",
    "fac.col.일반": "一般信息",
    "fac.col.반려동물": "宠物",
    "fac.item.최고급 비데 일체형 양변기": "高档一体式智能马桶",
    "fac.item.골드 대형거울": "金色大型镜子",
    "fac.item.고급 골드 샤워기": "高档金色花洒",
    "fac.item.고급 골드 세면대": "高档金色洗手台",
    "fac.item.고급 골드 휴지걸이": "高档金色卷纸架",
    "fac.item.욕조": "浴缸",
    "fac.item.욕조 (랜덤배정, 요청시 배정)": "浴缸（随机分配，可按需申请）",
    "fac.item.욕실 환풍기": "浴室通风扇",
    "fac.item.욕실 슬리퍼": "浴室拖鞋",
    "fac.item.전용 욕실": "专用浴室",
    "fac.item.칫솔 / 치약": "牙刷 / 牙膏",
    "fac.item.폼클렌징": "洁面泡沫",
    "fac.item.레이디셋": "女士套装",
    "fac.item.면도기": "剃须刀",
    "fac.item.샴푸 / 컨디셔너 / 바디워시": "洗发水 / 护发素 / 沐浴露",
    "fac.item.LG 천정형 에어컨 / 난방": "LG吸顶空调 / 暖气",
    "fac.item.무소음 냉장고": "静音冰箱",
    "fac.item.공기청정기": "空气净化器",
    "fac.item.전기 주전자": "电热水壶",
    "fac.item.헤어드라이기 / 고데기": "吹风机 / 卷发棒",
    "fac.item.고급 원형테이블 / 의자": "高档圆形桌椅",
    "fac.item.골드 원형거울": "金色圆形镜子",
    "fac.item.65인치 TV": "65英寸电视",
    "fac.item.객실 환풍기": "客房通风扇",
    "fac.item.침대 옆 콘센트 / 핸드폰충전기": "床头插座 / 手机充电器",
    "fac.item.최고급 매트리스 / 린넨": "高级床垫 / 床品",
    "fac.item.타월": "毛巾",
    "fac.item.화장품 (여성/남성용 스킨·로션)": "护肤品（男女用爽肤水·乳液）",
    "fac.item.객실 가운": "浴袍",
    "fac.item.빗 / 옷걸이 / 슬리퍼": "梳子 / 衣架 / 拖鞋",
    "fac.item.금연 / 방음 객실": "禁烟 / 隔音客房",
    "fac.item.전자레인지": "微波炉",
    "fac.item.정수기": "净水机",
    "fac.item.제빙기": "制冰机",
    "fac.item.커피머신": "咖啡机",
    "fac.item.무료 생수": "免费矿泉水",
    "fac.item.추가 무료 타월 / 휴지": "额外免费毛巾 / 纸巾",
    "fac.item.일회용 젓가락 / 수저": "一次性筷子 / 勺子",
    "fac.item.키오스크": "自助服务机",
    "fac.item.넷플릭스 / 디즈니+ / 티빙 (전 객실 무료시청)": "Netflix / Disney+ / TVING（全客房免费收看）",
    "fac.item.애플TV+ / 유튜브 (전 객실 무료시청)": "Apple TV+ / YouTube（全客房免费收看）",
    "fac.item.고사양 PC (GeForce 3060, RAM 16GB)": "高配电脑（GeForce 3060, RAM 16GB）",
    "fac.item.게이밍 모니터 (32인치 165Hz LED)": "游戏显示器（32英寸 165Hz LED）",
    "fac.item.게이밍 LED 키보드": "游戏LED键盘",
    "fac.item.체크인 : 15:00": "入住时间: 15:00",
    "fac.item.체크아웃 : 12:00": "退房时间: 12:00",
    "fac.item.전용 체크인/체크아웃": "专属入住 / 退房服务",
    "fac.item.24시간 프런트 데스크": "24小时前台",
    "fac.item.하우스키핑 (매일)": "每日客房清洁",
    "fac.item.모닝콜 서비스": "叫醒服务",
    "fac.item.객실 내 조식 서비스": "客房早餐服务",
    "fac.item.룸서비스 (조식)": "客房服务（早餐）",
    "fac.item.Wi-Fi 호텔 전 구역에서 무료": "酒店全区免费Wi-Fi",
    "fac.item.객실 내 개별 무료 초고속 Wi-Fi": "客房专属高速Wi-Fi免费",
    "fac.item.호텔 내 전용 주차장 무료 (사전 예약 불필요)": "免费专属停车场（无需预约）",
    "fac.item.청구서(인보이스) 제공 숙소": "提供发票（收据）",
    "fac.item.소화기": "灭火器",
    "fac.item.숙소 외부 CCTV": "室外监控",
    "fac.item.공용 공간 CCTV": "公共区域监控",
    "fac.item.화재 경보": "火灾警报",
    "fac.item.보안 알람": "安全警报",
    "fac.item.카드키 출입": "刷卡门锁",
    "fac.item.24시간 보안": "24小时安保",
    "fac.item.호텔 앞 24시간 편의점 / 마트": "酒店前24小时便利店 / 超市",
    "fac.item.호텔 앞 병원": "酒店前医院",
    "fac.item.호텔 앞 24시간 빨래방": "酒店前24小时自助洗衣店",
    "fac.item.호텔 앞 24시간 식당": "酒店前24小时餐厅",
    "fac.item.일부 흡연 구역": "部分吸烟区域",
    "fac.item.엘리베이터": "电梯",
    "fac.item.루비룸 (애견동반 가능 객실)": "露比间（宠物友好）",
    "fac.item.소형견·중형견(10kg) 입실 가능": "小型及中型犬（10kg以内）",
    "fac.item.외출 시 반려견 동반 필수": "外出时必须随行携带宠物",
    "fac.item.로비·복도 이동 시 케이지 이용": "大堂及走廊须使用宠物提篮",
  }
};

// 화폐 기호 매핑
const currencySymbol = { en: '$', ja: '¥', zh: '¥' };
const currencyKey    = { en: 'USD', ja: 'JPY', zh: 'CNY' };

function _convertPrice(krw, lang) {
  if (lang === 'ko') return null;
  var rate = exchangeRates[currencyKey[lang]];
  var sym  = currencySymbol[lang];
  var converted = Math.round(krw * rate);
  // JPY/CNY는 정수, USD는 소수점 없이 반올림
  return sym + converted.toLocaleString();
}

// 객실 요금 데이터 (KRW 숫자값)
var roomPrices = {
  edelweiss: { weekday: 49500, fri: 58500, sat: 72000 },
  aurora:    { weekday: 58000, fri: 67000, sat: 81000 },
  glorio:    { weekday: 67000, fri: 76000, sat: 99000 },
  envidion:  { weekday: 76000, fri: 85000, sat: 108000 },
  special:   { weekday: 99000, fri: 108000, sat: 126000 },
  ruby:      { weekday: 76000, fri: 85000, sat: 108000 }
};

// 현재 언어
var currentLang = 'ko';

function t(key) {
  var dict = translations[currentLang] || translations['ko'];
  return dict[key] || translations['ko'][key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('siteLang', lang);

  // data-i18n 텍스트 교체
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // 객실 요금 병기 업데이트
  _updateRoomPrices(lang);

  // 예약바 동적 텍스트 동기화
  _syncBookingBarLang(lang);

  // 언어 버튼 표시 업데이트
  var langCode = document.getElementById('langCode');
  if (langCode) langCode.textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.classList.toggle('active', opt.dataset.code === lang.toUpperCase());
  });

  // html lang 속성
  document.documentElement.lang = lang;

  // 날짜 선택 후 변경된 동적 텍스트(요금, 모바일 패널) 새로고침
  if (typeof updateRoomPrices === 'function') updateRoomPrices();
  if (typeof syncMobPanel     === 'function') syncMobPanel();

  // 모달이 열려 있으면 재렌더링
  if (typeof openRoomModal === 'function' && typeof _openModalRoomId !== 'undefined' && _openModalRoomId) {
    openRoomModal(_openModalRoomId);
  }
}

function _updateRoomPrices(lang) {
  document.querySelectorAll('.room-card').forEach(function(card) {
    var roomId = card.getAttribute('data-room-id');
    if (!roomId || !roomPrices[roomId]) return;
    var prices = roomPrices[roomId];

    var items = card.querySelectorAll('.room-card-price-item');
    var dayKeys = ['weekday', 'fri', 'sat'];
    items.forEach(function(item, idx) {
      if (idx >= dayKeys.length) return;
      var krw = prices[dayKeys[idx]];

      // 환산 금액 span 추가/제거
      var convSpan = item.querySelector('.price-conv');
      if (lang === 'ko') {
        if (convSpan) convSpan.remove();
      } else {
        var conv = _convertPrice(krw, lang);
        if (!convSpan) {
          convSpan = document.createElement('span');
          convSpan.className = 'price-conv';
          item.appendChild(convSpan);
        }
        convSpan.textContent = ' (~' + conv + ')';
      }
    });

    // 환율 안내 문구
    var priceNote = card.querySelector('.room-price-note');
    if (lang === 'ko') {
      if (priceNote) priceNote.remove();
    } else {
      if (!priceNote) {
        priceNote = document.createElement('p');
        priceNote.className = 'room-price-note';
        var meta = card.querySelector('.room-card-meta');
        if (meta) meta.appendChild(priceNote);
      }
      priceNote.textContent = t('room.price_note');
    }
  });
}

// ─── 동적 텍스트 포맷 헬퍼 ───────────────────────────────────────────────────

// 시설 컬럼 제목 (한국어 원본 키 → 현재 언어)
function tFacCol(kor) {
  return t('fac.col.' + kor);
}

// 시설 항목 (한국어 원본 키 → 현재 언어)
function tFacItem(kor) {
  return t('fac.item.' + kor);
}

// 객실 ID → 현재 언어 서브타이틀 (기준인원·침대 등)
function getRoomSub(id) {
  var subKeys = {
    edelweiss: 'room.economy.sub',
    aurora:    'room.standard.sub',
    glorio:    'room.deluxe.sub',
    envidion:  'room.twin.sub',
    special:   'room.special.sub',
    ruby:      'room.ruby.modal.sub'
  };
  return t(subKeys[id] || id);
}

// 객실 ID → 현재 언어 객실명
function getRoomName(id) {
  var keyMap = {
    edelweiss: 'room.economy',
    aurora:    'room.standard',
    glorio:    'room.deluxe',
    envidion:  'room.twin',
    special:   'room.special',
    ruby:      'room.ruby'
  };
  return t(keyMap[id] || id);
}

// "N박 총 OO원" / "Total for N nights: ~$OO" 등 언어별 포맷
function fmtNightTotal(nights, krwTotal) {
  var won = krwTotal.toLocaleString();
  if (currentLang === 'ko') return nights + '박 총 ' + won + '원';
  var conv = _convertPrice(krwTotal, currentLang);
  if (currentLang === 'en') return 'Total for ' + nights + ' night' + (nights > 1 ? 's' : '') + ': ~' + conv;
  if (currentLang === 'ja') return nights + '泊合計: ~' + conv;
  if (currentLang === 'zh') return nights + '晚总价: ~' + conv;
  return nights + '박 총 ' + won + '원';
}

// "최대 N인" / "Max N guests" 등
function fmtUnavailMax(n) {
  if (currentLang === 'en') return 'Max ' + n + ' guests';
  if (currentLang === 'ja') return '最大' + n + '名';
  if (currentLang === 'zh') return '最多' + n + '人';
  return '최대 ' + n + '인';
}

// "날짜 (N박)" / "Dates (N nights)" 등
function fmtDateNights(n) {
  var label = t('booking.date_label');
  if (currentLang === 'en') return label + ' (' + n + ' night' + (n > 1 ? 's' : '') + ')';
  if (currentLang === 'ja') return label + ' (' + n + '泊)';
  if (currentLang === 'zh') return label + ' (' + n + '晚)';
  return label + ' (' + n + '박)';
}

// "N 객실, N 성인" / "N Rooms, N Adults" 등
function fmtGuestCount(room, adult) {
  if (currentLang === 'en') return room + ' Room' + (room > 1 ? 's' : '') + ', ' + adult + ' Adult' + (adult > 1 ? 's' : '');
  if (currentLang === 'ja') return room + '室, 大人' + adult + '名';
  if (currentLang === 'zh') return room + '间客房, ' + adult + '位成人';
  return room + ' 객실, ' + adult + ' 성인';
}

// ─────────────────────────────────────────────────────────────────────────────

function _syncBookingBarLang(lang) {
  var r = typeof guests !== 'undefined' ? guests.room  : 1;
  var a = typeof guests !== 'undefined' ? guests.adult : 1;
  var guestSummary = document.getElementById('guest-summary-text');
  var mobGuests    = document.getElementById('mob-panel-guests');
  if (guestSummary) guestSummary.textContent = fmtGuestCount(r, a);
  if (mobGuests)    mobGuests.textContent    = fmtGuestCount(r, a);
}

// 페이지 로드 시 저장된 언어 적용
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('siteLang') || 'ko';
  setLanguage(saved);
});
