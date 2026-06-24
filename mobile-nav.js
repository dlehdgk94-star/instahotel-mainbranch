(function () {
    var path = window.location.pathname.replace(/\\/g, '/');
    var isSubfolder = path.indexOf('/rooms/') !== -1;
    var base = isSubfolder ? '../' : '';

    function isActive(page) {
        if (page === 'index.html') return /index\.html$|\/insta-hotel-html\/?$|\/[^/]*$/.test(path) && !isSubfolder && !/rooms\.html|gallery\.html|nearby\.html|booking/.test(path);
        if (page === 'rooms.html') return /rooms\.html$/.test(path) || isSubfolder;
        if (page === 'gallery.html') return /gallery\.html$/.test(path);
        if (page === 'nearby.html') return /nearby\.html$/.test(path);
        return false;
    }

    function link(page, label) {
        var cls = isActive(page) ? ' class="mob-active"' : '';
        return '<li><a href="' + base + page + '"' + cls + '>' + label + '</a></li>';
    }

    var overlay = document.createElement('div');
    overlay.id = 'mobileNavOverlay';
    overlay.innerHTML =
        '<div id="mobileNavDrawer">' +
            '<button id="mobileNavClose"><i class="fa-solid fa-xmark"></i></button>' +
            '<div class="mob-nav-logo">' +
                '<a href="' + base + 'index.html"><img src="' + base + 'logo.svg" alt="INSTA HOTEL"></a>' +
            '</div>' +
            '<ul class="mob-nav-links">' +
                link('index.html', '개요') +
                link('rooms.html', '객실') +
                link('gallery.html', '갤러리') +
                link('nearby.html', '주변안내') +
                '<li><a href="#">멤버쉽</a></li>' +
            '</ul>' +
            '<div class="mob-nav-lang">' +
                '<button class="mob-lang-btn" onclick="toggleMobLangDropdown(event)">' +
                    '<i class="fa-solid fa-globe"></i>' +
                    '<span id="mobLangCode">KO</span>' +
                    '<i class="fa-solid fa-chevron-down mob-lang-chevron"></i>' +
                '</button>' +
                '<div class="mob-lang-dropdown" id="mobLangDropdown">' +
                    '<span class="mob-lang-option active" data-code="KO" onclick="mobSelectLang(this)">한국어</span>' +
                    '<span class="mob-lang-option" data-code="EN" onclick="mobSelectLang(this)">English</span>' +
                    '<span class="mob-lang-option" data-code="JA" onclick="mobSelectLang(this)">日本語</span>' +
                    '<span class="mob-lang-option" data-code="ZH" onclick="mobSelectLang(this)">中文</span>' +
                '</div>' +
            '</div>' +
            '<div class="mob-nav-footer">' +
                '<a href="https://www.instagram.com/instar_hotel_/" target="_blank"><i class="fa-brands fa-instagram"></i></a>' +
                '<div class="mob-nav-contact">+82 31-203-4301</div>' +
            '</div>' +
        '</div>';

    window.toggleMobLangDropdown = function(e) {
        e.stopPropagation();
        var dd = document.getElementById('mobLangDropdown');
        dd.classList.toggle('open');
    };

    window.mobSelectLang = function(el) {
        var code = el.getAttribute('data-code');
        overlay.querySelectorAll('.mob-lang-option').forEach(function(o){ o.classList.remove('active'); });
        el.classList.add('active');
        var mobCode = document.getElementById('mobLangCode');
        if (mobCode) mobCode.textContent = code;
        var desktopCode = document.getElementById('langCode');
        if (desktopCode) desktopCode.textContent = code;
        var desktopOpts = document.querySelectorAll('.lang-option');
        desktopOpts.forEach(function(o){ o.classList.toggle('active', o.getAttribute('data-code') === code); });
        document.getElementById('mobLangDropdown').classList.remove('open');
    };

    function openNav() {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    var isIndexPage = /index\.html$|\/insta-hotel-html\/?$/.test(path) && !isSubfolder && !/rooms\.html|gallery\.html|nearby\.html|booking/.test(path);

    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(overlay);

        // index.html 외 모든 페이지: sticky 래퍼 + 서브헤더 + 예약하기 버튼 주입 (모바일 전용)
        if (!isIndexPage && window.innerWidth <= 768) {
            // rooms.html 등 기존 sticky-wrapper를 모바일에서 JS로 직접 숨김
            var existingSticky = document.querySelector('.sticky-wrapper');
            if (existingSticky && window.innerWidth <= 768) {
                existingSticky.style.setProperty('display', 'none', 'important');
            }

            // ── 예약 팝업 HTML 주입 (index.html과 동일 구조, 동일 CSS 클래스 사용) ──
            // 각 팝업을 body에 직접 append (wrapper div 없이)
            function injectPopup(html) {
                var tmp = document.createElement('div');
                tmp.innerHTML = html;
                document.body.appendChild(tmp.firstElementChild);
            }
            injectPopup(
                '<div class="booking-dropdown calendar-dropdown" id="ext-calendarPopup" onclick="event.stopPropagation()">' +
                    '<i class="fa-solid fa-xmark dropdown-close" onclick="closeDropdowns(event)"></i>' +
                    '<div class="cal-months-wrap">' +
                        '<div class="cal-month">' +
                            '<div class="cal-month-header">' +
                                '<i class="fa-solid fa-chevron-left" onclick="changeMonth(-1)"></i>' +
                                '<span id="ext-cal-month-title-left"></span>' +
                                '<span></span>' +
                            '</div>' +
                            '<div class="cal-grid" id="ext-cal-grid-left"></div>' +
                        '</div>' +
                        '<div class="cal-month">' +
                            '<div class="cal-month-header">' +
                                '<span></span>' +
                                '<span id="ext-cal-month-title-right"></span>' +
                                '<i class="fa-solid fa-chevron-right" onclick="changeMonth(1)"></i>' +
                            '</div>' +
                            '<div class="cal-grid" id="ext-cal-grid-right"></div>' +
                        '</div>' +
                    '</div>' +
                    '<button class="dropdown-done-btn" onclick="closeDropdowns(event)">완료</button>' +
                '</div>'
            );
            injectPopup(
                '<div class="booking-dropdown guest-dropdown" id="ext-guestPopup" onclick="event.stopPropagation()">' +
                    '<i class="fa-solid fa-xmark dropdown-close" onclick="closeDropdowns(event)"></i>' +
                    '<div class="guest-row">' +
                        '<div class="guest-label-box"><span class="g-title">객실</span></div>' +
                        '<div class="guest-controls">' +
                            '<button class="btn-ctrl" onclick="updateGuest(\'room\',-1)"><i class="fa-solid fa-minus"></i></button>' +
                            '<span class="val-ctrl" id="ext-val-room">1</span>' +
                            '<button class="btn-ctrl" onclick="updateGuest(\'room\',1)"><i class="fa-solid fa-plus"></i></button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="guest-row">' +
                        '<div class="guest-label-box"><span class="g-title">성인</span></div>' +
                        '<div class="guest-controls">' +
                            '<button class="btn-ctrl" onclick="updateGuest(\'adult\',-1)"><i class="fa-solid fa-minus"></i></button>' +
                            '<span class="val-ctrl" id="ext-val-adult">1</span>' +
                            '<button class="btn-ctrl" onclick="updateGuest(\'adult\',1)"><i class="fa-solid fa-plus"></i></button>' +
                        '</div>' +
                    '</div>' +
                    '<button class="dropdown-done-btn" onclick="closeDropdowns(event)">완료</button>' +
                '</div>'
            );
            injectPopup(
                '<div class="booking-dropdown price-popup" id="ext-pricePopup" onclick="event.stopPropagation()">' +
                    '<i class="fa-solid fa-xmark dropdown-close" onclick="closeDropdowns(event)"></i>' +
                    '<div id="ext-pricePopupList"></div>' +
                '</div>'
            );

            // ── mob-ext-panel HTML (index.html mob-book-panel과 동일 구조) ──
            var stickyTop = document.createElement('div');
            stickyTop.id = 'mob-sticky-top';
            stickyTop.innerHTML =
                '<div id="mob-sub-bar">' +
                    '<span class="mob-hotel-name">인스타 오토그래프 컬렉션</span>' +
                    '<span class="mob-rating-dots">' +
                        '<i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i>' +
                        '<i class="fa-solid fa-circle"></i><i class="fa-solid fa-circle"></i>' +
                        '<i class="fa-solid fa-circle-half-stroke"></i>' +
                    '</span>' +
                    '<span class="mob-rating-text">4.9 · 1446 후기</span>' +
                '</div>' +
                '<div id="mob-book-bar">' +
                    '<button id="mob-book-bar-btn" onclick="toggleExtPanel(event)">예약하기</button>' +
                '</div>' +
                '<div id="mob-ext-panel">' +
                    '<div class="mob-panel-row" onclick="toggleCalendarPopup(event)">' +
                        '<span class="mob-panel-label" id="mob-ext-nights"><i class="fa-regular fa-calendar"></i> 날짜 (1박)</span>' +
                        '<div class="mob-panel-value">' +
                            '<span id="mob-ext-checkin">날짜 선택</span>' +
                            '<i class="fa-solid fa-arrow-right" style="font-size:12px;color:#aaa;"></i>' +
                            '<span id="mob-ext-checkout"></span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="mob-panel-row" onclick="toggleGuestPopup(event)">' +
                        '<span class="mob-panel-label">객실 &amp; 투숙객</span>' +
                        '<div class="mob-panel-value">' +
                            '<span id="mob-ext-guests">1 객실, 1 성인</span>' +
                            '<i class="fa-solid fa-chevron-down" style="font-size:12px;color:#aaa;margin-left:auto;"></i>' +
                        '</div>' +
                    '</div>' +
                    '<div class="mob-panel-row" onclick="togglePricePopup(event)">' +
                        '<span class="mob-panel-label">특별 요금</span>' +
                        '<div class="mob-panel-value">' +
                            '<span id="mob-ext-price-lbl">최저 요금</span>' +
                            '<i class="fa-solid fa-chevron-down" style="font-size:12px;color:#aaa;margin-left:auto;"></i>' +
                        '</div>' +
                    '</div>' +
                    '<div style="padding:12px 16px 16px;">' +
                        '<button class="mob-panel-confirm" onclick="goExtBooking()">예약하기</button>' +
                    '</div>' +
                '</div>';

            // ── 날짜/인원/요금 상태 ──
            var _extToday = new Date(); _extToday.setHours(0,0,0,0);
            var _extTomorrow = new Date(_extToday); _extTomorrow.setDate(_extToday.getDate()+1);
            var extCI = _extToday, extCO = _extTomorrow;
            var extCurMonth = new Date(); extCurMonth.setDate(1);
            var extGuests = { room: 1, adult: 1 };
            var extRoomId = null;
            var extDatesSelected = true;

            var EXT_PRICES = {
                edelweiss:{prices:[49500,58500,72000],maxGuests:2},
                aurora:   {prices:[58000,67000,81000],maxGuests:2},
                glorio:   {prices:[67000,76000,99000],maxGuests:2},
                envidion: {prices:[76000,85000,108000],maxGuests:3},
                special:  {prices:[99000,108000,126000],maxGuests:4},
                ruby:     {prices:[76000,85000,108000],maxGuests:2}
            };
            var EXT_NAMES = {edelweiss:'이코노미 룸',aurora:'스탠다드 룸',glorio:'디럭스 룸',envidion:'트윈 룸',special:'스페셜 룸',ruby:'루비 룸'};
            var EXT_ORDER = ['edelweiss','aurora','glorio','envidion','special','ruby'];

            function extFmtDate(d) {
                var days=['일','월','화','수','목','금','토'];
                return (d.getMonth()+1)+'월 '+d.getDate()+'일, '+days[d.getDay()];
            }
            function extFmtWon(n) { return n.toLocaleString('ko-KR'); }
            function extNightRate(id, date) {
                var r=EXT_PRICES[id]; if(!r) return 0;
                var d=date.getDay(); return d===6?r.prices[2]:d===5?r.prices[1]:r.prices[0];
            }
            function extSyncPanel() {
                var nights = extCI && extCO ? Math.round((extCO-extCI)/86400000) : 1;
                var nl=document.getElementById('mob-ext-nights');
                if(nl) nl.innerHTML='<i class="fa-regular fa-calendar"></i> 날짜 ('+nights+'박)';
                var ci=document.getElementById('mob-ext-checkin'), co=document.getElementById('mob-ext-checkout');
                if(ci) ci.textContent = extCI ? extFmtDate(extCI) : '날짜 선택';
                if(co) co.textContent = extCO ? extFmtDate(extCO) : (extCI ? '체크아웃 선택' : '');
                var g=document.getElementById('mob-ext-guests');
                if(g) g.textContent = extGuests.room+' 객실, '+extGuests.adult+' 성인';
                var p=document.getElementById('mob-ext-price-lbl');
                if(p) {
                    if(extRoomId && extCI && extCO) {
                        var tot=0; for(var i=0;i<nights;i++){ var nd=new Date(extCI); nd.setDate(nd.getDate()+i); tot+=extNightRate(extRoomId,nd); } tot*=extGuests.room;
                        p.textContent=(EXT_NAMES[extRoomId]||'')+' · '+nights+'박 총 '+extFmtWon(tot)+'원';
                    } else { p.textContent='최저 요금'; }
                }
            }
            function extRenderCal() {
                var ly=extCurMonth.getFullYear(), lm=extCurMonth.getMonth();
                var rd=new Date(ly,lm+1,1), ry=rd.getFullYear(), rm=rd.getMonth();
                var tl=document.getElementById('ext-cal-month-title-left'), tr=document.getElementById('ext-cal-month-title-right');
                var gl=document.getElementById('ext-cal-grid-left'), gr=document.getElementById('ext-cal-grid-right');
                if(tl) tl.textContent=ly+'년 '+(lm+1)+'월';
                if(tr) tr.textContent=ry+'년 '+(rm+1)+'월';
                if(gl) gl.innerHTML=extGenMonth(ly,lm);
                if(gr) gr.innerHTML=extGenMonth(ry,rm);
            }
            function extGenMonth(year, month) {
                var dn=['일','월','화','수','목','금','토'];
                var html=dn.map(function(d){ return '<div class="cal-day-name">'+d+'</div>'; }).join('');
                var fd=new Date(year,month,1).getDay(), dim=new Date(year,month+1,0).getDate();
                var today=new Date(); today.setHours(0,0,0,0);
                for(var i=0;i<fd;i++) html+='<div class="cal-date faded"></div>';
                for(var d=1;d<=dim;d++){
                    var dt=new Date(year,month,d);
                    var ds=year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
                    var cls='cal-date', clk='';
                    if(dt<today){ cls+=' faded'; }
                    else {
                        clk='onclick="event.stopPropagation();extSelectDate(\''+ds+'\')"';
                        if(extCI && dt.getTime()===extCI.getTime()) cls+=extCO?' selected-start':' selected-single';
                        if(extCO && dt.getTime()===extCO.getTime()) cls+=' selected-end';
                        if(extCI && extCO && dt>extCI && dt<extCO) cls+=' in-range';
                    }
                    html+='<div class="'+cls+'" '+clk+'>'+d+'</div>';
                }
                return html;
            }
            function extPopulatePrice() {
                if(!extCI||!extCO) return;
                var listEl=document.getElementById('ext-pricePopupList'); if(!listEl) return;
                var nights=Math.round((extCO-extCI)/86400000);
                listEl.innerHTML=EXT_ORDER.map(function(id){
                    var pt=EXT_PRICES[id], title=EXT_NAMES[id];
                    var avail=pt && extGuests.adult<=pt.maxGuests*extGuests.room;
                    var tot=0; for(var i=0;i<nights;i++){ var nd=new Date(extCI); nd.setDate(nd.getDate()+i); tot+=extNightRate(id,nd); } tot*=extGuests.room;
                    if(!avail) return '<div class="price-popup-row price-popup-unavail"><span class="price-popup-name">'+title+'</span><span class="price-popup-total" style="color:rgb(180,180,180);">최대 '+(pt.maxGuests*extGuests.room)+'인</span></div>';
                    return '<div class="price-popup-row" onclick="extSelectRoom(\''+id+'\')"><span class="price-popup-name">'+title+'</span><span class="price-popup-total">'+nights+'박 총 '+extFmtWon(tot)+'원</span></div>';
                }).join('');
            }

            window.toggleCalendarPopup = function(e) {
                if(e) e.stopPropagation();
                var cp=document.getElementById('ext-calendarPopup'), gp=document.getElementById('ext-guestPopup'), pp=document.getElementById('ext-pricePopup');
                if(gp) gp.classList.remove('active'); if(pp) pp.classList.remove('active');
                if(cp){ var opening=!cp.classList.contains('active'); cp.classList.toggle('active'); if(opening) extRenderCal(); }
            };
            window.toggleGuestPopup = function(e) {
                if(e) e.stopPropagation();
                var cp=document.getElementById('ext-calendarPopup'), gp=document.getElementById('ext-guestPopup'), pp=document.getElementById('ext-pricePopup');
                if(cp) cp.classList.remove('active'); if(pp) pp.classList.remove('active');
                if(gp) gp.classList.toggle('active');
            };
            window.togglePricePopup = function(e) {
                if(e) e.stopPropagation();
                var cp=document.getElementById('ext-calendarPopup'), gp=document.getElementById('ext-guestPopup'), pp=document.getElementById('ext-pricePopup');
                if(cp) cp.classList.remove('active'); if(gp) gp.classList.remove('active');
                extPopulatePrice();
                if(pp) pp.classList.toggle('active');
            };
            window.closeDropdowns = function(e) {
                if(e) e.stopPropagation();
                ['ext-calendarPopup','ext-guestPopup','ext-pricePopup'].forEach(function(id){ var el=document.getElementById(id); if(el) el.classList.remove('active'); });
            };
            window.changeMonth = function(dir) {
                event.stopPropagation();
                extCurMonth.setMonth(extCurMonth.getMonth()+dir);
                extRenderCal();
            };
            window.extSelectDate = function(ds) {
                var p=ds.split('-'), clicked=new Date(parseInt(p[0]),parseInt(p[1])-1,parseInt(p[2])); clicked.setHours(0,0,0,0);
                var today=new Date(); today.setHours(0,0,0,0); if(clicked<today) return;
                if(!extCI||(extCI&&extCO)){ extCI=clicked; extCO=null; extDatesSelected=false; extRoomId=null; }
                else if(extCI&&!extCO){
                    if(clicked>extCI){ extCO=clicked; extDatesSelected=true; }
                    else if(clicked.getTime()!==extCI.getTime()){ extCI=clicked; extDatesSelected=false; extRoomId=null; }
                }
                extSyncPanel(); extRenderCal();
                if(extDatesSelected) extPopulatePrice();
            };
            window.updateGuest = function(type, delta) {
                var nv=extGuests[type]+delta;
                if(nv<1) nv=1;
                extGuests[type]=nv;
                var el=document.getElementById('ext-val-'+type); if(el) el.textContent=nv;
                extSyncPanel(); extPopulatePrice();
            };
            window.extSelectRoom = function(id) {
                extRoomId=id; extSyncPanel();
                var pp=document.getElementById('ext-pricePopup'); if(pp) pp.classList.remove('active');
            };

            var header = document.querySelector('.top-header');
            if (header && header.parentNode) {
                header.parentNode.insertBefore(stickyTop, header.nextSibling);
            }

            window.toggleExtPanel = function(e) {
                if (e) e.stopPropagation();
                var panel = document.getElementById('mob-ext-panel');
                var bookBar = document.getElementById('mob-book-bar');
                if (!panel) return;
                if (panel.classList.contains('open')) {
                    panel.classList.remove('open');
                    if (bookBar) bookBar.style.display = '';
                } else {
                    panel.classList.add('open');
                    if (bookBar) bookBar.style.display = 'none';
                }
            };
            window.goExtBooking = function() {
                if (!extCI || !extCO) { window.toggleCalendarPopup(); return; }
                var nights = Math.round((extCO-extCI)/86400000);
                var total = 0;
                if (extRoomId) {
                    for (var i=0; i<nights; i++) { var nd=new Date(extCI); nd.setDate(nd.getDate()+i); total+=extNightRate(extRoomId,nd); }
                    total *= extGuests.room;
                    localStorage.setItem('instaHotelBooking', JSON.stringify({
                        roomId: extRoomId, roomName: EXT_NAMES[extRoomId]||extRoomId,
                        checkin: extCI.toISOString(), checkout: extCO.toISOString(),
                        nights: nights, roomCount: extGuests.room, adultCount: extGuests.adult, totalPrice: total
                    }));
                }
                window.location.href = base + 'booking.html';
            };

            // 초기화: 달력 렌더링 + 패널 라벨 동기화
            extRenderCal();
            extSyncPanel();
            document.addEventListener('click', function(e) {
                var panel = document.getElementById('mob-ext-panel');
                var bookBar = document.getElementById('mob-book-bar');
                if (panel && !stickyTop.contains(e.target)) {
                    panel.classList.remove('open');
                    if (bookBar) bookBar.style.display = '';
                }
                // 팝업 바깥 클릭 시 닫기
                var popupIds = ['ext-calendarPopup','ext-guestPopup','ext-pricePopup'];
                popupIds.forEach(function(id) {
                    var el = document.getElementById(id);
                    if (el && el.classList.contains('active') && !el.contains(e.target) && !stickyTop.contains(e.target)) {
                        el.classList.remove('active');
                    }
                });
            });

            // 스크롤 기반 sticky 구현 (position:sticky 브라우저 호환 이슈 우회)
            if (window.innerWidth <= 768) {
                setTimeout(function() {
                    var el = document.getElementById('mob-sticky-top');
                    if (!el) return;
                    var triggerY = el.getBoundingClientRect().top + window.pageYOffset;
                    var elH = el.offsetHeight;
                    var spacer = document.createElement('div');
                    spacer.id = 'mob-sticky-spacer';
                    spacer.style.cssText = 'height:' + elH + 'px;display:none;flex-shrink:0;';
                    el.parentNode.insertBefore(spacer, el.nextSibling);
                    function onScroll() {
                        if (window.pageYOffset >= triggerY) {
                            el.classList.add('is-fixed');
                            spacer.style.display = 'block';
                        } else {
                            el.classList.remove('is-fixed');
                            spacer.style.display = 'none';
                        }
                    }
                    window.addEventListener('scroll', onScroll, { passive: true });
                    onScroll();
                }, 80);
            }
        }

        var hamburger = document.querySelector('.hamburger-menu');
        if (hamburger) hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            openNav();
        });

        document.getElementById('mobileNavClose').addEventListener('click', closeNav);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeNav();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeNav();
        });
    });
})();
