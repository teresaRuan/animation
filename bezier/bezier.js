/*
@param {number} n n阶贝塞尔曲线
@param {array} array 需要的点 格式{x,y}
 */
var bezier = function ( n, array ) {

    var i = 1, j=0;
    var arrX = [];
    var arrY = [];

    if( +n <= 0 ){
      console.log('请输入正确的阶数');
      return 
    }
    if ( +n !== array.length-1 ) {
        console.log('请输入正确的参数格式') ;
        return
    }

//迭代工作效率高于递归，所以这里用迭代进行实现
        for ( ; i <= n ; ++i ) {
            for ( ; j <= n-i ; ++j ) {
                if( i === 1 ) {
                    arrX[j] = '(1-t)*' + array[j].x + ' + t*' + array[j+1].x;
                    arrY[j] = '(1-t)*' + array[j].y + ' + t*' + array[j+1].y;
                    continue
                }
                arrX[j] = '(1-t)*' + arrX[j] + '+ t*' + arrX[j + 1];
                arrY[j] = '(1-t)*' + arrY[j] + '+ t*' + arrY[j + 1];
            }
        }

    return function ( t ) {
        var resultX =  arrX[0]
                       .toString()
                       .replace( /t/g, t );
        var resultY = arrY[0]
                      .toString()
                      .replace( /t/g, t );

        return '(' + eval( resultX ) + ',' + eval( resultY ) + ')';
    }
}

var ooo = bezier ( 2, [
    {x:0, y:0},
    {x:0.4, y:0.8},
    {x:1, y:1},
])( 0.2 )
