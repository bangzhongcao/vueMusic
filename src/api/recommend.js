import jsonp from 'common/js/jsonp';
import {commonParams,options} from './config';

export function getRecommend(){
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
	//assign()是一个深度拷贝方法,将后面的对象合并
	const data = Object.assign({},commonParams,{
		//commonParams为公共参数，最后一个对象为私有参数
		platform:'h5',
		uin:0,
		needNewCode:1
	});

	return jsonp(url,data,options);
}