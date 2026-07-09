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
    "intro.desc.1": "전통의 숨결과 현대적 에너지가 공존하는 도시 수원. 그 중심인 영통에 자리한 INSTA HOTEL은 단순한 숙박을 넘어, 머무름 자체가 특별한 경험이 되는 공간을 제안합니다.",
    "intro.desc.2": "글로벌 혁신의 중심인 삼성전자와 삼성 반도체 산업단지와 인접해 비즈니스 여행객에게 효율적이고 편안한 여정을 제공하며, 조금만 발걸음을 옮기면 유네스코 세계문화유산 수원화성과 수원행궁, 감성적인 행궁동 거리, 한국민속촌의 고즈넉한 풍경을 만나볼 수 있습니다. 미니멀하면서도 감각적인 무드로 완성된 객실은 복잡한 일상에서 벗어나 오롯이 휴식에 집중할 수 있도록 설계되었습니다. 따뜻한 조명, 편안한 침구, 정제된 공간감은 바쁜 하루의 끝에 가장 편안한 휴식을 선사합니다. 비즈니스의 성공적인 여정부터 문화와 여행이 주는 새로운 영감까지. 도시의 활기와 조용한 휴식이 공존하는 공간, INSTA HOTEL에서 당신만의 특별한 이야기를 시작해 보시기 바랍니다.",
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
    "loc.address": "경기도 수원시 영통구 영통로 94-6, 대한민국",
    "loc.tel": "전화:",
    "loc.acc.incheon": "인천국제공항",
    "loc.acc.gimpo": "김포국제공항",
    "loc.acc.other": "기타 교통수단",
    "loc.acc.incheon.1": "<strong>공항리무진 A4100</strong> — 망포역 7번 출구 정류장 탑승 → 인천공항 T1·T2<br>약 1시간 40분 소요 / 성인 13,500원 / 하루 약 37회 운행 / 선착순 좌석제 (예약 없음)",
    "loc.acc.incheon.2": "<strong>지하철 + 공항철도</strong> — 망포역(수인분당선)에서 환승, 약 2시간",
    "loc.acc.incheon.3": "<strong>택시 / 자가용</strong> — 약 70km, 약 1시간~1시간 20분",
    "loc.acc.gimpo.1": "<strong>지하철</strong> — 망포역(수인분당선)에서 김포공항역까지 환승, 약 1시간 20분~1시간 40분",
    "loc.acc.gimpo.2": "<strong>택시 / 자가용</strong> — 약 45km, 약 50분~1시간",
    "loc.acc.other.1": "<strong>지하철</strong> — 수인분당선 망포역 (호텔에서 도보 이동)",
    "loc.acc.other.2": "<strong>시내버스</strong> — 7-1 / 7-1A (동탄1차고지 ↔ 경기대정문 등) · 13-5 (동탄1차고지 ↔ 당수동) · 20-2 (망포역 ↔ 신영통현대아파트단지 순환) · 34 / 34-1 (수원동부차고지 ↔ 병점역/왕림리) · 62-1 (동탄 ↔ 성균관대역) · 92-1 (동탄차고지 ↔ 성균관대역) · 98 (이목동차고지 ↔ 반월동)",
    "loc.acc.other.3": "<strong>시외버스</strong> — 1550-1 (한신대 ↔ 신논현역·강남역)",
    "loc.acc.other.4": "<strong>자가용 주차</strong> — 투숙객 전용 주차장 무료 이용 가능 (사전 예약 불필요)",
    "loc.modal.transport": "교통편 안내",
    "loc.modal.naver": "네이버 지도로 보기",
    "loc.modal.incheon.1": "<strong>공항리무진 A4100</strong> — 망포역 7번 출구 탑승 → T1·T2<br>약 1시간 40분 / 13,500원",
    "loc.modal.incheon.2": "<strong>지하철+공항철도</strong> — 망포역(수인분당선) 환승, 약 2시간",
    "loc.modal.incheon.3": "<strong>택시 / 자가용</strong> — 약 70km, 약 1시간~1시간 20분",
    "loc.modal.gimpo.1": "<strong>지하철</strong> — 망포역에서 김포공항역까지 약 1시간 20~40분",
    "loc.modal.gimpo.2": "<strong>택시 / 자가용</strong> — 약 45km, 약 50분~1시간",
    "loc.modal.other.1": "<strong>지하철</strong> — 수인분당선 망포역 (도보 이동)",
    "loc.modal.other.2": "<strong>시내버스</strong> — 7-1 / 7-1A (동탄1차고지 ↔ 경기대정문 등) · 13-5 (동탄1차고지 ↔ 당수동) · 20-2 (망포역 ↔ 신영통현대아파트단지 순환) · 34 / 34-1 (수원동부차고지 ↔ 병점역/왕림리) · 62-1 (동탄 ↔ 성균관대역) · 92-1 (동탄차고지 ↔ 성균관대역) · 98 (이목동차고지 ↔ 반월동)",
    "loc.modal.other.3": "<strong>시외버스</strong> — 1550-1 (한신대 ↔ 신논현역·강남역)",
    "loc.modal.other.4": "<strong>주차</strong> — 투숙객 전용 주차장 무료 이용 (사전예약 불필요)",
    // 푸터
    "footer.follow": "팔로우하기 인스타 호텔",
    "footer.address": "경기도 수원시 영통구 영통로 94-6",
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
    "fac.col.지원 가능한 언어": "지원 가능한 언어",
    "fac.text.pet": "루비룸 (애견동반 가능 객실)",
    "fac.text.wifi1": "Wi-Fi 호텔 전 구역에서 무료입니다.",
    "fac.text.wifi2": "객실 내 개별 무료 초고속 Wi-Fi",
    "fac.text.parking": "호텔 내 (사전 예약 불필요) 전용 주차장이 무료로 이용 가능합니다.",
    "fac.item.영어": "영어",
    "fac.item.스페인어": "스페인어",
    "fac.item.프랑스어": "프랑스어",
    "fac.item.이탈리아어": "이탈리아어",
    "fac.item.일본어": "일본어",
    "fac.item.한국어": "한국어",
    "fac.item.러시아어": "러시아어",
    "fac.item.중국어": "중국어",
    "fac.sub.최고급 비데 일체형 양변기": "안전댐퍼 · 자동 물내림 · 무선리모컨 · 온풍건조 · 온열시트 · 리듬 · 노즐청소",
    "fac.sub.고급 골드 샤워기": "핸드 샤워기 / 해바라기 샤워기 / 토수구 세 가지 방식으로 욕실에서 편리하게 사용 가능",
    "fac.sub.욕실 환풍기": "힘펠환풍기 제로크 · BLDC Fan-Motor (고효율/저소음) · 정풍량 환기팬 인증 · 고기밀 모터댐퍼",
    "fac.sub.객실 환풍기": "힘펠환풍기 제로크 · BLDC Fan-Motor (고효율/저소음) · 정풍량 환기팬 인증 · 고기밀 모터댐퍼",
    "fac.sub.LG 천정형 에어컨 / 난방": "LG 휘센 1Way · 빠르고 쾌적하게 냉방, 청정관리로 편안함을 더한 천장형 에어컨",
    "fac.sub.무소음 냉장고": "확상흡수식/전열관식 냉각방식으로 완전무소음 냉장고",
    "fac.sub.전자레인지": "LG디오스 전자레인지 · 겉과 속을 균일하게 조리하는 스마트 인버터 · 1,000W 고출력으로 빠르게 조리 · 기름때가 스며들지 않는 항균 이지클린 코팅",
    // rooms.html 전용
    "nav.util_benefit": "공식 홈페이지 예약 시 최대 혜택",
    "rooms.all_rooms": "전체 객실",
    "booking.select_room_alert": "객실을 선택해 주세요.",
    "booking.min_price": "최저 요금",
    // gallery.html 전용
    "gal.header.sub": "호텔 인스타의 모든 사진을 한눈에 확인하세요",
    "gal.tab.all": "전체",
    "gal.tab.rooms": "객실",
    "gal.tab.nearby": "주변 관광지",
    "gal.photos_suffix": "장의 사진",
    "gal.label.standard": "스탠다드 룸 (디자인 랜덤배정)",
    "gal.label.deluxe": "디럭스 룸 (디자인 랜덤배정)",
    "gal.label.hwaseong": "수원화성",
    "gal.label.everland": "에버랜드",
    "gal.label.caribbean": "케리비안베이",
    "gal.label.lake_park": "광교호수공원",
    "gal.label.folk_village": "민속촌",
    "gal.label.arboretum": "영흥수목원",
    "gal.label.starfield": "수원 스타필드",
    "gal.label.convenience": "편의점",
    // nearby.html 전용
    "nearby.hero.label": "호텔 인스타",
    "nearby.hero.title": "주변 관광지 & 편의시설",
    "nearby.section.sub": "호텔 근처의 다양한 명소와 편의시설을 확인하세요",
    "nearby.desc.hwaseong": "유네스코 세계문화유산으로 지정된 조선시대 대표 성곽입니다. 정조대왕이 1796년에 완성한 화성은 독창적인 건축양식과 아름다운 풍경으로 수원을 찾는 관광객이 반드시 방문하는 대표 명소입니다.",
    "nearby.desc.everland": "국내 최대 규모의 테마파크로 다양한 놀이기구, 동물원, 계절별 꽃 축제 등을 즐길 수 있습니다. 가족 단위 방문객에게 특히 인기 있으며, 사계절 내내 다양한 이벤트와 공연이 펼쳐집니다.",
    "nearby.desc.caribbean": "에버랜드 내 위치한 국내 최대 규모의 워터파크입니다. 파도풀, 익스트림 슬라이드, 실내 스파 등 다양한 수상 어트랙션을 갖추고 있어 여름철 대표 인기 방문지입니다.",
    "nearby.desc.lake_park": "수원시 영통구에 위치한 도심 속 아름다운 자연 호수공원입니다. 광교저수지와 원천저수지 주변에 조성된 넓은 산책로, 자전거 도로, 카페, 문화공연장을 갖추고 있어 사계절 내내 많은 시민과 관광객이 즐겨 찾는 힐링 공간입니다.",
    "nearby.desc.folk_village": "조선시대의 전통 생활문화를 생생하게 체험할 수 있는 야외 민속박물관입니다. 초가집, 기와집 등 전통 가옥과 다양한 민속 공연을 관람하며 우리나라의 옛 생활 모습을 느낄 수 있습니다.",
    "nearby.desc.arboretum": "수원시에 위치한 도심형 수목원으로 다양한 식물과 계절별 꽃을 감상할 수 있습니다. 자연 속 산책로를 걸으며 힐링하기 좋은 수원의 숨겨진 명소로, 가족 나들이와 여유로운 산책을 즐기기에 안성맞춤입니다.",
    "nearby.desc.starfield": "수원에 위치한 대규모 복합쇼핑몰로 다양한 브랜드 매장과 맛집, 별마당도서관 등 문화·여가 공간이 한곳에 모여 있습니다. 쇼핑과 식사, 문화생활을 한 번에 즐길 수 있는 수원의 새로운 랜드마크입니다.",
    "nearby.desc.convenience": "호텔 바로 인근에 24시간 편의점이 위치해 있어 간단한 먹거리, 음료, 생필품을 언제든 편리하게 구매하실 수 있습니다. 투숙 중 필요한 것들을 가까운 거리에서 손쉽게 해결하세요.",
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
    "intro.desc.1": "Suwon is a city where centuries of tradition breathe alongside the energy of modern life. Nestled in the heart of Yeongton, INSTA HOTEL goes beyond a simple overnight stay — it offers a space where the act of staying itself becomes a truly special experience.",
    "intro.desc.2": "Located steps from Samsung Electronics and the Samsung Semiconductor campus — global hubs of innovation — the hotel offers seamless comfort for business travelers. A short walk brings you to the UNESCO World Heritage Hwaseong Fortress, Hwaseong Haenggung Palace, the charming streets of Haenggung-dong, and the peaceful landscapes of the Korean Folk Village. Thoughtfully designed in a minimalist yet deeply sensory style, each room is crafted to help you shed the weight of a busy day and immerse yourself fully in rest. Warm lighting, plush bedding, and a refined sense of space deliver the most restorative end to any evening. Whether you're here for a successful business trip or seeking fresh inspiration through culture and travel, we invite you to begin your own unique story at INSTA HOTEL — where city energy and quiet comfort exist in perfect balance.",
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
    "loc.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea<br><span class=\"addr-ko\">(경기도 수원시 영통구 영통로 94-6, 대한민국)</span>",
    "loc.tel": "Tel:",
    "loc.acc.incheon": "Incheon International Airport",
    "loc.acc.gimpo": "Gimpo International Airport",
    "loc.acc.other": "Other Transport",
    "loc.acc.incheon.1": "<strong>Airport Limousine A4100</strong> — Board at Mangpo Station Exit 7 → Incheon Airport T1·T2<br>Approx. 1h 40min / ₩13,500 / ~37 trips/day / First-come, first-served (no reservation)",
    "loc.acc.incheon.2": "<strong>Subway + AREX</strong> — Transfer at Mangpo Station (Suin-Bundang Line), approx. 2 hours",
    "loc.acc.incheon.3": "<strong>Taxi / Car</strong> — Approx. 70km, 1–1.5 hours",
    "loc.acc.gimpo.1": "<strong>Subway</strong> — Transfer at Mangpo Station (Suin-Bundang Line) to Gimpo Airport Station, approx. 1h 20min–1h 40min",
    "loc.acc.gimpo.2": "<strong>Taxi / Car</strong> — Approx. 45km, 50min–1 hour",
    "loc.acc.other.1": "<strong>Subway</strong> — Suin-Bundang Line, Mangpo Station (walking distance from hotel)",
    "loc.acc.other.2": "<strong>City Bus</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.acc.other.3": "<strong>Express Bus</strong> — 1550-1 (Hanshin Univ. ↔ Sinnonhyeon·Gangnam Station)",
    "loc.acc.other.4": "<strong>Parking</strong> — Free dedicated parking for hotel guests (no advance reservation required)",
    "loc.modal.transport": "Getting Here",
    "loc.modal.naver": "View on Naver Maps",
    "loc.modal.incheon.1": "<strong>Airport Limousine A4100</strong> — Board at Mangpo Exit 7 → T1·T2<br>Approx. 1h 40min / ₩13,500",
    "loc.modal.incheon.2": "<strong>Subway + AREX</strong> — Transfer at Mangpo (Suin-Bundang Line), approx. 2 hours",
    "loc.modal.incheon.3": "<strong>Taxi / Car</strong> — Approx. 70km, 1–1.5 hours",
    "loc.modal.gimpo.1": "<strong>Subway</strong> — Mangpo → Gimpo Airport Station, approx. 1h 20–40min",
    "loc.modal.gimpo.2": "<strong>Taxi / Car</strong> — Approx. 45km, 50min–1 hour",
    "loc.modal.other.1": "<strong>Subway</strong> — Suin-Bundang Line, Mangpo Station (walking distance)",
    "loc.modal.other.2": "<strong>City Bus</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.modal.other.3": "<strong>Express Bus</strong> — 1550-1 (Hanshin Univ. ↔ Sinnonhyeon·Gangnam Station)",
    "loc.modal.other.4": "<strong>Parking</strong> — Free dedicated parking for guests (no reservation required)",
    "footer.follow": "Follow INSTA Hotel",
    "footer.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do",
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
    "fac.col.지원 가능한 언어": "Languages Spoken",
    "fac.text.pet": "Ruby Room (pet-friendly room)",
    "fac.text.wifi1": "Free Wi-Fi throughout the hotel.",
    "fac.text.wifi2": "Free high-speed Wi-Fi in every room",
    "fac.text.parking": "Free on-site parking available (no advance reservation required).",
    "fac.item.영어": "English",
    "fac.item.스페인어": "Spanish",
    "fac.item.프랑스어": "French",
    "fac.item.이탈리아어": "Italian",
    "fac.item.일본어": "Japanese",
    "fac.item.한국어": "Korean",
    "fac.item.러시아어": "Russian",
    "fac.item.중국어": "Chinese",
    "fac.sub.최고급 비데 일체형 양변기": "Safety Damper · Auto Flush · Wireless Remote · Warm Air Dry · Heated Seat · Rhythm Wash · Nozzle Self-Cleaning",
    "fac.sub.고급 골드 샤워기": "Hand shower / Rainfall shower / Faucet — three modes for a comfortable bath experience",
    "fac.sub.욕실 환풍기": "Hempel Zeroke · BLDC Fan-Motor (high efficiency / low noise) · Certified constant-airflow ventilation · High-seal motor damper",
    "fac.sub.객실 환풍기": "Hempel Zeroke · BLDC Fan-Motor (high efficiency / low noise) · Certified constant-airflow ventilation · High-seal motor damper",
    "fac.sub.LG 천정형 에어컨 / 난방": "LG Whisen 1Way · Fast, refreshing cooling with built-in air purification — ceiling-mounted for total comfort",
    "fac.sub.무소음 냉장고": "Absorption / thermoelectric cooling technology — completely silent operation",
    "fac.sub.전자레인지": "LG DIOS Microwave · Smart inverter for even inside-and-out heating · High-power 1,000W output for fast cooking · EasyClean antibacterial coating that resists grease",
    "nav.util_benefit": "Best rate guaranteed when booking direct",
    "rooms.all_rooms": "All Rooms",
    "booking.select_room_alert": "Please select a room.",
    "booking.min_price": "Lowest Rate",
    // gallery.html
    "gal.header.sub": "Browse all photos of INSTA Hotel at a glance",
    "gal.tab.all": "All",
    "gal.tab.rooms": "Rooms",
    "gal.tab.nearby": "Nearby Attractions",
    "gal.photos_suffix": " photos",
    "gal.label.standard": "Standard Room (Random Design)",
    "gal.label.deluxe": "Deluxe Room (Random Design)",
    "gal.label.hwaseong": "Hwaseong Fortress",
    "gal.label.everland": "Everland",
    "gal.label.caribbean": "Caribbean Bay",
    "gal.label.lake_park": "Gwanggyo Lake Park",
    "gal.label.folk_village": "Korean Folk Village",
    "gal.label.arboretum": "Yeonghung Arboretum",
    "gal.label.starfield": "Starfield Suwon",
    "gal.label.convenience": "Convenience Store",
    // nearby.html
    "nearby.hero.label": "INSTA Hotel",
    "nearby.hero.title": "Nearby Attractions & Facilities",
    "nearby.section.sub": "Discover attractions and facilities near the hotel",
    "nearby.desc.hwaseong": "A representative Joseon-era fortress designated as a UNESCO World Cultural Heritage site. Completed in 1796 by King Jeongjo, Hwaseong is celebrated for its unique architectural style and stunning scenery, making it a must-visit landmark for anyone traveling to Suwon.",
    "nearby.desc.everland": "South Korea's largest theme park, offering a wide range of rides, a zoo, and seasonal flower festivals. Especially popular with families, Everland hosts diverse events and performances all year round.",
    "nearby.desc.caribbean": "Located within Everland, Caribbean Bay is South Korea's largest water park. Featuring wave pools, extreme slides, and indoor spas, it is one of the most popular summer destinations in the country.",
    "nearby.desc.lake_park": "A beautiful natural lake park in Yeongtong-gu, Suwon. Surrounding Gwanggyo and Woncheon Reservoirs, the park offers wide walking trails, cycling paths, cafés, and a cultural performance venue — a beloved healing retreat enjoyed by residents and tourists throughout all four seasons.",
    "nearby.desc.folk_village": "An open-air folk museum where visitors can vividly experience traditional Joseon-era living culture. Explore thatched and tiled-roof houses, and enjoy folk performances that bring Korea's historic way of life to life.",
    "nearby.desc.arboretum": "An urban arboretum in Suwon where visitors can admire diverse plants and seasonal flowers. A hidden gem perfect for a relaxing nature walk, it is an ideal spot for family outings and leisurely strolls.",
    "nearby.desc.starfield": "A large mixed-use shopping mall in Suwon, bringing together diverse brand stores, restaurants, and cultural venues including the Star Library. A new Suwon landmark where you can enjoy shopping, dining, and cultural experiences all in one visit.",
    "nearby.desc.convenience": "A 24-hour convenience store is located just steps from the hotel, making it easy to pick up snacks, beverages, and daily essentials at any time. Everything you need during your stay is just a short walk away.",
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
    "intro.desc.1": "伝統の息吹と現代のエネルギーが共存する街、水原。その中心・永通に佇むINSTA HOTELは、ただの宿泊を超えた、滞在そのものが特別な体験となる空間をご提案いたします。",
    "intro.desc.2": "グローバルイノベーションの拠点、サムスン電子とサムスン半導体産業団地に隣接し、ビジネス旅行者に効率的で快適な滞在をお届けします。少し足を延ばせば、ユネスコ世界文化遺産の水原華城と水原行宮、感性豊かな行宮洞の街並み、韓国民俗村の風情ある景色が楽しめます。ミニマルでありながら洗練された感性が漂う客室は、日常の忙しさを忘れ、純粋にくつろぎの時間に集中できるよう設計されています。温かい照明、ふかふかの寝具、品のある空間感が、長い一日の終わりに最上の安らぎをもたらします。ビジネスの充実した旅から、文化と旅行が生み出す新たなインスピレーションまで。都市の活気と静かな休息が共存するINSTA HOTELで、あなただけの特別なストーリーを紡いでください。",
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
    "loc.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea<br><span class=\"addr-ko\">(경기도 수원시 영통구 영통로 94-6, 대한민국)</span>",
    "loc.tel": "電話:",
    "loc.acc.incheon": "仁川国際空港",
    "loc.acc.gimpo": "金浦国際空港",
    "loc.acc.other": "その他のアクセス",
    "loc.acc.incheon.1": "<strong>空港リムジンバス A4100</strong> — 망포駅7番出口乗車 → 仁川空港T1·T2<br>約1時間40分 / ₩13,500 / 1日約37便 / 先着順（予約不要）",
    "loc.acc.incheon.2": "<strong>地下鉄 + 空港鉄道(AREX)</strong> — 망포駅（スインブンダン線）乗換、約2時間",
    "loc.acc.incheon.3": "<strong>タクシー / 自家用車</strong> — 約70km、約1時間〜1時間20分",
    "loc.acc.gimpo.1": "<strong>地下鉄</strong> — 망포駅（スインブンダン線）から金浦空港駅まで乗換、約1時間20分〜1時間40分",
    "loc.acc.gimpo.2": "<strong>タクシー / 自家用車</strong> — 約45km、約50分〜1時間",
    "loc.acc.other.1": "<strong>地下鉄</strong> — スインブンダン線 망포駅（ホテルから徒歩）",
    "loc.acc.other.2": "<strong>市内バス</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.acc.other.3": "<strong>高速バス</strong> — 1550-1（한신大 ↔ 신논현·강남駅）",
    "loc.acc.other.4": "<strong>駐車場</strong> — 宿泊者専用無料駐車場（事前予約不要）",
    "loc.modal.transport": "アクセス案内",
    "loc.modal.naver": "Naver マップで見る",
    "loc.modal.incheon.1": "<strong>空港リムジンバス A4100</strong> — 망포駅7番出口 → T1·T2<br>約1時間40分 / ₩13,500",
    "loc.modal.incheon.2": "<strong>地下鉄+空港鉄道</strong> — 망포駅（スインブンダン線）乗換、約2時間",
    "loc.modal.incheon.3": "<strong>タクシー / 自家用車</strong> — 約70km、約1時間〜1時間20分",
    "loc.modal.gimpo.1": "<strong>地下鉄</strong> — 망포駅から金浦空港駅まで約1時間20〜40分",
    "loc.modal.gimpo.2": "<strong>タクシー / 自家用車</strong> — 約45km、約50分〜1時間",
    "loc.modal.other.1": "<strong>地下鉄</strong> — スインブンダン線 망포駅（徒歩圏内）",
    "loc.modal.other.2": "<strong>市内バス</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.modal.other.3": "<strong>高速バス</strong> — 1550-1（한신大 ↔ 신논현·강남駅）",
    "loc.modal.other.4": "<strong>駐車場</strong> — 宿泊者専用無料駐車場（予約不要）",
    "footer.follow": "INSTAホテルをフォロー",
    "footer.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do",
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
    "fac.col.지원 가능한 언어": "対応言語",
    "fac.text.pet": "ルビールーム（ペット同伴可能客室）",
    "fac.text.wifi1": "ホテル全域でWi-Fiが無料でご利用いただけます。",
    "fac.text.wifi2": "各客室に個別の無料高速Wi-Fiを完備",
    "fac.text.parking": "ホテル専用駐車場が無料でご利用いただけます（事前予約不要）。",
    "fac.item.영어": "英語",
    "fac.item.스페인어": "スペイン語",
    "fac.item.프랑스어": "フランス語",
    "fac.item.이탈리아어": "イタリア語",
    "fac.item.일본어": "日本語",
    "fac.item.한국어": "韓国語",
    "fac.item.러시아어": "ロシア語",
    "fac.item.중국어": "中国語",
    "fac.sub.최고급 비데 일체형 양변기": "安全ダンパー · 自動洗浄 · ワイヤレスリモコン · 温風乾燥 · 温熱シート · リズム洗浄 · ノズル自浄",
    "fac.sub.고급 골드 샤워기": "ハンドシャワー / レインシャワー / 蛇口の3WAYで快適なバスタイムを実現",
    "fac.sub.욕실 환풍기": "ヘンペル ゼロク · BLDCファンモーター（高効率・低騒音） · 定風量換気ファン認証 · 高気密モーターダンパー",
    "fac.sub.객실 환풍기": "ヘンペル ゼロク · BLDCファンモーター（高効率・低騒音） · 定風量換気ファン認証 · 高気密モーターダンパー",
    "fac.sub.LG 천정형 에어컨 / 난방": "LG ウィーゼン 1Way · 素早く快適な冷房と空気清浄機能を兼ね備えた天井型エアコン",
    "fac.sub.무소음 냉장고": "吸収式・電熱管式冷却方式による完全無音の冷蔵庫",
    "fac.sub.전자레인지": "LG DIOSレンジ · スマートインバーターで食材を均一に加熱 · 1,000W高出力で素早く調理 · 抗菌イージークリーンコーティングで油汚れを防止",
    "nav.util_benefit": "公式サイト予約で最大特典",
    "rooms.all_rooms": "全客室",
    "booking.select_room_alert": "客室を選択してください。",
    "booking.min_price": "最安値",
    // gallery.html
    "gal.header.sub": "INSTAホテルの全写真をひと目でご確認ください",
    "gal.tab.all": "すべて",
    "gal.tab.rooms": "客室",
    "gal.tab.nearby": "周辺観光地",
    "gal.photos_suffix": "枚の写真",
    "gal.label.standard": "スタンダードルーム（デザインランダム割当）",
    "gal.label.deluxe": "デラックスルーム（デザインランダム割当）",
    "gal.label.hwaseong": "水原華城",
    "gal.label.everland": "エバーランド",
    "gal.label.caribbean": "カリビアンベイ",
    "gal.label.lake_park": "光教湖水公園",
    "gal.label.folk_village": "韓国民俗村",
    "gal.label.arboretum": "栄興樹木園",
    "gal.label.starfield": "水原スターフィールド",
    "gal.label.convenience": "コンビニ",
    // nearby.html
    "nearby.hero.label": "INSTAホテル",
    "nearby.hero.title": "周辺観光地 & 便利施設",
    "nearby.section.sub": "ホテル近くの名所と便利施設をご確認ください",
    "nearby.desc.hwaseong": "ユネスコ世界文化遺産に登録された朝鮮時代を代表する城郭です。正祖大王が1796年に完成させた華城は、独創的な建築様式と美しい風景で、水原を訪れる観光客が必ず立ち寄る名所として知られています。",
    "nearby.desc.everland": "韓国最大規模のテーマパークで、様々なアトラクション、動物園、季節ごとの花祭りが楽しめます。特にファミリー層に人気で、四季を通じてさまざまなイベントやショーが開催されます。",
    "nearby.desc.caribbean": "エバーランド内に位置する、韓国最大規模のウォーターパークです。ウェーブプール、エクストリームスライダー、室内スパなど多彩な水上アトラクションを完備し、夏の人気スポットとして多くの来場者を集めています。",
    "nearby.desc.lake_park": "水原市永通区にある都市の中心に広がる美しい自然湖水公園です。光教貯水池と源泉貯水池の周辺に整備された広い遊歩道、サイクリングロード、カフェ、文化公演場が揃い、四季を通じて多くの市民と観光客が訪れるヒーリングスポットです。",
    "nearby.desc.folk_village": "朝鮮時代の伝統的な生活文化をリアルに体験できる野外民俗博物館です。茅葺き屋根や瓦屋根の伝統家屋を見学し、様々な民俗公演を楽しみながら韓国の昔の生活文化を感じることができます。",
    "nearby.desc.arboretum": "水原市に位置する都市型樹木園で、多様な植物や季節の花々を楽しめます。自然の中の散策路を歩きながらリフレッシュできる水原の穴場スポットで、ファミリーのお出かけや気ままな散歩にぴったりです。",
    "nearby.desc.starfield": "水原に位置する大規模複合ショッピングモールで、様々なブランドショップ、グルメ、スターライブラリーなどの文化・余暇空間が一堂に集まっています。ショッピング・食事・文化体験を一度に楽しめる水原の新たなランドマークです。",
    "nearby.desc.convenience": "ホテルのすぐ近くに24時間営業のコンビニがあり、軽食、飲み物、生活必需品をいつでも手軽にお買い求めいただけます。滞在中に必要なものはすぐ近くで簡単に解決できます。",
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
    "intro.desc.1": "水原，一座传统气息与现代活力共存的城市。位于其核心地带永通区的INSTA HOTEL，远不止一处落脚之所，更是让每一次停留都成为独特体验的特别空间。",
    "intro.desc.2": "毗邻全球创新中心三星电子与三星半导体产业园区，酒店为商务旅客提供高效便捷、舒适惬意的旅居体验。步行片刻，即可抵达联合国教科文组织世界文化遗产水原华城与水原行宫，漫步充满艺术气息的行宫洞街道，或欣赏韩国民俗村的悠然田园风光。客房以极简而不失感性的风格精心设计，让您从繁忙日常中彻底抽离，专注于身心的放松与滋养。温暖的灯光、柔软的寝具与精致的空间层次感，为忙碌一天画上最舒心的句点。无论是收获满满的商务之旅，还是寻求文化旅行带来的全新灵感，INSTA HOTEL——这座城市活力与静谧休憩和谐共存的空间，邀您在此开启属于您的独特故事。",
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
    "loc.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea<br><span class=\"addr-ko\">(경기도 수원시 영통구 영통로 94-6, 대한민국)</span>",
    "loc.tel": "电话:",
    "loc.acc.incheon": "仁川国际机场",
    "loc.acc.gimpo": "金浦国际机场",
    "loc.acc.other": "其他交通方式",
    "loc.acc.incheon.1": "<strong>机场巴士 A4100</strong> — 望浦站7号出口乘车 → 仁川机场T1·T2<br>约1小时40分 / ₩13,500 / 每日约37班 / 先到先得（无需预约）",
    "loc.acc.incheon.2": "<strong>地铁 + 机场快线</strong> — 在望浦站（水仁盆唐线）换乘，约2小时",
    "loc.acc.incheon.3": "<strong>出租车 / 自驾</strong> — 约70km，约1小时~1小时20分",
    "loc.acc.gimpo.1": "<strong>地铁</strong> — 从望浦站（水仁盆唐线）换乘至金浦机场站，约1小时20分~1小时40分",
    "loc.acc.gimpo.2": "<strong>出租车 / 自驾</strong> — 约45km，约50分~1小时",
    "loc.acc.other.1": "<strong>地铁</strong> — 水仁盆唐线望浦站（距酒店步行可达）",
    "loc.acc.other.2": "<strong>市内公交</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.acc.other.3": "<strong>长途客车</strong> — 1550-1（汉申大学 ↔ 新论岘·江南站）",
    "loc.acc.other.4": "<strong>自驾停车</strong> — 免费专属停车场（无需预约）",
    "loc.modal.transport": "交通指南",
    "loc.modal.naver": "在 Naver 地图上查看",
    "loc.modal.incheon.1": "<strong>机场巴士 A4100</strong> — 望浦站7号出口 → T1·T2<br>约1小时40分 / ₩13,500",
    "loc.modal.incheon.2": "<strong>地铁+机场快线</strong> — 望浦站（水仁盆唐线）换乘，约2小时",
    "loc.modal.incheon.3": "<strong>出租车 / 自驾</strong> — 约70km，约1小时~1小时20分",
    "loc.modal.gimpo.1": "<strong>地铁</strong> — 从望浦站至金浦机场站约1小时20~40分",
    "loc.modal.gimpo.2": "<strong>出租车 / 自驾</strong> — 约45km，约50分~1小时",
    "loc.modal.other.1": "<strong>地铁</strong> — 水仁盆唐线望浦站（步行可达）",
    "loc.modal.other.2": "<strong>市内公交</strong> — 7-1 / 7-1A · 13-5 · 20-2 · 34 / 34-1 · 62-1 · 92-1 · 98",
    "loc.modal.other.3": "<strong>长途客车</strong> — 1550-1（汉申大学 ↔ 新论岘·江南站）",
    "loc.modal.other.4": "<strong>停车</strong> — 免费专属停车场（无需预约）",
    "footer.follow": "关注INSTA酒店",
    "footer.address": "94-6 Yeongtong-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do",
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
    "fac.col.지원 가능한 언어": "服务语言",
    "fac.text.pet": "露比间（宠物友好客房）",
    "fac.text.wifi1": "酒店全区提供免费Wi-Fi。",
    "fac.text.wifi2": "客房内提供免费高速Wi-Fi",
    "fac.text.parking": "免费专属停车场（无需预约）。",
    "fac.item.영어": "英语",
    "fac.item.스페인어": "西班牙语",
    "fac.item.프랑스어": "法语",
    "fac.item.이탈리아어": "意大利语",
    "fac.item.일본어": "日语",
    "fac.item.한국어": "韩语",
    "fac.item.러시아어": "俄语",
    "fac.item.중국어": "中文",
    "fac.sub.최고급 비데 일체형 양변기": "安全阻尼器 · 自动冲水 · 无线遥控 · 暖风烘干 · 加热坐圈 · 律动洗净 · 喷嘴自洁",
    "fac.sub.고급 골드 샤워기": "手持莲蓬头 / 顶喷花洒 / 水龙头三种出水方式，沐浴更加便捷舒适",
    "fac.sub.욕실 환풍기": "Hempel Zeroke · BLDC风机电机（高效/低噪） · 恒风量换气扇认证 · 高气密电机风阀",
    "fac.sub.객실 환풍기": "Hempel Zeroke · BLDC风机电机（高效/低噪） · 恒风量换气扇认证 · 高气密电机风阀",
    "fac.sub.LG 천정형 에어컨 / 난방": "LG Whisen 1Way · 快速冷却，兼备空气净化功能的天花板嵌入式空调",
    "fac.sub.무소음 냉장고": "采用吸收式/热管式制冷方式，实现完全无声运行的冰箱",
    "fac.sub.전자레인지": "LG DIOS微波炉 · 智能变频均匀加热 · 1,000W高功率快速烹饪 · 抗菌EasyClean涂层，防止油污渗入",
    "nav.util_benefit": "官网直订享最大优惠",
    "rooms.all_rooms": "全部客房",
    "booking.select_room_alert": "请选择客房。",
    "booking.min_price": "最低价",
    // gallery.html
    "gal.header.sub": "一览INSTA酒店的所有照片",
    "gal.tab.all": "全部",
    "gal.tab.rooms": "客房",
    "gal.tab.nearby": "周边景点",
    "gal.photos_suffix": "张照片",
    "gal.label.standard": "标准间（随机设计分配）",
    "gal.label.deluxe": "豪华间（随机设计分配）",
    "gal.label.hwaseong": "水原华城",
    "gal.label.everland": "爱宝乐园",
    "gal.label.caribbean": "加勒比海湾",
    "gal.label.lake_park": "光教湖水公园",
    "gal.label.folk_village": "韩国民俗村",
    "gal.label.arboretum": "荣兴树木园",
    "gal.label.starfield": "水原星域购物中心",
    "gal.label.convenience": "便利店",
    // nearby.html
    "nearby.hero.label": "INSTA酒店",
    "nearby.hero.title": "周边景点 & 便利设施",
    "nearby.section.sub": "了解酒店附近的各大景点和便利设施",
    "nearby.desc.hwaseong": "这是被联合国教科文组织列为世界文化遗产的朝鲜时代代表性城郭。由正祖大王于1796年建成的华城以其独特的建筑风格和优美景色闻名，是来访水原游客的必游之地。",
    "nearby.desc.everland": "这是韩国规模最大的主题公园，设有丰富的游乐设施、动物园及各季节花卉节等活动，尤受家庭游客欢迎，全年举办各类活动与演出。",
    "nearby.desc.caribbean": "位于爱宝乐园内，是韩国规模最大的水上乐园。配备波浪池、极限滑道、室内温泉等多种水上娱乐设施，是夏季最受欢迎的热门打卡地。",
    "nearby.desc.lake_park": "坐落于水原市永通区的城市天然湖水公园。光教水库与源泉水库周边设有宽阔步行道、自行车道、咖啡厅及文化表演场所，四季皆有大批市民和游客前来休闲疗愈。",
    "nearby.desc.folk_village": "这是一座可以生动体验朝鲜时代传统生活文化的露天民俗博物馆。游客可参观茅屋、瓦房等传统民居，观赏各类民俗表演，感受韩国古代生活风貌。",
    "nearby.desc.arboretum": "位于水原市的城市植物园，可欣赏各类植物及四季鲜花。这里是水原的隐藏打卡地，沿自然步行道漫步，心旷神怡，非常适合家庭出游和悠闲散步。",
    "nearby.desc.starfield": "这是位于水原的大型综合购物中心，汇聚各类品牌门店、餐厅以及「星空图书馆」等文化休闲空间。购物、用餐、文化体验一站搞定，是水原的全新地标。",
    "nearby.desc.convenience": "酒店紧邻24小时便利店，随时可购买简餐、饮料及日常生活用品，十分方便。住宿期间所需物品，步行即可轻松解决。",
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
  sessionStorage.setItem('siteLang', lang);

  // data-i18n 텍스트 교체
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // data-i18n-html innerHTML 교체 (strong 태그 등 포함 요소)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
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
  if (typeof updateDateUI     === 'function') updateDateUI();
  if (typeof syncMobPanel     === 'function') syncMobPanel();

  // 캘린더 월 제목 + 요일 헤더 갱신
  if (typeof renderCalendar === 'function') renderCalendar();

  // 모달이 열려 있으면 재렌더링
  if (typeof openRoomModal === 'function' && typeof _openModalRoomId !== 'undefined' && _openModalRoomId) {
    openRoomModal(_openModalRoomId);
  }

  // 갤러리 그리드 레이블 / 사진 수 갱신
  if (typeof syncGalleryLang === 'function') syncGalleryLang();

  // 주변안내 탭·설명 갱신
  if (typeof syncNearbyLang === 'function') syncNearbyLang();
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

// 캘린더 월 제목 포맷 (언어별 형식 다름)
var _EN_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var _JA_MONTHS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var _ZH_MONTHS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

function fmtCalMonth(year, month) {
  if (currentLang === 'en') return _EN_MONTHS[month] + ' ' + year;
  if (currentLang === 'ja') return year + '年' + _JA_MONTHS[month];
  if (currentLang === 'zh') return year + '年' + _ZH_MONTHS[month];
  return year + '년 ' + (month + 1) + '월';
}

// 캘린더 요일 이름 배열 (일~토 순서)
function calDayNames() {
  if (currentLang === 'en') return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  if (currentLang === 'ja') return ['日','月','火','水','木','金','土'];
  if (currentLang === 'zh') return ['日','一','二','三','四','五','六'];
  return ['일','월','화','수','목','금','토'];
}

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

// 페이지 로드 시 저장된 언어 적용 (sessionStorage: 탭을 닫으면 초기화 → 새 방문 시 항상 한국어)
document.addEventListener('DOMContentLoaded', function() {
  var saved = sessionStorage.getItem('siteLang') || 'ko';
  setLanguage(saved);
});
