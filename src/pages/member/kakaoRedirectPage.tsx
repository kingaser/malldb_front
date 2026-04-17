import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { save } from "../../slices/loginSlice";

const KakaoRedirectPage = () => {

  const dispatch = useDispatch();
  
  const [searchParams] = useSearchParams()
  const authCode = searchParams.get("code")

  const navigate = useNavigate()

  // authCode -> Access Token
  useEffect(() => {

    if (authCode) {
      getAccessToken(authCode).then(accessToken => {
        console.log('access Token ')
        console.log(accessToken)

        getMemberWithAccessToken(accessToken).then(result => {
          console.log('------------------------')
          console.log(result)

          dispatch(save(result))

          if (result.social) {
            navigate('/member/modify')
          }
        })
      })
    }

  }, [authCode])

  return (
    <>
      <Navigate to={'/'}/>
    </>
  )
}

export default KakaoRedirectPage;