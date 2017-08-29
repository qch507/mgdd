function goURL(index) {
    if (index == 1) {
        window.location.href = "https://mp.weixin.qq.com/s?__biz=MzIxNzk1NTE3NA==&mid=100000018&idx=1&sn=4fd948a3a5467c7d568918d87ebb86b8&chksm=17f0af1b2087260ddae50356b5ab61646a53a3a60b2aec2eae60c5e7b994f4531d53ab12aca8&mpshare=1&scene=1&srcid=082473RPP79PCZ1U5WSiTQE8&pass_ticket=6sfW1l5Pw9QJJH6A4oqKmhgnuHNGkKo8Tu2xP67ZgVoQs2qngSjO5NYAXfSogqkJ#rd";
    }
    if (index == 2) {
        window.location.href = "https://mp.weixin.qq.com/s?__biz=MzIxNzk1NTE3NA==&mid=100000019&idx=1&sn=677fadfacef74c43f36ebc47f884181d&chksm=17f0af1a2087260cd97d12e63f631878c457958e8c2e41c59294b74a3a931c2cc0f47f3276e7&mpshare=1&scene=1&srcid=0824kqDtp0tIBKDZExbwg9Wi&pass_ticket=6sfW1l5Pw9QJJH6A4oqKmhgnuHNGkKo8Tu2xP67ZgVoQs2qngSjO5NYAXfSogqkJ#rd";
    }
    if (index == 3) {
        window.location.href = "https://mp.weixin.qq.com/s?__biz=MzIxNzk1NTE3NA==&mid=100000020&idx=1&sn=0ed8c2c0fffcbb81dfc96751abc6fc9b&chksm=17f0af1d2087260b668818e493230eebb89963d9ec8a1b917d10bf3080488acff81b195e759e&mpshare=1&scene=1&srcid=0824cVNVSiRUTsk4q1SWasYB&pass_ticket=6sfW1l5Pw9QJJH6A4oqKmhgnuHNGkKo8Tu2xP67ZgVoQs2qngSjO5NYAXfSogqkJ#rd";
    }
}

function closeAlert() {
    document.getElementById('alertsuccess').style.display='none';
}



var myScroll;

function loaded() {
    myScroll = new iScroll('wrapper', {
        snap: true,
        momentum: false,
        hScrollbar: false,
        onScrollEnd: function () {
            document.querySelector('#indicator > li.active').className = '';
            document.querySelector('#indicator > li:nth-child(' + (this.currPageX + 1) + ')').className = 'active';
        }
    });
}

document.addEventListener('DOMContentLoaded', loaded, false);




