import { Box, Button, TextField } from "@mui/material"

function App(){
    function githubLogin(){
        // ... github api 用户授权
        let githubOAuthURL = 'https://github.com/login/oauth/authorize'
        let clientID = '' // github oauth生成
        let redirectURL = '' // github oauth生成
        location.href = `${githubOAuthURL}?client_id=${clientID}&redirect_url=${redirectURL}`
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6 moblieHideBox">
                    <div className="squareBox" style={{height:'100vh'}}>
                        <img src="./welcome.png" alt="welcome"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div
                        className="
                            d-flex
                            align-items-center
                            justify-content-center
                        "
                        style={{minHeight:'100vh'}}
                    >
                        <Box sx={{m:2,width:350}}>
                            <div className="text-center">
                                <div className="p-3">
                                    <img src="./logo.svg" alt="logo" height={50} />
                                </div>
                                <div className="p-3">
                                    <h2>欢迎</h2>
                                    <small>登录 Bytebase 以继续使用 Bytebase Hub。</small>
                                </div>
                                <div className="p-3">
                                    <Button variant="outlined" size="large" color="inherit" fullWidth sx={{ mt:2 }} onClick={githubLogin}>GitHub</Button>
                                    <Button variant="outlined" size="large" color="inherit" fullWidth sx={{ mt:2 }}>登录方式2</Button>
                                    <Button variant="outlined" size="large" color="inherit" fullWidth sx={{ mt:2 }}>登录方式3</Button>
                                    <hr />
                                    <TextField label="电子邮件地址" variant="outlined" fullWidth />
                                    <Button variant="contained" size="large" color="primary" fullWidth sx={{ mt:2 }}>继续</Button>
                                </div>
                            </div>
                            <small className="mx-3">没有帐户？ <a href="">注册</a></small>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
