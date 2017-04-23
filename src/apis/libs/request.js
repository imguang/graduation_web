/**
 * Http请求处理
 */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

var request = function () {

}

request.domain = 'http://localhost:8171/gproject/';

request.alert = (response) => {
    var msg = '出现错误，请联系管理员：\n\n';
    if (response.body != null && response.body.code != null) {
        msg += '错误码：' + response.body.code + '\n';
        msg += '错误信息：' + response.body.msg + '\n\n';
    }
    msg += '完整信息如下：\n' + JSON.stringify(response) + '\n\n';
    console.log(msg);
    //alert(msg);
};

/**
 * 检查请求是否正常，code为0表示请求正常。
 * @param response
 * @returns {boolean}
 */
request.isRequestOK = response => {
    if (response.body === undefined
        || response.body.code === undefined
        || response.body.code != '0') {
        return false;
    }
    return true;
};

/**
 * 该请求出现错误
 * @param response
 */
request.error = response => {
    console.log('请求数据', response.body);
    request.alert(response);
};

/**
 * 该请求得到了服务器的响应数据
 * @param response
 * @param successRun
 * @param errorRun
 */
request.successRun = (response, successRun, errorRun) => {
    console.log(response);
    var deal = false;
    if (request.isRequestOK(response)) {
        deal = true;
        if (successRun != null)
            successRun(response.body.data);
    }
    else if (errorRun != null) {
        deal = errorRun(response);
    }
    if (deal == false) {
        request.alert(response);
        throw '请求错误';
    }
}

request.post = function (url, body, successRun, errorRun) {
    Vue.http.post(request.domain + url, body)
        .then(response => {
            request.successRun(response, successRun, errorRun);
        }, request.error);
};

request.delete = function (url, successRun, errorRun) {
    Vue.http.delete(request.domain + url)
        .then(response => {
            request.successRun(response, successRun, errorRun);
        }, request.error);
};

request.put = function (url, body, successRun, errorRun) {
    Vue.http.put(request.domain + url, body)
        .then(response => {
            request.successRun(response, successRun, errorRun);
        }, request.error);
};

request.get = function (url, successRun, errorRun) {
    Vue.http.get(request.domain + url)
        .then(response => {
            request.successRun(response, successRun, errorRun);
        }, request.error);
};

export default request;
