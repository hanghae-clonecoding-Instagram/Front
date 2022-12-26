<Box>
<Logo/>
<InputBox>
  <p style={{textAlign:'center', margin:'0 0 15px 0', lineHeight:'22px'}}>
    친구들의 사진과 동영상을 보려면<br/> 가입하세요
  </p>
  {/* 소셜로그인 컴포넌트 */}
  {/* <KakaoTalkLogin/> */}
  <Kakao> 
    <RiKakaoTalkFill style={{ fontSize:'16px', marginRight: '5px'}}/> 
    <span>카카오 로그인</span>
  </Kakao>
  <div className="line">
    <hr className="hr_solid"/>
    <p>또는</p>
    <hr className="hr_solid"/>
  </div>
  <input
    type ='email'
    value={ userEmail || ""} 
    placeholder = '이메일을 입력해주세요'
    onChange = {handlerEmail}
    />
  <input
    type ='text'
    value={ username || ""} 
    placeholder = '이름을 입력해주세요'
    onChange = {handlerUsername}
    />
  <input 
    type ='password'
    value={ password || ""} 
    placeholder="비밀번호를 입력해주세요"
    onChange = {handlerPassword}
    />
  <input 
    type ='password'
    value={ passwordCheck || ""} 
    placeholder="비밀번호를 확인해주세요"
    onChange = {handlerPasswordCheck}
    />
  <button>회원가입</button>


</InputBox>
</Box>