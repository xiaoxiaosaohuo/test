+function($,_){

	var tableData;
	function Report (el,options){
		this.$element = $(el);
		this.options = options;
		// this.init(this.$element, options);

		this.init();
	}
	Report.defaults = {
		cleType:"1",
	}
	Report.prototype.init = function() {
		console.log(this.options);
		var self =this;
		var columns =_.flowRight(self.setColumns,self.initTableHead).bind(self);
    	var renderTable = _.flowRight(self.setTable(columns,self),self.dataset).bind(self);
    	var showTable = _.flowRight(self.getData(self.chartData,renderTable),self.url).bind(self);
    	showTable("1");
    	var chart = _.flowRight(self.getData())
    	self.toggleChart();
		
	};
	Report.prototype.url= function(){
		console.log(this);
        return {
            url:"http://localhost:3000/js/json/checkknowledge01.json",
            queryString:{
                data:{
                    groupID:"1"
                }
            }
        }
    }
	Report.prototype.getData=_.curry(function(callback2,callback1,url){
		
		console.log(url);
        request(url.url,url.queryString)
        .done(function(ret){
        	alert(23)
          callback1(ret);
          callback2(ret);
        })
      })
	
	Report.prototype.setTable=  _.curry(function(columns,self,data){
        alert(1);
        console.log(self);
        var tablecolumns =columns(data);
        self.initTable(data,tablecolumns)

      })
	Report.prototype.dataset = function(ret){
        console.log(ret.data);
        // 在此构造
      	return data1 =[{
	            "groupShortName": "北京世纪滇风餐饮有限公司1",
	            "shopID":"1",
	            "orderNum1": "5",
	            "orderNum2": "5",
	            "orderNum3": "5",
	            "orderNum4": "5",
	            "orderNum5": "5",
	            "orderNum6": "5",
	            "orderNum7": "5",
	            "orderNum8": "5",
	            "orderNum9": "5",
	            "orderNum10": "5",
	            "orderNum11": "5",
	            "orderNum12": ""
	        },
	        {
	            "groupShortName": "北京世纪滇风餐饮有限公司2",
	            "shopID":"2",
	            "orderNum1": "3",
	            "orderNum2": "3",
	            "orderNum3": "3",
	            "orderNum4": "3",
	            "orderNum5": "3",
	            "orderNum6": "3",
	            "orderNum7": "3",
	            "orderNum8": "3",
	            "orderNum9": "3",
	            "orderNum10": "3",
	            "orderNum11": "3",
	            "orderNum12": ""
	        },
	        {
	            "groupShortName": "北京世纪滇风餐饮有限公司3",
	            "shopID":"3",
	            "orderNum1": "4",
	            "orderNum2": "4",
	            "orderNum3": "4",
	            "orderNum4": "4",
	            "orderNum5": "4",
	            "orderNum6": "4",
	            "orderNum7": "4",
	            "orderNum8": "4",
	            "orderNum9": "4",
	            "orderNum10": "",
	            "orderNum11": "",
	            "orderNum12": ""
	        }
	    ]
	}
	Report.prototype.chartData = function(ret){
		console.log(ret.data);
		alert(111);
		return data = [
			[
				{  "shopName":"兰博基尼",
						"date": "2013-01",  
						"order":    12   
				},{  "shopName":"兰博基尼",
						"date": "2013-02",  
						"order":    342  
				},{  "shopName":"兰博基尼",
						"date": "2013-03",  
						"order":    34   
				},{  "shopName":"兰博基尼",
						"date": "2013-04",  
						"order":    89  
				},{  "shopName":"兰博基尼",
						"date": "2013-05",  
						"order":    26   
				},{  "shopName":"兰博基尼",
						"date": "2013-06",  
						"order":    45  
				},{  "shopName":"兰博基尼",
						"date": "2013-07",  
						"order":    80 
				},{  "shopName":"兰博基尼",
						"date": "2013-08",  
						"order":    12   
				},{  "shopName":"兰博基尼",
						"date": "2013-09",  
						"order":    40  
				},{  "shopName":"兰博基尼",
						"date": "2013-10",  
						"order":    28   
				},{  "shopName":"兰博基尼",
						"date": "2013-11",  
						"order":    4  
				}
		],
		[
		 {  "shopName":"雪佛兰",
						"date": "2013-01",  
						"order":    134   
				},{  "shopName":"雪佛兰",
						"date": "2013-02",  
						"order":    342  
				},{  "shopName":"雪佛兰",
						"date": "2013-03",  
						"order":    34   
				},{  "shopName":"雪佛兰",
						"date": "2013-04",  
						"order":    89  
				},{  "shopName":"雪佛兰",
						"date": "2013-05",  
						"order":    26   
				},{  "shopName":"雪佛兰",
						"date": "2013-06",  
						"order":    455  
				},{  "shopName":"雪佛兰",
						"date": "2013-07",  
						"order":    80 
				},{  "shopName":"雪佛兰",
						"date": "2013-08",  
						"order":    12   
				},{  "shopName":"雪佛兰",
						"date": "2013-09",  
						"order":    40  
				},{  "shopName":"雪佛兰",
						"date": "2013-10",  
						"order":    28   
				},{  "shopName":"雪佛兰",
						"date": "2013-11",  
						"order":    123  
				}
		],
		[
		 {  "shopName":"劳斯莱斯",
						"date": "2013-01",  
						"order":    12   
				},{  "shopName":"劳斯莱斯",
						"date": "2013-02",  
						"order":    342  
				},{  "shopName":"劳斯莱斯",
						"date": "2013-03",  
						"order":    34   
				},{  "shopName":"劳斯莱斯",
						"date": "2013-04",  
						"order":    89  
				},{  "shopName":"劳斯莱斯",
						"date": "2013-05",  
						"order":    26   
				},{  "shopName":"劳斯莱斯",
						"date": "2013-06",  
						"order":    45  
				},{  "shopName":"劳斯莱斯",
						"date": "2013-07",  
						"order":    80 
				},{  "shopName":"劳斯莱斯",
						"date": "2013-08",  
						"order":    12   
				},{  "shopName":"劳斯莱斯",
						"date": "2013-09",  
						"order":    700  
				},{  "shopName":"劳斯莱斯",
						"date": "2013-10",  
						"order":    28   
				},{  "shopName":"劳斯莱斯",
						"date": "2013-11",  
						"order":    4  
				}
		]
	]
	}

	Report.prototype.initTableHead=function(data){
		var self = this;
		console.log(self);
		var data = data[1],
	        arr=[],
	        i=1;
	    var cleType = this.options.cleType;

	    data = _.omit(data,"groupShortName","shopID");
	    _.each(data,function(value,key){
	        if(data[key]!=""){
	            // 构造动态表头，要判断年月周日，构造不同的对象
	            if(cleType==="1"){
	                 var obj =
	                    {
	                       field: key,
	                       title: i+"日",
	                       sortable: true,
	                       align: 'center'
	                   }
	            }else if(cleType==="2"){
	                var obj =
	                    {
	                       field: key,
	                       title: i+"周",
	                       sortable: true,
	                       align: 'center'
	                   }
	               }else if(cleType==="3"){
	                var obj =
	                    {
	                       field: key,
	                       title: i+"月",
	                       sortable: true,
	                       align: 'center'
	                   }
	               }else if(cleType==="4"){
	                    var obj =
	                        {
	                           field: key,
	                           title: i+"季度",
	                           sortable: true,
	                           align: 'center'
	                       }
	               }
	           arr.push(obj);
	           i++;
	        }
	    })
	    console.log(arr)
    	return arr;
	}


	Report.prototype.setColumns = function(arr){
		// var length =data[0].length-1;
	    // 列横跨的长度
	    var columns=[[]];
	   var cleType = this.options.cleType;
	    console.log(cleType);
	    var length = arr.length;
	    switch(cleType){
	        case "1":
	            // do天
	        columns= [
	            [
	               {   title: '店铺ID  ',
	                   field: 'shopID',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	                   visible: false,
	               }, {
	                   title: '商户名称',
	                   field: 'groupShortName',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	               },
	               {
	                   title: '月',
	                   colspan: length,
	                   align: 'center'
	               },
	               {
	                   title: '统计',
	                   colspan: 2,
	                   align: 'center'
	               }
	            ],
	            [
	                {
	                    field: 'operate',
	                    title: '合计',
	                    align: 'center',
	                    formatter: totalFormatter
	                },
	                {
	                    field: 'operate',
	                    title: '操作',
	                    align: 'center',
	                    formatter: totalFormatter
	                }
	            ]
	        ];
	       columns[1]=arr.concat(columns[1]);
	            break;
	        case "2":
	        // do周
	        columns= [
	           [
	               {   title: '店铺ID  ',
	                   field: 'shopID',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	                   visible: false,
	               }, {
	                   title: '商户名称',
	                   field: 'groupShortName',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	               },
	               {
	                   title: '周',
	                   colspan: length,
	                   align: 'center'
	               },
	               {
	                   title: '统计',
	                   colspan: 1,
	                   align: 'center'
	               }
	           ],
	           [
	                {
	                    field: 'operate',
	                    title: '合计',
	                    align: 'center',
	                    formatter: totalFormatter
	                }
	           ]
	        ];
	       columns[1]=arr.concat(columns[1]);
	            break;
	        case "3":
	        // do月
	       columns= [
	           [
	               {   title: '店铺ID  ',
	                   field: 'shopID',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	                   visible: false,
	               }, {
	                   title: '商户名称',
	                   field: 'groupShortName',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	               },
	               {
	                   title: '年度',
	                   colspan: length,
	                   align: 'center'
	               },
	               {
	                   title: '统计',
	                   colspan: 1,
	                   align: 'center'
	               }
	           ],
	            [
	                {
	                    field: 'operate',
	                    title: '合计',
	                    align: 'center',
	                    formatter: totalFormatter
	                }
	           ]
	        ];
	        columns[1]=arr.concat(columns[1]);
	            break;
	        case "4":
	        // do 季度
	       columns= [
	           [
	               {   title: '店铺ID  ',
	                   field: 'shopID',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	                   visible: false,
	               }, {
	                   title: '商户名称',
	                   field: 'groupShortName',
	                   rowspan: 2,
	                   align: 'center',
	                   valign: 'middle',
	                   sortable: true,
	               },
	               {
	                   title: '季度',
	                   colspan: length,
	                   align: 'center'
	               },
	               {
	                   title: '统计',
	                   colspan: 1,
	                   align: 'center'
	               }
	           ],
	            [   {
	                    field: 'operate',
	                    title: '合计',
	                    align: 'center',
	                    formatter: totalFormatter
	                }
	           ]
	        ]
	       columns[1]=arr.concat(columns[1]);
	            break;
	        }

	    return columns;

	}

	Report.prototype.initTable=function(data,columns){
		var self=this;
		console.log(this);
	    $(self.$element).bootstrapTable('destroy');
	    $(self.$element).bootstrapTable({
	        data: data,
	        columns: columns
	    });
	}

	Report.prototype.showChart = function(options){
		var length = options.data.length;
		for(var i=0; i<=length-1;i++){
			console.log(options.data[0][0].shopName);
			var svg = dimple.newSvg(".chartContainer", "100%", 400);
			svg.attr("class","col-md-12 col-lg-6");
			var myChart = new dimple.chart(svg, options.data[i]);
			myChart.setBounds(60, 30, '75%', 300);
			var x = myChart.addCategoryAxis("x", options.X);
			x.title = options.Xtittle;
			x.addOrderRule("Date");
			var y = myChart.addMeasureAxis("y", options.Y);
			y.title = options.Ytittle;
			myChart.addColorAxis("order", ["green", "yellow", "red"]);
			var lines = myChart.addSeries(options.data[i][0].shopName,dimple.plot.line);
					lines.lineWeight = 5;
					lines.lineMarkers = true;
			var m = myChart.addSeries(null,dimple.plot.bubble);
			lines.getTooltipText = function (e) {
					console.log(e);
					return [
					options.Tipsx+e.cx,
					options.Tipsy+e.cy
					]
			};
			m.getTooltipText = function (e) {
					console.log(e);
					return [
					options.Tipsx+e.cx,
					options.Tipsy+e.cy
					]
			};
			myChart.addLegend(60, 10, "50%", 20, "right");
			myChart.draw();
			$(".chartContainer").attr("data-show","1");
		}
	}

	Report.prototype.toggleChart = function(){
		var self = this;
		// 切换视图
		console.log($(self.options.toggleElement))
		var e = $.Event('click')
		if(self.options.showChart){
			$(self.options.toggleElement).trigger(e)
		} else{
			return
		}

		$(self.options.toggleElement).on("click",function(e){
				var chartshow = $(".chartContainer").attr("data-show");
				console.log(typeof chartshow);
				console.log(chartshow)
				$(".chartContainer").fadeIn();
				if(chartshow==="0"){
					self.showChart({
					data:data,
					Tipsx:"日期：",
					Tipsy:"订单量：",
					X:"date",
					Y:"order",
					Xtittle:"日期",
					Ytittle:"订单量"
				})
				}else{
					$(".chartContainer").fadeOut().html("");
					$(".chartContainer").attr("data-show","0");
				}
				// console.log(ddd.val());
		})
	}
	function hidePrams(options){
            options.forEach(function(n) {
                $(n).hide();
            })
        }
	// 只写了一个
	function totalFormatter(value, row, index) {
	    var total = 0;
	    var obj = _.omit(row,"groupShortName","shopID");
	    $.each(obj,function(key,value){
	        if(value){
	            total+=parseInt(value);
	        }
	    })
	    return total;
	}
	
	function getIdSelections() {
	    return $.map($table.bootstrapTable('getSelections'), function (row) {
	        return row.id
	    });
	}
	 function responseHandler(res) {
	    $.each(res.rows, function (i, row) {
	        row.state = $.inArray(row.id, selections) !== -1;
	    });
	    return res;
	}
// 查询参数获取
    function searchReportPrams(){
        var arr =[];
        var searchItems=transformQueryString($("#search-prams").serialize());
        var weekStartArr = searchItems.startweek.split("-");
        var weekEndArr = searchItems.endweek.split("-");
        var startweek = getYearWeek(weekStartArr[0],weekStartArr[1],weekStartArr[2]);
        var endweek = getYearWeek(weekEndArr[0],weekEndArr[1],weekEndArr[2]);
        console.log(startweek,endweek);
    }
    // $table.on('all.bs.table', function (e, name, args) {
    //     console.log(name, args)
    // });
    // 选择月报表
    $("select[name='dimension']").on("change",function(){
        var value = this.value;
        switch(value){
            case "1" :
            $(".date-select").show();
             hidePrams([".year-select",".week-start",".week-end","month-select"]);
            break;
            case "2" :
            $(".week-start").show();
            $(".week-end").show();
            hidePrams([".month-select",".year-select",".date-select"])
            break;
            case "3" :
               $(".year-select").show();
               hidePrams([".month-select",".week-start",".week-end",".date-select"])
            break;
            case "4" :
             $(".year-select").show();
            hidePrams([".week-start",".week-end",".date-select"]);
            break;
        }
    })

	$("#table").on('all.bs.table', function (e, name, args) {
        console.log(name, args)
    });

	var old = $.fn.Report
  	$.fn.Report             = Plugin
  	$.fn.Report.Constructor = Report
	function Plugin(option) {
    return this.each(function () {
    	console.log($(this));
      var $this   = $(this)
      var data    = $this.data('table')
      var options = $.extend({}, Report.defaults, $this.data(), typeof option == 'object' && option)

      $this.data('table', (data = new Report(this, options)))
      
    })
  }

  return table;

}(jQuery,_)


 function detailFormatter(index, row) {
	    var html = [];
	    $.each(row, function (key, value) {
	        html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	    });
	    return html.join('');
	}


$('#searchDate').datetimepicker({
            language:  'zh-CN',
            autoclose: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            pickerPosition:'bottom-left'
            });
$('#week-start').datetimepicker({
    language:  'zh-CN',
    autoclose: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    pickerPosition:'bottom-left'
    });
$('#week-end').datetimepicker({
    language:  'zh-CN',
    autoclose: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    pickerPosition:'bottom-left'
    });

$("#searchReportBtn").on("click",function(){
    // searchReportPrams();
    var searchPramsForm = $("#search-prams");
    // app("1");

    $('#table').Report({
      prams:1,
      cleType:$("select[name='dimension']").val(),
      showChart:false,
      toggleElement:"#toggleChart"
    });
              // searchReportPrams();
    })
