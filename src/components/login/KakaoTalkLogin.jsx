export const KAKAO_AUTH_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=40c30095a62e9d6e05f9022ba3546597&redirect_uri=https://woooo.shop/api/user/kakao/callback&response_type=code'

// 위의 코드를 눌러 동의하기 페이지가 나오면 redirect화면이 나온다. 
// redirect화면에서 카카오 인증 및 서버에서 작동이 이루어짐?( 여기는 정확하게.....모름 )

// redirect view
// url이 변화되었을 것, => localhost8080/kakakoLogin?code=( 인가코드를 가져와야함 )
// redirect화면에서 보여지는 code를 가져와야 한다
// window.location.href의 메서드를 이용해 가져옴 => 구현됨 KakaoRedirect.jsx

// 해당 경로(리다이렉트 URL)에 도달했을 때 보여줄 컴포넌트 생성
// (리다이렉트 화면으로 사용됨, 로딩중 화면준비 -> 인가코드 받아야함) 
// Router설정
// 