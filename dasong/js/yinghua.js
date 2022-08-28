// alert(1) 测试成功
const goodList = [{
    id: 1,
    level: '一等奖',
    Poetry: '《木兰诗》',
    epicist: '麦积山'
},
{
    id: 2,
    level: '二等奖',
    Poetry: '《虹七》',
    epicist: '斜月寒星'
},
{
    id: 2,
    level: '二等奖',
    Poetry: '《天府-战魂曲》',
    epicist: '一梦影音阁'
},
{
    id: 2,
    level: '二等奖',
    Poetry: '《东宫》',
    epicist: '霜颜无朵'
},
{
    id: 2,
    level: '二等奖',
    Poetry: '《桃花笑》',
    epicist: '打完游戏去睡觉'
},
{
    id: 2,
    level: '二等奖',
    Poetry: '《天龙八部》',
    epicist: '无相阁'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《执念》',
    epicist: 'GUS文歌'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《薄暮》',
    epicist: '蹄花呀'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《止戈》',
    epicist: '伊祁紫羽'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《冠世一战》',
    epicist: '奥特曼快跑'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《长生诀》',
    epicist: '青梅呀'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《牵丝戏》',
    epicist: '网骗大军雨萌酱'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《地狱少女》',
    epicist: '言知蹊'
},
{
    id: 3,
    level: '三等奖',
    Poetry: '《浔阳·春雪·归舟》',
    epicist: 'gun0394'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《意难平》',
    epicist: '燃烧起来胖茶'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《你的江湖是否也一个人》',
    epicist: '黏黏王'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《广场舞之星》',
    epicist: 'xiaolaoyu'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《一蓑烟雨任平生》',
    epicist: '芙蓉帐暖夜笙歌'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《棋握榆梅》',
    epicist: '冬雾为雪'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《绝美婚礼》',
    epicist: '夜昭葵'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《东邪西毒》',
    epicist: '晚来天已雪'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《是风动》',
    epicist: '阿雨Hitomi'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《碧海问舟》',
    epicist: '喵大仙'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《遮天》',
    epicist: '仙洛璃熙'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《醉眼笑看人世》',
    epicist: '炊饼饼饼'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《可能我撞了南墙才会回头吧》',
    epicist: '愔愔z'
},
{
    id: 4,
    level: '优秀奖',
    Poetry: '《手掌心》',
    epicist: '涂山凉月'
}
]
const movie = [{
    id: 1,
    pic: "./images/audio_01.png",
    title: '陈清欢的厨神之路',
    name: '冷冷冷',
},
{
    id: 2,
    pic: "./images/audio_02.png",
    title: '《逆水寒 幽鸣异语录》-入殓师卷',
    name: '柚子酱丶',
},
{
    id: 3,
    pic: "./images/audio_03.png",
    title: '大宋映画-天龙八部（第一回）',
    name: '无相丶',
},
{
    id: 4,
    pic: "./images/audio_04.png",
    title: '来呀，造作呀。',
    name: '笔墨微凉',
},
{
    id: 5,
    pic: "./images/audio_05.png",
    title: '大宋梦华录一（逆水寒结局延伸，纯属个人脑洞）',
    name: '筑梦师丶阿衿',
},
{
    id: 6,
    pic: "./images/audio_06.png",
    title: '逆水寒唯美爱恋【山有木兮】',
    name: '美美的夏夏',
},
{
    id: 7,
    pic: "./images/audio_07.png",
    title: '【逆水寒全门派女群像】风花雪月 惊现铁衣小姐姐！',
    name: '梦兮',
},
{
    id: 8,
    pic: "./images/audio_08.png",
    title: '是风动-问鼎江湖睡觉了帮宣',
    name: '锦鲤',
},
{
    id: 9,
    pic: "./images/audio_09.png",
    title: '【大宋情人节】元宵之今朝花灯会（燕无归x旅妹）',
    name: '纸鸢',
},
{
    id: 10,
    pic: "./images/audio_10.png",
    title: '【素问X血河唯美百合向】红霞染素风',
    name: '观止',
},
{
    id: 11,
    pic: "./images/audio_11.png",
    title: '喵喵舞',
    name: '愔愔',
},
{
    id: 12,
    pic: "./images/audio_12.png",
    title: '最后祝您，晚年幸福！',
    name: '斜月寒星',
},
{
    id: 13,
    pic: "./images/audio_13.png",
    title: '莫负初心',
    name: '荷塘月色 奈落丶',
},
{
    id: 14,
    pic: "./images/audio_14.png",
    title: '【流浪地球X遮天X洛天依X逆水寒】《遮天》动漫伪·预告！让洛天依用流浪地球的方式带你在逆水寒编辑器里',
    name: '仙洛璃熙',
},
{
    id: 15,
    pic: "./images/audio_15.png",
    title: '【大宋映画】逆水寒编辑器-荒村魅影（胆小勿看）逆水寒居然有这么恐怖的地图~',
    name: '染香゛',
},
{
    id: 16,
    pic: "./images/audio_16.png",
    title: '愿与爷相随',
    name: '小鱼儿旰',
},
{
    id: 17,
    pic: "./images/audio_17.png",
    title: '【逆水寒】收到这个视频的女生都哭了~太美了~值得一辈子留念~超恩爱情缘小视频《夙念》',
    name: '初初初初初盏',
},
{
    id: 18,
    pic: "./images/audio_18.png",
    title: '浅月',
    name: '归尘丶',
},
{
    id: 19,
    pic: "./images/audio_19.png",
    title: '《桃花妆》',
    name: '羽乂然',
},
{
    id: 20,
    pic: "./images/audio_20.png",
    title: '【大宋映画】倚天屠龙记史上最攻最帅赵敏出场片段',
    name: '喵大仙',
},
{
    id: 21,
    pic: "./images/audio_21.png",
    title: '无我相',
    name: '孤灯残云',
},
{
    id: 22,
    pic: "./images/audio_22.png",
    title: '风华天下',
    name: '南罙',
},
{
    id: 23,
    pic: "./images/audio_23.png",
    title: '尢蘭的酒，九月的故事初遇时，你明尢蘭，我名九月离去时，你亦名尢蘭，我亦名九月',
    name: '九月',
},
{
    id: 24,
    pic: "./images/audio_24.png",
    title: '一生一世一双人',
    name: '九尾Queen丶',
},
]


