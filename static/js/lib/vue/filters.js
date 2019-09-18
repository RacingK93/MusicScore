require(["vue"],function (Vue) {
	// userSex 用户性别，未知:0 男：1 女：2
	Vue.filter('paymentStatus', function (value) {
		if(value == '1'){
			value = "待确认"
		}else if(value == '2'){
			value = "已报价"
		}else if(value == '3'){
			value = "待支付"
		}else if(value == '4'){
			value = "支付核实中"
		}else if(value == '5'){
			value = "支付成功"
		}
		return value
	})
	
	
})
