<template>
    <vue-daum-map
    :appKey="appKey"
    :center.sync="center"
    :level.sync="level"
    :mapTypeId="mapTypeId"
    :libraries="libraries"
    @load="onLoad"
    style="width:100%;height:50vh;"/>
</template>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&libraries=drawing"></script>
<script>
import VueDaumMap from 'vue-daum-map'
export default {
    name: "Map",
    data: () => ({
        appKey: '${appkey}', // 테스트용 appkey
        center: {lat: '35.129388', lng: '126.854593'}, // 지도의 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도),
        mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
        libraries: ['drawing'], // 추가로 불러올 라이브러리
        map: null // 지도 객체. 지도가 로드되면 할당됨.

    }),
    components: {
        VueDaumMap
    },
    methods: {
        // 지도가 로드 완료되면 load 이벤트 발생
        onLoad (map) {
            this.map = map
            // var markerPosition  = new kakao.maps.LatLng(this.center.lat , this.center.lng);
            // // 마커를 생성합니다
            // var marker = new kakao.maps.Marker({
            //     position: markerPosition
            // });
            // // 마커가 지도 위에 표시되도록 설정합니다
            // marker.setMap(map);

            var mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new kakao.maps.LatLng(this.center.lat , this.center.lng); // 마커가 표시될 위치입니다

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage // 마커이미지 설정
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var content = '<div class="customoverlay">' +
                '  <a href="https://map.kakao.com/?itemId=11394060" target="_blank">' +
                '    <span class="title">파워점핑줄넘기앤태권도</span>' +
                '  </a>' +
                '</div>' +
                '<style>' +
                '.customoverlay {position:relative;bottom:85px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}' +
                '.customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}' +
                '.customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}' +
                '.customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}' +
                '.customoverlay:after {position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png);}' +
                '</style>';

            // 커스텀 오버레이가 표시될 위치입니다
            var position = new kakao.maps.LatLng(this.center.lat , this.center.lng);

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.CustomOverlay({
                map: map,
                position: position,
                content: content,
                yAnchor: 1
            });
        }
    }
}
</script>