// 1. 渲染获奖模块
function fun(arr) {
    return arr.map(item => {
        return `
    <tr>
        <td>${item.Poetry}</td>
        <td>${item.epicist}</td>
        <td><a target="_blank" href="#"> 查看详情</a></td>
    </tr>
`
    }).join('')
}
fun(goodList)

function rander() {
    let newtd = goodList
    newtd = goodList.filter(item => item.level === '一等奖')
    document.querySelector('.tbody_1').innerHTML = fun(newtd)

    newtd = goodList.filter(item => item.level === '二等奖')
    document.querySelector('.tbody_2').innerHTML = fun(newtd)

    newtd = goodList.filter(item => item.level === '三等奖')
    document.querySelector('.tbody_3').innerHTML = fun(newtd)

    newtd = goodList.filter(item => item.level === '优秀奖')
    document.querySelector('.tbody_4').innerHTML = fun(newtd)
}
rander()

// 2. 电影节渲染模块
function getMovie() {
    function rander_1(arr) {
        const div = `<div class="list-item default"></div>`

        document.querySelector('.list-content-wrap').innerHTML = div + arr.filter((item, i) => i < 8).map((item) => {
            const { pic, title, name } = item
            return `
            <div class="list-item">
            <img src="${pic}" alt="">
            <div class="img_mask"></div>
            <a href="#" class="top-btn detail"></a>
            <div class="middle-cover"></div>
            <p class="desc">${title}</p>
            <p class="rolename">
                <i></i>
                ${name}
            </p>
            <div class="share-btn">
                <div class="list-share-wrap">
                    <div class="list-share-item weixin"></div>
                    <div class="list-share-item yixin"></div>
                    <div class="list-share-item weibo"></div>
                    <div class="list-share-item kongjian"></div>
                </div>
            </div>
        </div>
            `
        }).join('')
    }
    rander_1(movie)

    // 鼠标经过离开隐藏显示分享链接
    function getEnter() {
        const shares = document.querySelectorAll('.share-btn')
        const list_share = document.querySelectorAll('.list-share-wrap')
        shares.forEach((item, i) => {
            item.addEventListener('mouseenter', function () {
                list_share[i].style.opacity = 1
            })
            item.addEventListener('mouseleave', function () {
                list_share[i].style.opacity = 0
            })
        })
    }
    getEnter()

    // 鼠标经过盒子中间添加动画效果
    function play() {
        const middle_cover = document.querySelectorAll('.middle-cover')
        for (let i = 0; i < middle_cover.length; i++) {
            middle_cover[i].addEventListener('mouseenter', function () {
                this.classList.add('play-btn')
            })
            middle_cover[i].addEventListener('mouseleave', function () {
                this.classList.remove('play-btn')
            })
        }
    }
    play()


    // 热门推荐导航切换
    const current = document.querySelectorAll('.list-wrap .current')
    function getList() {
        const list_switch = document.querySelector('.list-switch-wrap')
        list_switch.addEventListener('click', function (e) {
            if (e.target.tagName === 'DIV') {
                document.querySelector('.list-switch-wrap .active').classList.remove('active')
                e.target.classList.add('active')

                document.querySelector('.list-wrap .current.weiyi').classList.remove('weiyi')
                current[e.target.dataset.id].classList.add('weiyi')
            }
            document.documentElement.scrollTop = document.querySelector('.inner-nav-wrap').offsetTop
            rander_1(movie)
            getEnter()
            play()



        })
    }
    getList()

    // 输入选手昵称模块
    const search = document.querySelector('.list-search-wrap')
    const ipt = search.querySelector('input')
    let newArr = movie
    search.addEventListener('keyup', function (e) {
        if (e.target.tagName === 'INPUT' && e.key === 'Enter') {
            newArr = movie.filter(item => {
                return item.name === ipt.value.trim()
            })
            ipt.value = ''
            document.querySelector('.list-switch-wrap .active').classList.remove('active')
            document.querySelector('.list-switch-item.new').classList.add('active')
            document.querySelector('.list-wrap .current.weiyi').classList.remove('weiyi')
            current[0].classList.add('weiyi')
            document.documentElement.scrollTop = document.querySelector('.inner-nav-wrap').offsetTop
            rander_1(newArr)
            getEnter()
            play()
            if (newArr == '') {
                document.querySelector('.list-switch-wrap .active').classList.remove('active')
                document.querySelector('.list-switch-item.new').classList.add('active')
                document.querySelector('.list-wrap .current.weiyi').classList.remove('weiyi')
                current[1].classList.add('weiyi')
            }
        }
    })


    // 换一批模块
    const btn_change = document.querySelector('.btn-change')
    btn_change.addEventListener('click', function () {
        document.documentElement.scrollTop = document.querySelector('.inner-nav-wrap').offsetTop

        var shuffled = movie.slice(0), i = movie.length, min = i - 8, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        rander_1(shuffled.slice(min))

    })
}
getMovie()


