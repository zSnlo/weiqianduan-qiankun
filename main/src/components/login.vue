<template>
    <div style="display: flex;align-items: center;height:100vh;background:#f6f6f6">
        <div class="charm-body">
            <div class="charm-body-info">
                <div class="info-logo">
                    <!-- <img alt="" src="https://cdn.pingcode.com/static/pc-charm/assets/images/logo.png?v=2.43.1"> -->
                    </div>
                    <div class="info-image">
                        <img src="https://cdn.pingcode.com/static/pc-charm/assets/images/pingcode-intro-03.png?v=2.43.1">
                    </div>
                </div>

                <div class="charm-body-content">
                    <el-row style="font-size:30px;text-align:left">登录</el-row>
                    <el-row style="color:#888;text-align:left">通过帐号密码登录团队，或者切换为 <a href="">手机验证码登录</a></el-row>

                    <div style="padding-top:40px;">
                        <el-form :inline="false" class="loginFormLabel">
                            <el-row style="font-size:16px;text-align:left;margin:10px 0 10px 0;color:#666">手机号</el-row>
                            <el-row style="font-size:16px;text-align:left">
                                <el-input v-model="formData.mobile" size="medium" style="font-size:18px" class="myInput"></el-input>
                            </el-row>

                            <el-row style="font-size:16px;text-align:left;margin:20px 0 10px 0;color:#666">密码</el-row>
                            <el-row style="font-size:16px;text-align:left">
                                <el-input v-model="formData.password" size="medium" style="font-size:18px" show-password></el-input>
                            </el-row>

                            <el-button type="primary" style="margin:30px 0 10px 0;width:100%;font-size:18px;height:50px;" @click="doLogin">登录</el-button>
                            <el-row style="text-align:right;color:#666;font-size:14px">
                                <a href="">忘记密码?</a>
                            </el-row>
                        </el-form>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"index_login",
    data(){
        return{
            formData:{mobile:'',password:''}
        }
    },

    mounted () {
       
    },

    methods: {
        doLogin(){
            sessionStorage.setItem('account.token','a')
            location.reload();
        }
    },
}
</script>

<style>
.charm-body {
    padding: 60px 0;
    width: 1000px;
    height:400px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    position: relative;
    background: #fff;
    box-shadow: 0 2px 30px 0 rgb(95 111 124 / 9%);
}

.charm-body .charm-body-info {
    flex: 1;
    flex-direction: column;
    border-right: 1px solid #eee;
    display: flex;
}

.charm-body .charm-body-info .info-image {
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
}


.charm-body .charm-body-info .info-logo {
    height: 40px;
}

.charm-body .charm-body-info .info-logo img {
    height: 100%;
}

img {
    vertical-align: middle;
    border-style: none;
}

.charm-body .charm-body-content {
    width: 550px;
    padding: 0 42px;
}

.charm-body .charm-body-content .charm-body-content-main {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.el-input__inner{
    padding:20px 15px;
}
</style>