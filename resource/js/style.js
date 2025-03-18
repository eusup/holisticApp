$(document).ready(function () {

    // 로그인 확인인 임시 기능
    $(".longin-btn-wrap .btn-login").click(function () {
        var idVal = $("#userId").val();
        var pwVal = $("#userPw").val();

        if (idVal === "test" && pwVal === "test") {
            window.location.href = "page01.main.html";
        } else {
            dimmedOpen();
            $(".dimmed .popup.box").addClass("act");
        }
    });

    // 비밀번호 보기
    $("label input+.icn-only:has(.eyes)").click(function () {
        let passwordInput = $(this).siblings("input");
        let type = passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type", type);
        $(this).toggleClass("act");
        return false;
    });

    $(".tab-in-tab li").click(function () {
        $(this).siblings("li").removeClass("act");
        $(this).addClass("act");
    });

    // 텍스트 복사
    $(".copy").click(function () {
        var text = $(this).find("span").text();
        var alertBox = $(".copy-alert");
        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(text).select();
        document.execCommand("copy");
        tempInput.remove();

        // 복사됨 alert 노출
        clearTimeout(alertBox.data("timeout"));
        alertBox.addClass("act");
        var timeout = setTimeout(function () {
            alertBox.removeClass("act");
        }, 2000);
        alertBox.data("timeout", timeout);
    });

    // 탭
    $(".tab>ul>li .btn").click(function () {
        const idx = $(this).parent("li").index();
        $(".tab-contents>div").removeClass("act");
        $(".tab-contents>div").eq(idx).addClass("act");
    });

    // 모바일메뉴 오픈
    $("#m_menuICN").click(function () {
        dimmedOpen();
        $("#mMenu").addClass("act");
    });

    // 팝업닫기
    $(".popup .btn.close").click(function () {
        dimmedClosed()
    });

    // 뒤로가기
    $(".btn.back").click(function () {
        back();
    });
});

// 팝업창 열기
function dimmedOpen() {
    $("#dimmed").addClass("act");
};

// 팝업창 닫기
function dimmedClosed() {
    $("#dimmed").removeClass("act");
    $("#dimmed .popup").removeClass("act");
};

// 문자열 숫자만 나오도록
function checkNum(event) {
    if (event.key === '.'
        || event.key === '-'
        || event.key >= 0 && event.key <= 9) {
        return true;
    }

    return false;
};

function back() {
    window.history.back();
}