// 导航栏切换
function getNav() {
    const inner_nav_wrap = document.querySelector('.inner-nav-wrap')
    // 1. 5个导航栏切换类
    const inner_nav_item = document.querySelectorAll('.inner-nav-item')
    const nav_wrap = document.querySelector('.nav-wrap')
    // 鼠标经过上面的导航 排他
    nav_wrap.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'A') {
            const old = document.querySelector('.nav-wrap .active')
            if (old) old.classList.remove('active')
            e.target.classList.add('active')
            e.target.style.transform = `translateY(-20px)`

        }
    })
    nav_wrap.addEventListener('mouseout', function (e) {
        if (e.target.tagName === 'A') {
            const old = document.querySelector('.nav-wrap .active')
            if (old) old.classList.remove('active')
            e.target.classList.add('active')
            e.target.style.transform = `translateY(0)`

        }
    })

    // 鼠标点击上面的导航 跳转到对应的位置
    nav_wrap.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            const old = document.querySelector('.nav-wrap .active')
            if (old) old.classList.remove('active')
            e.target.classList.add('active')
            document.documentElement.scrollTop = document.querySelector('.inner-nav-wrap').offsetTop

        }
    })


    // 2. 声明一个位置的数组
    // const pisition = ['355', '612', '860', '1113', '1365']
    // 3. 遍历5个导航
    inner_nav_item.forEach((item, i) => {
        // 4. 鼠标经过更换图片和位置
        item.addEventListener('mouseenter', function (e) {
            document.querySelector('.inner-nav-item.active').classList.remove('active')
            e.target.classList.add('active')

            // this.style.background = 'url(../images/bg-nav_active.png) no-repeat'
            // this.style.backgroundPosition = `-${pisition[i]}px -0`

        })
    })

    // 5. 导航栏鼠标点击事件
    const xianshi = document.querySelectorAll('.container-inner .xianshi')
    inner_nav_wrap.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            document.querySelector('.inner-nav-item.active').classList.remove('active')
            e.target.classList.add('active')
            document.documentElement.scrollTop = document.querySelector('.inner-nav-wrap').offsetTop


            // 下面大盒子切换
            const nav = e.target.dataset.nav
            document.querySelector('.container-inner .xianshi.active').classList.remove('active')
            xianshi[nav].classList.add('active')
        }

    })

    inner_nav_wrap.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'A') {
            document.querySelector('.inner-nav-item.active').classList.remove('active')
            e.target.classList.add('active')


            // 下面大盒子切换
            const nav = e.target.dataset.nav
            document.querySelector('.container-inner .xianshi.active').classList.remove('active')
            xianshi[nav].classList.add('active')
        }

    })

}
getNav()


