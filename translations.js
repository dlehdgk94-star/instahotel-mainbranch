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