// logo 分享链接显示隐藏
document.querySelector('.index_btn.share').addEventListener('mouseenter', function () {
    this.children[0].style.display = 'block'
})
document.querySelector('.index_btn.share').addEventListener('mouseleave', function () {
    this.children[0].style.display = 'none'
})



// 验证用户名
function getReg() {
    // 1. 验证用户名
    const username = document.querySelector('[name=username]')
    const inputbox_one = document.querySelector('.inputbox.one')
    const inputbox_two = document.querySelector('.inputbox.two')

    // focus事件
    username.addEventListener('focus', function () {
        inputbox_one.style.borderColor = '#4aafe9'
    })
    // blur事件
    username.addEventListener('blur', function () {
        inputbox_one.style.borderColor = ''
    })

    // input事件
    username.addEventListener('input', function () {
        const u_tip = username.nextElementSibling
        // 点击事件
        u_tip.addEventListener('click', function () {
            username.value = ''
            this.style.display = 'none'
        })


        u_tip.style.display = username.value.trim() === '' ? 'none' : 'block'
    })


    username.addEventListener('change', verifyName)
    function verifyName() {
        const m_nerror = document.querySelector('.m-nerror')
        const span = document.querySelector('.m-nerror span')
        const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]{3,10}$/
        if (!reg.test(username.value)) {
            m_nerror.style.display = 'block'
            span.innerHTML = '输入不合法，请输入3-10位'
            return false
        }
        // 2.6 符合规范 span 清空 不提醒
        span.innerHTML = ''
        m_nerror.style.display = 'none'
        return true
    }


    // 5. 验证的是密码
    // 5.1 获取密码表单
    const password = document.querySelector('[name=password]')

    // focus事件
    password.addEventListener('focus', function () {
        inputbox_two.style.borderColor = '#4aafe9'
    })
    // blur事件
    password.addEventListener('blur', function () {
        inputbox_two.style.borderColor = ''
    })
    // input事件
    password.addEventListener('input', function () {
        const u_tip = password.nextElementSibling
        // 点击事件
        u_tip.addEventListener('click', function () {
            password.value = ''
            this.style.display = 'none'
        })
        u_tip.style.display = password.value.trim() === '' ? 'none' : 'block'

    })

    // 5.2 使用change 事件 值发生变化的时候
    password.addEventListener('change', verifyPsd)
    // 5.3 封装 verifyPsd 函数
    function verifyPsd() {
        const m_nerror = document.querySelector('.m-nerror')
        const span = document.querySelector('.m-nerror span')
        // 5.4 定规则 密码
        const reg = /^[a-zA-Z0-9-_]{6,20}$/
        // 5.5 如果不符合规范 span提示输入不合法 return false 中断程序
        if (!reg.test(password.value)) {
            m_nerror.style.display = 'block'
            span.innerHTML = '输入不合法，请输入6-10位'
            return false
        }
        // 5.6 符合规范 span 清空 不提醒
        span.innerHTML = ''
        m_nerror.style.display = 'none'
        return true
    }



    // 8. 提交模块
    const form = document.querySelector('form')
    const queren = document.querySelector('[name=checkbox]')
    form.addEventListener('submit', function (e) {
        // 8.2 阻止默认行为提交
        e.preventDefault()
        // 8.1 判断是否勾选我同意模块 如果没勾选就是false，加个! 判断条件为true，执行以下代码
        if (!queren.checked) {
            return alert('请勾选用户协议')
        }
        if (!verifyName()) e.preventDefault()
        if (!verifyPsd()) e.preventDefault()
    })

}


getReg()

// 滚动到导航栏固定在头部
// function getFixed() {
//     const inner_nav_wrap = document.querySelector('.inner-nav-wrap')
//     window.addEventListener('scroll', function () {
//         const n = document.documentElement.scrollTop
//         if (n >= inner_nav_wrap.offsetTop) {
//             inner_nav_wrap.style = 'position:fixed;top:0'
//         } else {
//             inner_nav_wrap.style.position = 'absolute';
//             inner_nav_wrap.style.top = 0
//         }
//         // inner_nav_wrap.style.position = (n - inner_nav_wrap.scrollTop) >= 0 ? 'fixed;top:0' : 'absolute'
//         // n - inner_nav_wrap.offsetTop >= 0 ? inner_nav_wrap.style.position = 'fixed' : inner_nav_wrap.style.position = 'absolute;top:0'
//         console.log(n - inner_nav_wrap.offsetTop);
//     })
// }
// getFixed()